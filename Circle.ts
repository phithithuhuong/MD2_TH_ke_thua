import {Shape} from "./Shape";
export class Circle extends Shape {
   radius: number;

    constructor(radius: number, color: string, filled: boolean) {
        super(color, filled);
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    setRadius(value: number) {
        this.radius = value;
    }
    getArea(){
     return ((this.radius* this.radius)* Math.PI)
    }
    getPerimeter(){
        return ((this.radius*this.radius)*Math.PI)
        return ((this.radius*this.radius)*Math.PI)
    }
    toString(): string {
        return "A Circle with radius="
            + this.getRadius()
            + ", which is a subclass of "
        +super.toString();
    }
}
let myCircle = new Circle(7,'pink',true)
console.log(myCircle.getArea())
console.log(myCircle.getPerimeter())
console.log(myCircle.toString())