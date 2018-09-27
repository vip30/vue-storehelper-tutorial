export default {
  classToObject<T>(ctor: new (...args: any[]) => T) {
    const objResult: {
      [key: string]: () => any
    } = {}
    Object.getOwnPropertyNames(ctor.prototype).forEach(k => {
      const protoVal: () => any = ctor.prototype[k]
      if (typeof protoVal === 'function' && k !== 'constructor') {
        objResult[k] = function(...args: any[]) {
          return protoVal.call(this, ...args)
        }
      }
    })
    return objResult
  }
}
