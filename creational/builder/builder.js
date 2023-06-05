
class Product {

    construct(){
        this.floor = null ;
        this.wall = null ;
        this.roof = null ;
    }

    setWall(wall){
        this.wall = wall ;
    }

    setFloor(floor){
        this.floor = floor ;
    }

    setRoof(roof){
        this.roof = roof ;
    }


    display(){
        console.log(`FLOOR ${this.floor}`);
        console.log(`WALL ${this.wall}`);
        console.log(`ROOF ${this.roof}`);
    }
}



class Builder{

    constructor(){
        this.product = new Product();
    }

    buildFloor(){}
    buildWall(){}
    buildRoof(){}

    getProduct(){
        return this.product ;
    }
}


class ConcreteBuilder extends Builder{

    buildFloor(){
        this.product.setFloor('CONCRETE');
    }


    buildWall(){
        this.product.setWall('CONCRETE');
    }

    buildRoof(){
        this.product.setRoof('CONCRETE');
    }
}


class Director{

    conctructor(builder){
        this.builder = builder ;
    }

    constructProduct(){
        this.builder.buildFloor();
        this.builder.buildWall();
        this.builder.buildRoof();
    }

    getProduct(){
        return this.builder.getProduct();
    }
}


const concreteBuilder = new ConcreteBuilder();

const director = new Director(concreteBuilder);

director.constructProduct();

const concrete = director.getProduct();

concrete.display();
