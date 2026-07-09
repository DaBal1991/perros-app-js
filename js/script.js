const estado = {
    raza: ``,
    fotos: []
};

const IMAGENES_HARDCODEADAS = [
    /* API funcionando de nuevo: 09/07/2026 */
    `https://images.dog.ceo/breeds/akita/512px-Ainu-Dog.jpg`,
    `https://images.dog.ceo/breeds/akita/Japaneseakita.jpg`,
    `https://images.dog.ceo/breeds/akita/512px-Akita_inu.jpg`,
];

const inputRaza = document.querySelector(`#inputRaza`);
const btnBuscar = document.querySelector(`#btnBuscar`);
const contenedorResultados = document.querySelector(`#contenedor-resultados`);

// QuerySelector busca el primer elemento que coincida con el selector CSS que recibe.
// # -> Id.
// . -> Clase.

// Funciones
const limpiar = () => {
    contenedorResultados.replaceChildren(); // Reemplazo del viejo InnerHTML
};

const render = () => {
    limpiar();

    const imagenes = estado.fotos.map((url) => {
        const imagen = document.createElement(`img`); // crear un elemento <img>
        imagen.src = url;
        return imagen;
    })

    contenedorResultados.append(... imagenes); 
    // ... -> desempaquetan el array en elementos sueltos
    // append() -> recibe los elementos desempaquetados y los agrega uno detras de otro al final del contenedor, sin borrar existentes.
};

const busqueda = () => {
    estado.raza = inputRaza.value.trim(); // trim() -> Limpia el texto de espacios al principio y al final.
    estado.fotos = IMAGENES_HARDCODEADAS;

    render();
};

btnBuscar.addEventListener(`click`, busqueda);