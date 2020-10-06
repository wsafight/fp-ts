class IO {
  constructor(private val: any) {
  }

  static of(val: any) {
    return new IO(val)
  }

  map(f: any) {
    return IO.of(() => f(this.val()))
  }

  join() {
    return this.val
  }

  chain(f: any) {
    return this.map(f).join()
  }

}