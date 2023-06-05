

class Mediator {

    constructor(){
        this.listColleague = [];
    }

    addColleague(colleague){
        this.listColleague.push(colleague);
    }


    send(message , sender){
        this.listColleague.forEach((colleague) => {
            if (colleague !== sender){
                colleague.receive(message);
            }
        });
    }
}



class Colleague {

    constructor(name , mediator){
        this.name = name ;
        this.mediator = mediator ;

    }

    send(message){
        this.mediator.send(message, this);
    }

    receive(message){
        console.log(`${this.name} RECEIVED  ${message}`);
    }
}




const mediator = new Mediator();

const millesMorales = new Colleague('Milles Morales', mediator);
const gleen = new Colleague('Gleen' , mediator);


mediator.addColleague(millesMorales);
mediator.addColleague(gleen);

millesMorales.send('Hello Gleen');
gleen.send('Whats up Milles');