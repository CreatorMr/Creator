class Observer {
  constructor(data) {
    this.observe(data)
  }

  observe(data) {
    if (data && typeof data === 'object') {
      for (const key in data) {
        this.defineReactive(data, key, data[key])
      }
    }
  }

  defineReactive(data, key, value) {

    this.observe(value)
    const dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get() {
        Dep.target && dep.addWatcher(Dep.target)
        return value
      },
      set(newVal) {
        if (newVal !== value) {
          this.observe(newVal)
          value = newVal
        }
        dep.notify()
      }
    })
  }
}
