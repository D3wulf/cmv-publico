function ejercicioIf() {
    let edad, texto;

    edad = prompt("Edad? ");
    if (!isNaN(edad) && edad > 0) {

        texto = edad < 18 ? "<h3> Eres menor</h3>" : "<h3> Eres mayor de edad</h3>";

    } else if (isNaN(edad)) {
        texto = `<h3>--${edad.toLocaleUpperCase()}-- no es un número</h3>`;
    } else if (edad < 0) {

        texto = `<h3>//${edad}// Es un número negativo</h3>`;
    }

    return document.write(texto);
}

function ejercicioIf1(){



    let num1, num2;

    num1= parseInt(prompt(" Elija un numero "));

    num2= parseInt(prompt(" Elija otro numero "));
    

    


}