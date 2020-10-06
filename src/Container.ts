
const Exception = 'ContainerException'

class Container<T> {
  constructor(private val: any) {
  }

  static init(val: any) {
    return new Container(val)
  }

  map (f: (val: any) => void): any {
    if (this.val === Exception) {
      return new Container(Exception)
    }
    try{
      return new Container<T>(() => f(this.val()))
    } catch (e) {
      return new Container(Exception)
    }
  }

  join() {
    this.val()
  }

}