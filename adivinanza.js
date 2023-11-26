const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) +1;

};

const verificarAdivinanza = (nroSecreto, nroAdivinado) => {
    if (nroSecreto == nroAdivinado){
        console.log("Felicidades! Adivinates el número secreto!\n");
    } else if (nroSecreto < nroAdivinado){
        console.log("El número secreto es menor, Seguí intentando!\n");
    } else {
        console.log("El número secreto es mayor, Seguí intentando!\n");
    }
    
};
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
};