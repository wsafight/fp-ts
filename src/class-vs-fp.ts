class Animal {
  constructor(protected name: string) {
  }

  speak() {
    console.log(`${this.name} make a noise.`)
  }
}

class Dog extends Animal{
  speak() {
    console.log(`${this.name} barks.`)
  }
}


const state = {
  speak: ['1', '2']
}

const action = {
  of: (name: string) => (speak: any) => {
    speak(name)
  },
  speak: (kind: number) => (name: string) => {
    console.log(`${name} ${state.speak[kind]}`)
  }
}