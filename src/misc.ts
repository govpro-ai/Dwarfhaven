export default null

declare global {
  interface Window {
    /** Downloads an image from a URL and fills it into an image tag (specified by ID).
     * @deprecated This function no longer applies to Vue 3 and will be removed or replaced in the future. */
    downloadAndFillImage: (url: string, imgId: string, tries?: number) => Promise<any>
    app: any // FIXME: remove once typings complete
    /** Copies a string to the clipboard. */
    copy: (t: string) => void
    /** Inserts an element at the cursor caret. */
    insertElementAtCursor: (el: Node) => void
  }
  const Vue: any
}

const toDataURL = (src: string, outputFormat: string): Promise<string> => new Promise((s, _) => {
  const img = document.createElement('img')
  img.crossOrigin = "Anonymous"

  img.onload = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) return;
    canvas.height = img.naturalHeight
    canvas.width = img.naturalWidth
    ctx.drawImage(img, 0, 0)
    const dataURL = canvas.toDataURL(outputFormat)
    s(dataURL)
  }

  img.src = src
  if (img.complete ?? true) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
    img.src = src
  }
})

window.downloadAndFillImage = async (url, imgId, tries=10) => {
  const el = document.getElementById(imgId) as HTMLImageElement
  if (!el && tries > 0) return setTimeout(() => window.downloadAndFillImage(url, imgId, tries-1), 500)

  await Vue.nextTick()

  const dataURL = await toDataURL(url, "image/png")
  el.src = dataURL
  el.removeAttribute('id')
  el.removeAttribute('data-formula')
  const htmlContent = document.getElementsByClassName('editor')[0].children[0].innerHTML
  // FIXME: below is hard without typings
  window.app.html = htmlContent
  window.app.editor.setContent(htmlContent)
  return
}

window.copy = (t: string) => {
  const el = document.createElement('textarea')
  el.value = t
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selection = document.getSelection()
  if (!selection) return;
  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    const selection_ = document.getSelection() ?? selection
    if (!selection_) return;
    selection_.removeAllRanges()
    selection_.addRange(selected)
  }
}

//! this has been modified from older aiko mail versions and needs checking
window.insertElementAtCursor = (el: Node) => {
  const selection = window.getSelection()
  if (!selection) throw Error("Can't find the cursor caret.")
  const range = selection.getRangeAt(0)
  range.deleteContents()
  range.insertNode(el)
}
