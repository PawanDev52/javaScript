  // question - 1, 2
  class complex{
    constructor(real, imaginary){
      this.real = real
      this.imaginary = imaginary
    }
    add(num){
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
    }
    get real(){
      return this._real
    }
    get imaginary(){
      return this._imaginary
    }
    set real(newreal){
      this._real = newreal
    }
    set imaginary(newimaginary){
      this._imaginary = newimaginary
    }
  }

  let a = new complex(2, 4)
  console.log(a.real, a.imaginary)
  a.real = 10
  a.imaginary = 10
  let b = new complex(6, 3)
  a.add(b)
  console.log(a.real, a.imaginary)


  // question - 3, 4
  // class human{
  //   constructor(name, food){
  //     this.name = name
  //     this.food = food
  //   }
  //   walk(){
  //     console.log(this.name + " human is walking")
  //   }
  // }

  // class student extends human{
  //   walk(){
  //     console.log(this.name + " student is walking")
  //   }
  // }

  // let o = new student("varun", "loki")
  // o.walk()

  // console.log(o instanceof human)
  // console.log(o instanceof student)
