//prototype
class PrototypeShape{
    constructor(){
        this.type = null ;
    }

    clone(){
        return Object.create(this);
    }

    getType(){
        return this.type;
    }
}


class ConcretePrototypeCircle extends PrototypeShape{

    constructor(){
        super();
        this.type = 'CIRCLE';
    }


    draw(){
        console.log('DRAWING A CIRCLE');
    }
}


class ConcretePrototypeSquare extends PrototypeShape{

    constructor(){
        super();
        this.type = 'SQUARE' ;
    }

    draw(){
        console.log('DRAWING A SQUARE');
    }
}


const circlePrototype = new ConcretePrototypeCircle();
const squarePrototype = new ConcretePrototypeSquare();

const circle = circlePrototype.clone();
console.log(circle.getType());
circle.draw();

