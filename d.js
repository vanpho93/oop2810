class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get yearOfBirth() {
        return 2017 - this.age;
    }

    set yearOfBirth(value) {
        this.age = 2017 - value;
    }
    sayHello() {
        console.log('Hello, I am ' + this.name);
    }
}
class Child extends Person {
    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }
    sayHi() {
        console.log('Hi, I am playing ' + this.toy);
    }
    sayHello() {
        super.sayHello();
        console.log('Hi, I am ' + this.name);
    }
}
const teo = new Child('Teo', 10, 'Auto');
console.log(teo);
teo.sayHello();
teo.sayHi();
console.log(teo.yearOfBirth);
teo.yearOfBirth = 2010;
console.log(teo.yearOfBirth);
