
/**
 * Animal class to demostrate how it works
 */
class Animal {

    /**
     * Moves animal function
     * @param [distanceInMeter] number parameter that allows animal to move.
     */
    move(distanceInMeter: number = 0) {
        console.log(`Animal movel ${distanceInMeter}`);
    }
}


/**
 * Dog class that implements Animal class
 */
class Dog extends Animal {

    /**
     * Barks dog function that bark Dog's class
     */
    bark() {
        console.log('Wof! Woof!');
    }
}


/**
 * Class inheritance that demostrate how the code runs.
 */
export class RunCode {

    /**
     * This functions contains methods to execute all the code develop for module Inheritance.
     */
    run() {
        const dog = new Dog();
        dog.bark();
        dog.move(10);
        dog.bark();
    }
}