    

    class Implementation{

        constructor(){
            if(new.target === Implementation){
                throw new Error('COLOR IS AN ABSTRACT CLASS AND CANNOT BE INSTANTIATED')
            }
        }


        operation(){
            throw new Error ('METHOD OPERATION MUST BE IMPLEMENTED');
        }
    }




    class ConccreteImplementation extends Implementation{

        operation(){
            return 'RED';
        }

    }


    class Abstraction{
        constructor(parametro){
            this.parametro = parametro ;
        }

        execute(){
            throw new Error('METHOD MUST BE IMPLEMENTED');
        }
    }




    class RefinedAbstraction extends  Abstraction{

        execute(){
            return `METHOD  : ${this.parametro.operation()}`;
        }

    }



    const red = new Abstraction(new ConccreteImplementation());

    console.log(red.execute());