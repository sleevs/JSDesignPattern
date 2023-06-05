


class Flyweight{
    constructor(key){
        this.key = key ;
    }

    operation(extrinsicState){
        throw new Error('METHOD OPERATION MUST BE IMPLEMENTED');
    }
}

class ConcreteFlyweight extends Flyweight {

    operation(extrinsicState){
        console.log(`CONCRETE FLYWEIGHT : ${this.key} - STATUS : ${extrinsicState}`)
    }
}


class FlyweightFactory{

    constructor(){
        this.listFlyweight = {};
    }

    getFlyweight(key){

        if(!this.listFlyweight[key]){
            this.listFlyweight = new ConcreteFlyweight(key);
        }
        return this.listFlyweight[key];
    }

    getFlyweightCount(){
        return Object.keys(this.listFlyweight).length ;
    }

}


const flyweightFactory = new FlyweightFactory();

const fA = flyweightFactory.getFlyweight('A');
fA.operation(51);

const fB = flyweightFactory.getFlyweight('B');
fB.operation(18);

const fC = flyweightFactory.getFlyweight('C');
fC.operation(13);

console.log(`${flyweightFactory.getFlyweightCount()}`);