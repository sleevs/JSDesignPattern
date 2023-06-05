

class Singleton{

    constructor(){

        if(Singleton.instance){
            return Singleton.instance;
        }

    this.data = "SINGLETON INSTANCE";
    Singleton.instance = this ;

    }

    getData(){
        return this.data ;
    }

}


const singleton1 = new Singleton();
console.log(singleton1.getData());
