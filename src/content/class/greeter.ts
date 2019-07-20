class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return `Hello, ${this.greeting}`;
    }
}

export function greet() {
    let greeter = new Greeter("World");
    console.log(greeter.greet());
}