

class Component{
    constructor(name){
        this.name = name ;
    }

    getName(){
        return this.name ;
    }

    getType(){
        throw new Error('METHOD MUST BE IMPLEMENTED');

    }


    getPrint(){
        throw new Error('METHOD MUST BE IMPLEMENTED');

    }
}


class Leaf extends Component{


    constructor(name, type){
        super(name);
        this.type = type ;
        
    }

    getType(){
        return this.type ;
    }

    getPrint(){
        console.log(`RESULT : ${this.name} - ${this.type}`)
    }
}


class Composite extends Component{

    constructor(name){
        super(name);
        this.listComponent = [];

    }

    add(component){
        this.listComponent.push(component)
    }

    remove(component){
        const index = this.listComponent.indexOf(component);
        if(index !== -1){
            this.listComponent,splice(index, 1);
        }
    }


    getType(){
        
        for(const component of this.listComponent){
            console.log(component.getType());

        }
    }

    getPrint(){
        console.log(`${this.name} - ${this.gerType}`)
    }
    
}


const teste = new Component('MAD MAX' , 'RIDER');

lista = new Composite('JAMES');

lista.add(teste);
lista.getPrint();