
class Handler {

    setNext(handler){
        this.nextHandler = handler ;

    }

    handlerRequest(request){
        throw new Error('HANDLER REQUEST MUST BE IMPLEMENTED');
    }
}


class ConcreteHandlerA extends Handler{

    handlerRequest(request){
        if(request === 'A'){
            console.log('HANDLER THE REQUEST');
        }else if(this.nextHandler) {
            this.nextHandler.handlerRequest(request);
        }else {
            console.log('NO HANDLER CAN PROCESS THE REQUEST');
        }
    }
}



class ConcreteHandlerB extends Handler{

    handlerRequest(request){
        if(request === 'B'){
            console.log('HANDLER THE REQUEST');
        }else if(this.nextHandler) {
            this.nextHandler.handlerRequest(request);
        }else {
            console.log('NO HANDLER CAN PROCESS THE REQUEST');
        }
    }
}


class ConcreteHandlerC extends Handler{

    handlerRequest(request){
        if(request === 'C'){
            console.log('HANDLER THE REQUEST');
        }else if(this.nextHandler) {
            this.nextHandler.handlerRequest(request);
        }else {
            console.log('NO HANDLER CAN PROCESS THE REQUEST');
        }
    }
}



const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();
const handlerC = new ConcreteHandlerC();

handlerA.nextHandler(handlerB);
handlerB.nextHandler(handlerC);

handlerA.handlerRequest('B');
handlerA.handlerRequest('C');
handlerA.handlerRequest('D');
