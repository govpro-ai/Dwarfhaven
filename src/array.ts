export default {}

declare global {
  interface Array<T> {
    /** Returns the last n elements from an array. */
    tail: (n: number) => T
    /** Returns the very last element in an array (without popping). */
    last: () => T
    /** Returns a random element from an array. */
    random: () => T
    /** Returns the singular or plural form of the provided string(s) */
    pluralize: (itemType: string, pluralType?: string) => string
    /** Returns the quantity of items in the array followed by the singular or plural form of the provided string(s) */
    pluralizeqty: (itemType: string, pluralType?: string) => string
    /** Returns the sum of the values or the key-values if specified in the parameters. 0 if types cannot be added. */
    sum: (K?: keyof T | ((item: T) => any)) => number
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

Array.prototype.pluralize = function (itemType, pluralType) {
  return this.length != 1 ? pluralType ?? itemType+'s' : itemType
}

Array.prototype.pluralizeqty = function (itemType, pluralType) {
  return `${this.length} ${this.pluralize(itemType, pluralType)}`
}

Array.prototype.sum = function<T>(K?: keyof T | ((item: T) => any)) {
  if (K) {
    if (typeof K === 'function') {
      return this.map(K).sum()
    }
    return this.map(x => x[K]).sum()
  }
  if(this.some(x => {
    typeof x === 'undefined' || typeof x === 'symbol'
  })) return 0
  return this.reduce((acc, item) => acc + item, 0);
}
