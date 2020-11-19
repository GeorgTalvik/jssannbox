console.log("Hello World!");
let name = "Georg";
let age = 16;           
let survived = true;
let city = "Tallinn";
let drivingLincese= "";
let commentary= "";
console.log(`Caracter:${name}.); Age: ${age}. City ${city}.`);

if(survived){
    commentary = ".";
} else{
    commentary = "Georg live is tallinn"
}
console.log(`Character ${name} ${commentary}`);

if(age< 18) {
    drivingLincese =`${name} is too not young to drive a car.´;`
} else {
    drivingLincese = `${name} he is not drive a car .`;
}

console.log (` notdriving `);

const html =  `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>City: ${city}</li>
<li>${drivingLincese}</li>
    </ul>
`;

document.body.innerHTML= html;