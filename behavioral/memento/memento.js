
class Memento{

    constructor(content){
        this.content = content ;

    }

    getContetnt(){
        return this.content ;
    }
}

class Originator{

    constructor(){
        this.content = '' ;
    }

    type(text){
        this.content += text ;
    }

    getContetnt(){
        return this.content ;
    }

    createMemento(){
        return new Memento(this.content);
    }

    restoreMemento(memento){
        this.content = memento.getContetnt();
    }
}


class Catetaker{

    constructor(){
        this.information = [] ;
    }

    caraTakerPush(memento){
        this.information.push(memento);
    }

    caraTakerPop(){
        return this.information.pop();
    }
}



const originator = new Originator();

const careTaker = new Catetaker();


originator.type('JEISON MUNIZ ENGENHARIA DE SOFTWARE');


careTaker.caraTakerPush(originator.createMemento());


originator.type('JSN SOFTWARE');


careTaker.caraTakerPush(originator.createMemento());


console.log(originator.getContetnt());


originator.restoreMemento(careTaker.caraTakerPop());
console.log(originator.getContetnt());