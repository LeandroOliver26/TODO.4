
const Entradas = require("prompt-sync")({sigint: true });


let Quem 
let deseja 
let paraQue 
let Historia



Quem = Entradas('Para quem:')
deseja = Entradas('O que deseja:')
paraQue = Entradas('Para que:')
Historia = ('Eu como'  +  " " + `${Quem}` + " " +'desejo um' + " " +  `${deseja}`+ " " + 'para que possa' +" "+ `${paraQue}`)

console.log(Historia)
