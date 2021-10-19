export default null

declare global {
  interface Window {
    unescapeHTML: (s: string) => string
    html2Text: (html: string) => string
    html2Element: (html: string) => ChildNode | null
    objectId2Date: (id: string) => Date
    channel2Hex: (c: number) => string
    rgb2Hex: (r: number, g: number, b: number) => string
    rgbIsDark: (r: number, g: number, b: number) => boolean
    image2Color: (url: string) => Promise<string | null>
    ext2FontAwesomeIcon: (ext: string) => string
    ColorThief: any
  }
}


window.unescapeHTML = (
  () => {
    const element = document.createElement('div')
    const entity = /&(?:#x[a-f0-9]+|#[0-9]+|[a-z0-9]+);?/ig
    return (str: string) => {
      str = str.replace(entity, (m: string) => {
        element.innerHTML = m
        return element.textContent ?? ""
      })
      element.textContent = ""
      return str
    }
  }
)()

const parser = new DOMParser()

window.html2Text = (html: string) => {
  if (html.length < 5000) html = html.replace(/<style[^>]*>([^<]|\n|\r\n)*<\/style>/gi, '')
  const doc = parser.parseFromString(html, 'text/html')
  doc.close()
  return doc.body.innerText.trim().replace(/( |\n)+/g, ' ')
}

window.html2Element = (html: string) => {
  const template = document.createElement('template')
  html = html.trim() // Never return a text node of whitespace as the result
  template.innerHTML = html
  return template.content.firstChild
}

window.objectId2Date = (id: string) => {
  const timestamp = id.substring(0, 8)
  return new Date(parseInt(timestamp, 16) * 1000)
}

window.channel2Hex = (c: number) => c.toString(16).padStart(2, '0')

window.rgb2Hex = (r: number, g: number, b: number) =>
  window.channel2Hex(r) + window.channel2Hex(g) + window.channel2Hex(b)
;

window.rgbIsDark = (r: number, g: number, b: number) => {
  const hsp = Math.sqrt(0.299 * (r ** 2) + 0.587 * (g ** 2) + 0.114 * (b ** 2))
  return hsp < 150
}

window.image2Color = (url: string) => new Promise((s, _) => {
  const thief = new window.ColorThief()
  const image = new Image()
  image.onload = () => {
    const palette = thief.getPalette(image) as [number, number, number][]
    const darkColors = palette.filter(rgb => window.rgbIsDark(...rgb))
    if (darkColors.length == 0) return s(null)
    const rgb = darkColors[0]
    const color = window.rgb2Hex(...rgb)
    return s(color)
  }
  image.crossOrigin = 'Anonymous'
  image.src = url
})

window.ext2FontAwesomeIcon = (ext: string) =>  {
  switch (ext) {
    case 'gz':
      return 'fa-file-archive'
    case 'zip':
      return 'fa-file-archive'
    case 'tar':
      return 'fa-file-archive'
    case '7z':
      return 'fa-file-archive'
    case 'rar':
      return 'fa-file-archive'

    case 'mp3':
      return 'fa-file-audio'
    case 'aac':
      return 'fa-file-audio'
    case 'ogg':
      return 'fa-file-audio'
    case 'wav':
      return 'fa-file-audio'
    case 'raw':
      return 'fa-file-audio'

    case 'js':
      return 'fa-file-code'
    case 'css':
      return 'fa-file-code'
    case 'cpp':
      return 'fa-file-code'
    case 'java':
      return 'fa-file-code'
    case 'class':
      return 'fa-file-code'
    case 'py':
      return 'fa-file-code'
    case 'cs':
      return 'fa-file-code'
    case 'gml':
      return 'fa-file-code'
    case 'bin':
      return 'fa-file-code'
    case 'asm':
      return 'fa-file-code'
    case 'pl':
      return 'fa-file-code'
    case 'hs':
      return 'fa-file-code'
    case 'jsx':
      return 'fa-file-code'
    case 'ts':
      return 'fa-file-code'
    case 'html':
      return 'fa-file-code'
    case 'json':
      return 'fa-file-code'
    case 'sh':
      return 'fa-file-code'
    case 'env':
      return 'fa-file-code'

    case 'xls':
      return 'fa-file-excel'
    case 'xlsx':
      return 'fa-file-excel'
    case 'csv':
      return 'fa-file-excel'
    case 'numbers':
      return 'fa-file-excel'

    case 'jpg':
      return 'fa-file-image'
    case 'jpeg':
      return 'fa-file-image'
    case 'png':
      return 'fa-file-image'
    case 'gif':
      return 'fa-file-image'
    case 'psd':
      return 'fa-file-image'
    case 'ai':
      return 'fa-file-image'
    case 'tiff':
      return 'fa-file-image'
    case 'bmp':
      return 'fa-file-image'
    case 'riff':
      return 'fa-file-image'
    case 'xbmp':
      return 'fa-file-image'
    case 'webp':
      return 'fa-file-image'
    case 'svg':
      return 'fa-file-image'

    case 'mp4':
      return 'fa-file-movie'
    case 'avi':
      return 'fa-file-movie'
    case 'wmv':
      return 'fa-file-movie'
    case 'flv':
      return 'fa-file-movie'
    case 'mov':
      return 'fa-file-movie'
    case 'webm':
      return 'fa-file-movie'
    case 'mpeg':
      return 'fa-file-movie'
    case 'mpg':
      return 'fa-file-movie'
    case 'mpv':
      return 'fa-file-movie'

    case 'doc':
      return 'fa-file-word'
    case 'docx':
      return 'fa-file-word'
    case 'txt':
      return 'fa-file-text'
    case 'pdf':
      return 'fa-file-pdf'

    case 'ppt':
      return 'fa-file-powerpoint'
    case 'pptx':
      return 'fa-file-powerpoint'
    case 'odp':
      return 'fa-file-powerpoint'

    default:
      return 'fa-file'
  }
}