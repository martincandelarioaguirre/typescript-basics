interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue){
    console.log(labeledObj.label);
}

export function runInterface() {
    let myObj = { size: 10, label: "size 10 object"};
    printLabel(myObj);
}