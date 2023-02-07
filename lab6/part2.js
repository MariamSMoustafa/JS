class Shape{
    constructor(name,sides,sideLength){
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    calcPerimeter(){
        const perimeter = this.sides * this.sideLength ;
        console.log(`The perimeter of ${this.name} is ${perimeter}`);
    }
}

class Square extends Shape{
    constructor(sideLength){
        super('Square',4,sideLength);
        this.sideLength=sideLength;
    }
    calcArea(){
        const Area =this.sideLength * 4 ;
        console.log(`The Area of ${this.name} is ${Area}`);
    }
    
}
const square = new Square(4);
square.calcPerimeter();
square.calcArea();
