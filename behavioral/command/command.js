


class Receiver {

    process(){
        console.log('PROCESS RECEIVER');
    }
}


class Command{

    execute(){
        throw new Error('EXECUTE METHOD MUST BE IMPLEMENTED');
    }
}


class ConcreteCommand extends Command {


    constructor(receiver){
        super();
        this.receiver = receiver ;
    }

    execute(){
        this.receiver.process();
    }
}



class Invoker{

    constructor(){
        this.listCommand = [] ;

    }

    setCommand(command){
        this.listCommand.push(command);
    }

    executeCommand(){
        this.listCommand.forEach((command) => {

            command.execute();
        });

        this.listCommand = [] ;
    }
}


const receiver = new Receiver();

const concreteCommand = new ConcreteCommand(receiver);

const invoker = new Invoker();

invoker.setCommand(concreteCommand);

invoker.executeCommand();