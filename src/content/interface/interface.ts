
/**
 * LabeledValue interface to implement in a class.
 */
interface LabeledValue {
    label: string;
}


/**
 * PrintsLabel function that implements LabeledValue interface
 * @param labeledObj 
 */
function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}

export class interfaceRunCode {
    
    /**
     * run execute code of interface code.
     */
    run() {
        let myObj = { size: 10, label: "size 10 object" };
        printLabel(myObj);
    }

}

