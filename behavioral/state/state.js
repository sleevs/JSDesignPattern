


class Context {

    constructor(){
        this.state = new ConcreteStateAtivo(this);

    }

    setState(state){
        this.state = state ;
    }

    process(){
        this.state.process();
    }


}

class State{

    constructor(context){
        this.context = context ;
    }

    process(){
        throw new Error('PROCESS MUST BE IMPLEMENTED');
    }

}

class ConcreteStateAtivo extends State{
    
    process(){
        console.log('STATE PROCESSING... ');
        this.context.setState(new ConcreteStateProcess(this.context));
    }
}


class ConcreteStateProcess extends State{

    process(){
        console.log('STATE FINISH... ');
        this.context.setState(new ConcreteStateFinish(this.context));
    }

}


class ConcreteStateFinish extends State{

    process(){
        console.log('STATE COMPLETE. ');
       
    }

}


const context = new Context();
context.process();
context.process();
context.process();