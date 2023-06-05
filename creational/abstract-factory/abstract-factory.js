
class AbstractProductChair {

    sit(){
        console.log("SITTING ON CHAIR");
    }
}


class AbstractProductTable{
    usar (){
        console.log("USING A TABLE");
    }
}

class ConcreteProductModernChair extends AbstractProductChair {

    sit(){
        console.log("SITTING ON MODERN CHAIR");
    }
}


class ConcreteProductVintageChair extends AbstractProductChair{
    sit(){
        console.log("SITTING ON VINTAGE CHAIR");
    }
}



class ConcreteProductModernTable extends AbstractProductTable{
    usar(){
        console.log("USING A MODERN TABLE");
    }
}


class ConcreteProductVintageTable extends AbstractProductTable{

    usar(){
        console.log("USING A VINTAGE TABLE")
    }
}



class AbstractFactory{

    createChair(){}
    createTable(){}
}


class ConcreteFactoryModern extends AbstractFactory{

    createChair(){
        return new ConcreteProductModernChair();
    }

    createTable(){
        return new ConcreteProductModernTable();
    }
}


class ConcreteFactoryVintage extends AbstractFactory{

    createChair(){
        return new ConcreteProductVintageChair();
    }

    cretaeTable(){
        return new ConcreteProductVintageTable();
    }
}



function client(factory){

    const chair = factory.createChair();

    chair.sit();

    const table = factory.createTable();

    table.usar();
}


const modernFactory = new ConcreteFactoryModern();
client(modernFactory);
const vintageFactory = new ConcreteFactoryVintage();
client(vintageFactory);
