class Car {

    constructor(nome){
        this.nome = nome ;
    }



    drive(){
        console.log(`DRIVING ${this.nome}`);
    }
    
}


class CarFactory{
    createCar(nome){
        return new Car(nome);
    }
}


const factory =  new CarFactory();

const car1 = factory.createCar("OPALA");
car1.drive();

const car2 = factory.createCar("MUSTANG");
car2.drive();