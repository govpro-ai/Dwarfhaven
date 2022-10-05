export default {}

declare global {
  interface Array<T> {
    tail: (n: number) => T
    last: () => T
    random: () => T
  }
}

Array.prototype.tail = function (n) {
  return this.slice(-n)
}

Array.prototype.last = function () {
  return this.tail(1)[0]
}

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)]
}