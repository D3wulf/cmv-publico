// let edad, texto;

// edad = prompt("Edad? ");
// if (!isNaN(edad) && edad > 0) {

//     texto = edad < 18 ? "<h3> Eres menor</h3>" : "<h3> Eres mayor de edad</h3>";

// } else if (isNaN(edad)) {
//     texto = `<h3>--${edad.toLocaleUpperCase()}-- no es un numero</h3>`;
// } else if (edad < 0) {

//     texto = `<h3>//${edad}// Es un número negativo</h3>`;
// }

// document.write(texto);



// let num1 = 0;
// let num2 = 0;

// dato = prompt("Introduzca el primero número ");
// num1 =



// EJERCICIO DOM URL //

function miFuncion() {

    let anchoPant = "El ancho de la ventana es :" + window.innerWidth;

    let altoPant = "El alto de la ventana es :" + window.innerHeight;

    let miUri = "El archivo con el que estas trabajando es: " + document.baseURI;

    let alturaDispo = "Altura disponible: " + screen.availHeight + "px";

    let anchoDispo = "Ancho disponible: " + screen.availWidth + "px";

    document.getElementById("demo").innerHTML = miUri + "<br>" + alturaDispo + "<br>" + anchoDispo + "<br>" + anchoPant + "<br>" + altoPant;
}