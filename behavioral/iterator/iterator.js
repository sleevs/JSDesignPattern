

class Iterator{


    constructor(collection){
        this.collection = collection ;
        this.index = 0 ;
    }

    hasNext(){
        return this.index < this.collection.length;
    }

    next(){
        return this.collection[this.index++];
    }

}


class Aggregate{

    constructor(){
        this.items= [];
    }

    addItem(item){
        this.items.push(item);
    }

    getIterator(){
        return new Iterator(this.items);
    }
}



const aggregate = new Aggregate();

aggregate.addItem('Duke-Nukem');
aggregate.addItem('Doom');
aggregate.addItem('QUAKE');

const iterator = aggregate.getIterator();

while(iterator.hasNext()){
   const  item = iterator.next();
   console.log(item);
}