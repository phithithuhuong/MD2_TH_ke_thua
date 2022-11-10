import {Shape} from "./Shape";
export class  Rectangle extends Shape{
    width:number;
    length:number;

    constructor(width: number, length: number, color: string, filled: boolean) {
        super(color, filled)
        this.width = width;
        this.length = length;
    }

    getWidth(): number {
        return this.width;
    }

    setWidth(value: number) {
        this.width = value;
    }

    getLength(): number {
        return this.length;
    }

    setLength(value: number) {
        this.length = value;
    }
    getArea1(){
       return(this.length* this.width)
    }
    getPerimeter1(){
        return ((this.width+this.length)*2)
    }
    toString(): string {
        return "A Rectangle with width="
            + this.getWidth()
            + " and length="
            + this.getLength()
            + ", which is a subclass of "
            +super.toString();
    }
}
let myRectangle = new Rectangle(5,7,'green',false)
console.log(myRectangle.getArea1())
console.log(myRectangle.getPerimeter1())
console.log(myRectangle.toString())