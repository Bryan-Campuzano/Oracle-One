// Debes crear un pequeño programa que comience con un valor específico predefinido entre 0 y 10 para el número que vas a adivinar (por ejemplo, el 7).
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo);
let intentos = 3; 
console.log(numeroSecreto);
// A continuación, el programa te preguntará cuál es el valor que deseas adivinar y, si aciertas, te felicitará. Si te equivocas, te dará 2 intentos más.
alert('!Juguemos a Adivinar el numero¡');
while (intentos >=1){
    let numeroUsuario = parseInt(prompt('Indica un numero del 0 al 10'));
    if (numeroUsuario == numeroSecreto){
        alert('felicidades, adivinaste el numero');
        break;
    } else {
        intentos -= 1;
        alert(`Lo siento, no es ese el numero, te quedan ${intentos}`);
    }
}

// Al final, si no aciertas en ninguno de los intentos, imprimirá cuál era el número inicial.
alert(`Fin del juego, el numero era ${numeroSecreto}`);
