const {generarNumeroAleatorio, verificarAdivinanza} = require("./adivinanza");
const rl = require("readline-sync");

const obtenerNroUsuario = () => {
    return rl.question("Ingrese un número: ");
};

const juegoAdivinanza = () =>{
    const nroSecreto = generarNumeroAleatorio();
    let nroAdivinado = 0;

    console.log("Adivine el número del 1 al 100. \n");

    while(nroSecreto != nroAdivinado){
        nroAdivinado = obtenerNroUsuario();
        verificarAdivinanza(nroSecreto,nroAdivinado);
    }
};

juegoAdivinanza();

