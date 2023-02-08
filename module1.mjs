// IMPORTING EXPORTING MODULES
// have to save file extension as .mjs to make this file module or introduce this file's type as module in package.json

const place = "Gokul";
const x = 2;
const y = "Krishna";
const z = "Radha"; 

export default y; 
// if you want to export more items which can be used when called then it can be exported like this
// its name inside {}
export {place};
export {z};