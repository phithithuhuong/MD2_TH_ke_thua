class Car {
    name: string = '';
    color: string = '';

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

}

class Audi extends Car {
    type: string = '';

    constructor(type, color, name) {
        super(name, color);
        this.type = type;
    }

    display(): void {
        console.log(`Car is : ${this.type}, ${this.color}, ${this.name}`)
    }

}

let myAudi = new Audi('s450', 'pink', 'mercedes')
myAudi.display()
/**Nap chong*/
class A {
    public foo(s: string): number;
    public foo(n: number): string;
    public foo(arg: any): any
    foo(arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    }
}
let obj = new A();
console.log("Result: " + obj.foo(101));
console.log("Length of String: " + obj.foo("Typescript"));


