class Monad {
  constructor(protected val: any) {
  }

  static of(val: any) {
    return new Monad(val)
  }

  map(f: any) {
    return new Monad(f(this.val))
  }

  join() {
    return this.val
  }

  chain(f: any) {
    return this.map(f).join()
  }

  ap(otherMonad: any) {
    return otherMonad.of(this.val)
  }

}