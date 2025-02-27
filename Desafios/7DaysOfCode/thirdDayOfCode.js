// Si quiere seguir hacia el área de Front-End o seguir hacia el área de Back-End.
// Si está en el área de Front-End, si quiere aprender React o aprender Vue. Si está en el área de Back-End, podrá aprender C# o aprender Java.
let mensajeError = 'indique una opcion valida';

function seleccionarRuta(){
    let opcion = prompt('¿En que area del Software quiere especializarce? ¿backend o frontend?');
    let result = "";
    if (opcion == 'backend'){
        let tech = prompt('¿Por que tecnologia tienes preferencia? ¿C# o java?');
        result = tech;
    } else if (opcion == 'frontend'){
        let tech = prompt('¿Por que tecnologia tienes preferencia? ¿React o Vue?');
        result = tech;
    } else {
        result = mensajeError;
    }
    return result;
}

// Después, independientemente de las elecciones anteriores, el usuario podrá elegir entre seguir especializándose en el área elegida o desarrollarse 
// para convertirse en Fullstack. Debes mostrar en pantalla un mensaje específico para cada elección.
function seleccionarEspecializacion(){
    let especializacion = parseInt(promt('Marca 1 si quieres especializarte en la ruta escojida, 2 si quieres hacer una ruta fullstack?: '));
    let msg = '';
    if (opcion == 1){
        msg = 'Es genial que quieras especializarte en la ruta que seleccionaste';
    } else if (opcion == 2){
        msg = 'Es genial que quieras hacer una ruta fullstack';
    } else {
        msg = mensajeError;
    }
    return msg;
}

// Finalmente, pregunta en qué tecnologías le gustaría a la persona especializarse o conocer. Aquí, la persona puede responder N tecnologías, 
// una a la vez. Entonces, mientras continúe respondiendo **ok** a la pregunta: "¿Hay alguna otra tecnología que te gustaría aprender?", 
// sigue presentando el Prompt, para que complete el nombre de la tecnología en cuestión. Y, justo después, presenta un mensaje comentando algo 
// sobre la tecnología ingresada.
function adicionarTecnologias(){
    let tecnologias = [];
    while (true) {
        let tecnologia = prompt('Indique una tecnología que quiera aprender, o escriba "stop" para finalizar:');
        if (tecnologia.toLowerCase() === "stop") {
            break;
        }
        tecnologias.push(tecnologia);
        alert(`¡Genial! ${tecnologia} es una tecnología interesante para aprender.`);
    }
    alert("Lista de tecnologías que quieres aprender: " + tecnologias.join(", "));
}

alert(seleccionarRuta());
alert(seleccionarEspecializacion());
adicionarTecnologias();

