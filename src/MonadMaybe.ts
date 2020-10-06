class MonadMaybe extends Monad {
  isNull() {
    return this.val  === undefined
  }
  map(f: any): Monad {
    return this.isNull() ?
      new MonadMaybe(this.val) :
      new MonadMaybe(f(this.val))
  }
}