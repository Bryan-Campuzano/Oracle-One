// Por eso, hoy te voy a enseñar a desarrollar un programa simulando una de esas aplicaciones. Debe pedir al usuario responder 3 preguntas:

// - ¿Cuál es tu nombre?
let nombre = prompt('¿Cuál es tu nombre?');

// - ¿Cuántos años tienes?
let edad = prompt('¿Cuántos años tienes?');

// - ¿Qué lenguaje de programación estás estudiando?
let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');

// Hola [nombre], tienes [edad] años y ya estás aprendiendo [lenguaje]!
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

// ¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO.
let opcion = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));

// Y luego, dependiendo de la respuesta, debería mostrar uno de los siguientes mensajes:
if (opcion === 1){
// 1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.');
} else {
// 2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?');

}

