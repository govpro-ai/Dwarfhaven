export default null

declare global {
  interface Number {
    /** Converts a number of seconds to 12-hour time (`12:34 PM`). */
    secondsToTimestring: () => string
    /** Converts a number of bytes to a human-readable filesize. */
    toFilesize: () => string
  }
}

Number.prototype.secondsToTimestring = function () {
  return new Date(this.valueOf() * 1000).toISOString().slice(11, 11+8)
}

Number.prototype.toFilesize = function () {
  const byte = 1
  const kilobyte = byte * 1024
  const megabyte = kilobyte * 1024
  const gigabyte = megabyte * 1024
  if (this > gigabyte) return (this.valueOf() / gigabyte).toFixed(2) + ' GB'
  if (this > megabyte) return (this.valueOf() / megabyte).toFixed(2) + ' MB'
  if (this > kilobyte) return (this.valueOf() / kilobyte).toFixed(2) + ' KB'
  return this + ' bytes'
}
