

class SubSystemVerification {


    verify(orderId){
        console.log(`VERIFY ORDER ${orderId}`);
        return true ;
    }

}


class SubSystemPayment {

    payment(orderId){
        console.log(`${orderId}`);

        return true ;
    }
}

class SubSystemShipping{
    ship(orderId){
        console.log(`${orderId}`);
        return true ;
    }
}


class Facade{
    constructor(orderId){
        this.orderId = orderId ;
        this.subSystemVerification = new SubSystemVerification();
        this.subSystemPayment = new SubSystemPayment();
        this.subSystemShipping = new SubSystemShipping();
    }

    processOrder(){
        const isOrder = this.subSystemVerification.verify(this.orderId);
        if(isOrder){
            const  isPayment = this.subSystemPayment.payment(this.orderId);
        
            if(isPayment){
                this.subSystemShipping.ship(this.orderId);
                console.log('ORDER PROCESSED')

            }else{
                console.log('PAYMENT PROCESSED');
            }
            }else{
                console.log('PAYMENT PROCESSED');
            }
        }
    }


    const orderFacade = new Facade('123456789');


orderFacade.processOrder();