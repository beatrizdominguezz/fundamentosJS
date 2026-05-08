console.log("conexión exitosa con js...");
// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
let nota = 6.5

if( nota >= 6.0 ){
    alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Excelente rendimiento`);
} else if( nota >= 4.0 ){
    alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Puedes mejorar`);
} else{
    alert(`El estudiante Juan tiene nota ${nota} y su resultado es: No aprobado`);
}
}



// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
let nombre = "daniel pérez";

alert(`este es ${nombre} y 
    \nsu nombre es mayúsculas sería ${nombre.toUpperCase()} 
    \ny tiene ${nombre.length} caracteres`)

}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
let correo = "ejemplo@gmail.com";

if (correo == "ejemplo@gmail.com"){
    alert(`${correo} y el resultado es: correo válido`);
} else{
    alert(`${correo} y el resultado es: correo inválido`);
}
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase = "Estoy aprendiendo JavaScript";
let caracteresFrase = `${frase.length}`;

if (caracteresFrase >= 25){
    alert(`La frase ${frase} tiene ${caracteresFrase} caracteres y corresponde a una frase larga`);
} else{
    alert(`La frase ${frase} tiene ${caracteresFrase} caracteres y corresponde a una frase corta`);
}
}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
let producto = "teclado"

alert(`El producto ${producto.toUpperCase()} tiene un precio final de $45000`);
}
