

class Element{

    constructor(name, salary){
        this.name = name ;
        this.salary = salary ;
    }

    accept(visitor){
        visitor.visit(this);
    }
}


class ConcreteElementManager extends Element{

    constructor(name , salary , vocationDays){
        super(name , salary);
        this.vocationDays = vocationDays ;
    }

}



class ConcreteElementDeveloper extends Element{

    constructor(name , salary , lineOfCode){
        super(name , salary);
        this.lineOfCode = lineOfCode ;
    }

}



class Visitor {

    visit(element){
        throw new Error('VISIT MUST BE IMPLEMENTED');
    }
}


class ConcreteVisitorSalary extends Visitor{

    visit(element){
        if(element instanceof ConcreteElementManager){
            console.log(`${element.name}`);
        }else if (element instanceof ConcreteElementDeveloper){
            console.log(`${element.name}`);

        }
    }
}



class ConcreteVisitorVacation extends Visitor{

    visit(element){
        if(element instanceof ConcreteElementManager){
            console.log(`${element.name} ${element.vocationDays}`);
        }else if (element instanceof ConcreteElementDeveloper){
            console.log(`${element.name} ${Math.floor(element.lineOfCode/100)}`);

        }
    }
}



const elements  = [
    new ConcreteElementManager('Nukem' , 15000 , 20),
    new ConcreteElementDeveloper('Elliot ALderson' , 10000, 20),
    new ConcreteElementDeveloper('Jeison Muniz' , 10000 , 20),
];




const salary = new ConcreteVisitorSalary();
const vacation = new ConcreteVisitorVacation();


elements.forEach((element) => {
    element.accept(ConcreteVisitorSalary);
    element.accept(ConcreteVisitorVacation);
});
