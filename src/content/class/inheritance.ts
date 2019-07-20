class Animal {
    move(distanceInMeter: number = 0) {
        console.log(`Animal movel ${distanceInMeter}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Wof! Woof!');
    }
}

export function classInheritance() {
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}