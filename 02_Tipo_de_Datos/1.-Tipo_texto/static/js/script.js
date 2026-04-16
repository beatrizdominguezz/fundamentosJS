console.log("conexión con js correcta...");
/*
Dato: Tipo texto(string)
1.- Concatenación de texto con el signo +
Podemos unir texto y variables
*/
//Concatenación: unir texto y/o variables.
const nombre = "Beatriz";
const apellido = "Dominguez";
//Unimos ambas constantes con un texto extra. (Contatenar)
console.log("Hola, mi nombre es: " + nombre + " " + apellido);

/* 
2.- Ver el tipo de dato (typeof)
*/
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

// Template literals (forma moderna para concatenar ``)
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

//Mostrar el largo de un string(texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(` La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.

let frase = "Hola Mundo!"
console.log(` Una frase de prueba ${frase} que tiene ${frase.length}letras.`);

// Métodos comunes de JS para formatear texto
// Transformar texto en Mayúsculas .toUpperCase()
let texto1 = "JAVasCRIPT eS LO MeJor";
console.log(texto1.toUpperCase());

//Transformar texto a minusculas .toLowerCase()
console.log(texto1.toLowerCase());

//Buscar texto dentro de un string .includes()
let texto2 = "Leche, azucar, peras, huevos, harina";
console.log(texto2.includes("peras")); //true

//Convertir una variable a texto
let telefono = 239875;
let telefono_texto = String(telefono);
console.log(`Mi número de telefono ${telefono_texto}
    es de tipo ${typeof telefono_texto}`);

