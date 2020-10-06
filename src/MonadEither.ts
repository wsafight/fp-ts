class left extends Monad{
  map(f: any): Monad {
    return left.of(this.val)
  }
}
class right extends Monad{
  map(f: any): Monad {
    try {
      return right.of(f(this.val))
    } catch (e) {
      return left.of(this.val)
    }
  }
}



