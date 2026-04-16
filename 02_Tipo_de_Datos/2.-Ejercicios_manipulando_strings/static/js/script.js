console.log("Conexión correcta con js");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

let nombre = "Camila";
let edad = 25;
console.log(`Nombre: ${nombre} Edad: ${edad} años \nTipo de dato de edad: ${typeof edad}`);
//\n salto de línea en consola o textos

// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en 

let comuna = "Maipú"
let region = "Metropolitana"
console.log(`Esta persona vive ${comuna.toUpperCase()} de la region ${region.toLowerCase()}`)

// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato

let lenguaje = "Python"
console.log(`${lenguaje.length} ${lenguaje.toUpperCase()} ${typeof lenguaje}`);

// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas

let mensaje = "Me encanta programar en JavaScript"
console.log(`${mensaje.length} ${mensaje.includes("JavaScript")} ${mensaje.toLowerCase()}`)

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres

let compras = "arroz, fideos, aceite, sal"
console.log(`${compras.includes("aceite")} ${compras.toUpperCase()} ${typeof compras}`)

// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene

let numero_casa = 456
let numero_casa_texto = String(numero_casa)
console.log(`${numero_casa_texto} ${typeof numero_casa_texto} ${numero_casa_texto.length}`)

// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS

let nombre2 = "Diego";
let apellido2 = "Rojas";
let nombre_completo = `${nombre2} ${apellido2}`
console.log(`el nombre es: ${nombre2.toUpperCase()} y el apellido es: ${apellido2.toUpperCase()} 
\n nombre completo tiene: ${nombre_completo.length} caracteres `.toUpperCase());

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres

let frase = "Hoy aprenderemos sobre strings";
console.log(`La frase ${frase} contiene la palabra "strings": ${frase.includes("strings")}`);
console.log(`${frase.toUpperCase()} - Tiene ${frase.length} caracteres. `); 

// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres

let texto1 = "Programar es divertido";
console.log(`Texto original ${texto1}
    \nTexto en minúsculas: ${texto1.toLowerCase()}
    \nTexto en mayúsculas: ${texto1.toUpperCase()}
    \nEl texto tiene: ${texto1.length} caracteres`);

// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 3C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS

let curso1 = "3C";
let anio = 2026;
let anio_texto = String(anio);
console.log(`Curso ${curso1} del año ${anio_texto}
    \nAño es de tipo: ${typeof anio_texto}`.toUpperCase());
