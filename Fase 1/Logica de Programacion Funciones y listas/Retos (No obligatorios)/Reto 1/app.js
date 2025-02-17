let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio'

function clickUsuario() {
    alert('Click desde el Boton');
}

function brasil() {
    let ciudad = prompt('indique una ciudad de brasil')
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function js() {
    alert('Yo amo JS');
}

function suma() {
    let num1 = parseInt(prompt('indique el primer numero'));
    let num2 = parseInt(prompt('indique el segundo numero'));
    let res = num1 + num2;
    alert(`el resultado de la suma es: ${res}`);
}