class Subject {

    constructor(){
        this.listObserver = [];
    }


    addObserver(observer){
        this.listObserver.push(observer);
    }

    removeObserver(observer){
        this.listObserver = this.listObserver.filter((obs)=> obs !== observer);
    }

    notifyObserver(data){
        this.listObserver.forEach((observer) => observer.update(data));
    }
}



class Observer{

    constructor(name){
        this.name = name ;
    }

    update(data){
        console.log(`RECEIVED UPDATE  ${this.name} - ${data}`);
    }
}


const subject = new Subject();

const observer = new Observer('BRASIL 1 X ARGENTINA 0');

subject.addObserver(observer)

subject.notifyObserver('GOL DO BRASIL');