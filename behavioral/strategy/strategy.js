

class Strategy {

    operation(amount){
        throw new Error('PAY MUST BE IMPLEMENTED');
    }
}


class CreditCard extends Strategy{

    operation(amount){
        console.log(`CREDICARD PAYMENTO : ${amount}`);
    }
}



class Boleto extends Strategy{

    operation(amount){
        console.log(`BOLETO PAYMENTO : ${amount}`);
    }
}



class Cash extends Strategy{

    operation(amount){
        console.log(`CASH PAYMENTO : ${amount}`);
    }
}


class Context{

    constructor(strategy){
        this.itens = [];
        this.strategy = strategy;
    }


    addItem(item){
        this.itens.push(item);
    }

    removeItem(item){

        const index = this.itens.indexOf(item);
        if(index !== -1){
            this.itens.splice(index , 1);   
        }
    }   

    calculateTotal(){
        return this.itens.reduce((total , item ) => total + item.price , 0);
    }


    checkout(){

        const totalAmount = this.calculateTotal();
        this.strategy.operation(totalAmount);
    }

}


const boleto = new Boleto();
const cash = new Cash();
const card = new CreditCard();



const context = new Context(boleto);

context.addItem({name: 'CONTA DE INTERNET', price: 100});
context.addItem({name: 'CONTA DE INTERNET', price: 110});
context.addItem({name: 'CONTA DE INTERNET', price: 100});

context.checkout();


context.strategy = cash ;
context.checkout();

context.strategy = card ;
context.checkout();






