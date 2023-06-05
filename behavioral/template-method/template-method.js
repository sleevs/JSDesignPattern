


class AbstractClass{

    templateMethod(){
        this.baseOperationA();
        this.requiredOperationA();
     
        this.baseOperationB();
        hookA();
        this.requiredOperationB();
        hookB();
        this.baseOperationC();
        
        
    }

    baseOperationA(){
        console.log('ABSTRACT CLASS : BASE OPERATION A');
    }


    baseOperationB(){
        console.log('ABSTRACT CLASS : BASE OPERATION B');
    }


    baseOperationC(){
        console.log('ABSTRACT CLASS : BASE OPERATION C');
    }

    hookA(){}

    hookB(){}

    requiredOperationA(){
        throw new Error('REQUIRED OPERATION A MUST BE IMPLEMENTED');
    }

    requiredOperationB(){
        throw new Error('REQUIRED OPERATION B MUST BE IMPLEMENTED');
    }

}


class ConcreteClass  extends AbstractClass{


    requiredOperationA(){
       console.log('CONCRETE CLASS REQUIRED OPERATION A');
    }

    requiredOperationB(){
        console.log('CONCRETE CLASS REQUIRED OPERATION B');
    }
}

const concreteClass = new ConcreteClass();

concreteClass.templateMethod();