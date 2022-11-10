 export class Shape{
    color:string;
    filled:boolean;
    constructor(color:string, filled:boolean) {
        this.color =color;
        this.filled =filled;
    }
    getColor():string{
        return this.color;
    }
    setColor(value:string){
        return this.color =value;
    }

    getFilled(): boolean {
        return this.filled;
    }

    setFilled(value: boolean) {
        this.filled = value;
    }
    toString(){
        return 'A Shape with color of ' +
            this.getColor()+
            ' and ' +
            (this.getFilled()?'filled': 'not filled');
    }
}
let myShape = new Shape('blue',false)
 console.log(myShape.toString())