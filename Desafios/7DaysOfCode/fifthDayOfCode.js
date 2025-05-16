// constantes necesarias
let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let verduras = [];
let despensa = [];

// Entonces hoy, para facilitar tu visita al supermercado, debes crear un programa en Javascript que pregunte si deseas agregar un alimento 
// a tu lista de compras, y debes poder responder con "sí" o "no".
let continuar = 'si';
while (continuar == 'si'){
    continuar = prompt('Bienvenido al portal de compras de supermercado ¿desea agregar productos a su lista de compras? si o no: ');
    if (continuar == 'si'){
        // A continuación, preguntará qué alimento deseas agregar, y escribirás su nombre, como por ejemplo "zanahoria".
        alimentoActual = prompt('¿que alimento deseas agregar?: ');
        // Después, deberá preguntar en qué categoría se encaja ese alimento, con algunas opciones ya predefinidas, 
        // como frutas, lácteos, congelados, dulces y lo que más creas interesante. Así podrás separar todo en su respectivo grupo.
        categoriaActual = prompt('¿en qué categoría se encaja ese alimento: frutas, lacteos, congelados, dulces, verduras o despensa?:');
        switch (categoriaActual) {
            case 'frutas':
                frutas.push(alimentoActual);
                break;
            case 'lacteos':
                lacteos.push(alimentoActual);
                break;
            case 'congelados':
                congelados.push(alimentoActual);
                break;
            case 'dulces':
                dulces.push(alimentoActual);
                break;
            case 'verduras':
                verduras.push(alimentoActual);
                break;
            case 'despensa':
                despensa.push(alimentoActual);
                break;
            default:
                alert('Categoría no válida. Inténtalo de nuevo.');
                break;
        }
        // Por último, en caso de que ya no quieras agregar nada más a la lista de compras y respondas 
        // "no" a la primera pregunta, se mostrará una lista con todos los ítems agrupados, de la siguiente manera:
    } else{
        alert(
            `Lista de compras:\n\n` +
            `Frutas: ${frutas.join(', ') || 'Ninguna'}\n` +
            `Lácteos: ${lacteos.join(', ') || 'Ninguno'}\n` +
            `Congelados: ${congelados.join(', ') || 'Ninguno'}\n` +
            `Dulces: ${dulces.join(', ') || 'Ninguno'}\n` +
            `Verduras: ${verduras.join(', ') || 'Ninguna'}\n` +
            `Despensa: ${despensa.join(', ') || 'Ninguna'}`
        );
        continuar = 'no';
    }
}

// Si añades a tu lista:

// banana, leche en polvo, tomate, leche vegetal, chicle, gominola, manzana, uva, aguacate y leche de vaca.
// El programa debería imprimir, por ejemplo:

 
/**
 *  Lista de compras:

    Frutas: banana, tomate, manzana, uva, aguacate

    Lácteos: leche vegetal, leche de vaca, leche en polvo

    Congelados: 

    Dulces: chicle y gominola
 */
