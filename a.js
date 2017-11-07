class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('Hello, I am ' + this.name);
    }
}

const p = new Person('Teo', 10);
console.log(p);
p.sayHello();
