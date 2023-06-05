
class Subject {

    display(){
        throw new Error('METHOD DISPLAY MUST BE IMPLEMENTED');
    }
}

class RealSubject extends Subject{

    constructor(fileName){
        super();
        this.fileName = fileName ;
        this.loadRequest();
    }

    loadRequest(){
        console.log(`${this.fileName}`);
    }

    display(){
        console.log(`${this.fileName}`);
    }

}


class Proxy extends Subject {

    constructor(fileName){
        super();
        this.fileName = fileName ;
        this.realSubject = null ;
    }

    display(){
        if(!this.realSubject){
            this.realSubject = new RealSubject(this.fileName);
        }
        this.realSubject.display();
    }
}


const proxy = new Proxy('image.jpg');

proxy.display();


proxy.display();
