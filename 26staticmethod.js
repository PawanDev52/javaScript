  /*
  // static methods - can access with class name not individualy
  class animal{
    constructor(name){
      this.name = animal.capitalise(name)
    }
    walk(){
      console.log(`animal ${this.name} is walking!`)
    }
    static capitalise(name){
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  let j = new animal("joker")
  j.walk()
  */

  // =============================================================================
  // getters & setters

  class animal{
    constructor(name){
      this.name = name
    }
    fly(){
      console.log("you are flying")
    }
    get name(){
      return this._name
    }
    set name(newName){
      this._name = newName
    }
  }

  class rabbit extends animal{
    eatCarrot(){
      console.log("eating carrots")
    }
  }
  let a = new rabbit("billu")
  a.fly()
  console.log(a.name)
  a.name = "tillu"
  console.log(a.name)

  let c = 45;
  // instance of operator
  console.log(a instanceof animal) // instance means in which the class is using
  console.log(a instanceof rabbit) // extend class ke liye bhi true hi rahega
  console.log(c instanceof animal)
