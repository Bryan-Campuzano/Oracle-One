let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;

console.log(numeroSecreto);

while(numeroUsuario != numeroSecreto){
    let numeroUsuario = parseTntprompt(("Me indicas un numero entre 1 y 10 por favor:"));

    console.log(numeroUsuario);
    /**
     * este codigo realiza la comprobacion del numero
     */
    if (numeroUsuario == numeroSecreto) {
        // mensaje de acierto
        alert(`Acertaste el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos ==1 ? "vez" : "veces"}`);
    } else {
        // mensaje de error
        if (numeroSecreto < numeroUsuario){
            alert("El numero es menor");
        }
        else{
            alert("El numero es mayor");    
        }
        intentos++;
        if (intentos > maximosIntentos){
            alert(`llegaste al numero maximo de ${maximosIntentos} intentos`);
            break
        }
    }
    
}
