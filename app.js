const fs = require('fs');

let data = fs.readFileSync('./data/tareas.json');
let dataPasos = JSON.parse(data);

console.log(`
INICIO DEL DESAFIO 1
`);
console.log(`Pasos del protocolo básico de preparación de las uñas:
`);
dataPasos.forEach(element => {
        console.log(`La etapa de: ${element.titulo} está: ${element.estado}.`);
});
console.log(`
FIN DEL DESAFIO 1
`);

console.log(`
INICIO DEL DESAFIO 2
`);

accion= process.argv[2];

switch (accion){
case "listar": 
        console.log(`
Listado de Tareas:
----------------------`);
    dataPasos.forEach((element,i) => {
    console.log(`${i+1}.- ${element.titulo} - ${element.estado}.`);});
break;
case undefined: 
    console.log(`Atención: Tienes que pasar una acción. 
La acción disponible es: listar
-------------------------------`);
break;
default: 
    console.log(`
-------------------------------
No entiendo lo que quieres hacer. 
La acción disponible es: listar
-------------------------------`);
break;
}