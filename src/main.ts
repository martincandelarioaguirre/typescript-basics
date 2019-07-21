import { sayHello } from './content/greet';
import { interfaceRunCode } from './content/interface/interface';
import { greet } from './content/class/greeter';
import { RunCode } from './content/class/inheritance';
import { RunAbstractClass } from './content/abstractclass/abstractclass';

console.log(sayHello('Typescript1111'));
greet();

let runInterface = new interfaceRunCode();
runInterface.run();

let runCode = new RunCode();
runCode.run();

let runAbstractClass = new RunAbstractClass();
runAbstractClass.run();