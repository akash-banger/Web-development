import {Computer} from './computer.js';

class Macbook extends Computer{
    constructor(name,brand){
        super(name);
        this.brand = brand;
    }

    logIn(){
        console.log(`You are logged in to ${this.brand} Macbook ${this.name}`);
    } 
}

export default Macbook