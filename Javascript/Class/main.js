class Pizza{
    constructor(sizePizza){
        this.size = sizePizza;
        this.crust = "original";
    }
    getPizza(){
        return this.crust;
    }
    setPizza(crustPizza){
        this.crust = crustPizza;
    }
    // bake(){
    //     console.log(`Bake a ${this.size} ${this.crust} pizza`);  
    // }
}

class ChildPizza extends Pizza{
    constructor(sizePizza){
        super(sizePizza) 
        this.toppings="origano";   
    }
    bake(){
        console.log(`Bake a ${this.size} ${this.crust} pizza with ${this.toppings} toppings`);  
    }
}

const myPizza = new ChildPizza("medium");
myPizza.bake();


// const myPizza = new Pizza("thin");
// myPizza.bake();
// console.log(myPizza.getPizza());
// myPizza.setPizza("medium");
// myPizza.bake();
// console.log(myPizza.getPizza());