

class Component {


    getOperation(){

        throw new Error('METHOD OPERATION MUST BE IMPLEMENTED');
    }
}



class ConcreteComponent extends Component {
    
    getOperation(){
        return 'OPERATION WITH CONCRETE COMPONENT';
    }
}


class Decorator extends Component{

    constructor(component){
        super();
        this.component= component ;
    }


    getOperation(){
        return this.component.getOperation();
    }

}



class ConcreteDecorator extends Decorator {

    getOperation(){
        return this.component.getOperation() + ' CONCRETE DECORATOR' ;
    }
}


const testComponent = new ConcreteComponent();
console.log(testComponent.getOperation());

const testeDecorator = new ConcreteDecorator(testComponent);
console.log(testeDecorator.getOperation());
