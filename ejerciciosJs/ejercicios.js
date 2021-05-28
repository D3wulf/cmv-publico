// Ejercicio de comprobación de edad usando if y operador ternario

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

// Comparación de números usando if/else if

function ejercicioIf1() {

    let num1, num2, texto;

    num1 = parseInt(prompt(" Elija un número "));

    num2 = parseInt(prompt(" Elija otro número "));

    texto = "";

    if (!isNaN(num1) && !isNaN(num2)) {

        if (num1 != num2) {

            texto = (num1 > num2) ? ` El numero ${num1} es mayor` : `El número ${num2} es mayor`;

        } else if (num1 == num2) {

            texto = `Los números ${num1} y ${num2} son iguales`;
        }

    } else {

        texto = "El/los número/s es/son incorrecto/s";
    }
    return document.write(texto);
}


//Usos de los innerheight//width

function opcionesPant() {



    let anchoPant = "El ancho de la ventana es :" + window.innerWidth + "px";

    let altoPant = "El alto de la ventana es :" + window.innerHeight + "px";

    let miUri = "El archivo con el que estas trabajando es: " + document.baseURI;

    let alturaDispo = "Altura disponible: " + screen.availHeight + "px";

    let anchoDispo = "Ancho disponible: " + screen.availWidth + "px";

    document.getElementById("demo").innerHTML = miUri + "<br>" + alturaDispo + "<br>" + anchoDispo + "<br>" + anchoPant + "<br>" + altoPant;

}

// 28-05-2021 Ejercicios

function operaciones(num1, num2) {

    document.getElementById("suma").innerHTML = (num1 + num2);

}

function operaciones2(num1, num2) {




    $("#sumaJquery").text(num1 + num2);


}

let flecha = (num1, num2) => document.write(num1 + num2);

function operacionesPrompt() {



    num1 = parseInt(prompt(" Numero 1 a sumar "));

    num2 = parseInt(prompt(" Numero 2 a sumar"));

    if (!isNaN(num1) && !isNaN(num2)) {

        $("#sumaPrompt").text(num1 + num2);
    } else {

        $("#sumaPrompt").text("Los datos introducidos no son correctos");
    }




}

function cambioFondo() {

    let color = $("#color").val();

    localStorage.setItem("color", color);
    //sessionStorage.setItem("color", color);


    $("body").css("background-color", color);


    $("#local").text(`El color elegido es ${localStorage.getItem("color")}`);
}

function inicioColor() {

    if (localStorage.getItem("color")) {
        $("body").css("background-color", localStorage.getItem("color"));
    }
}

function ingresar() {

    let nombre = $("#nombre").val();

    sessionStorage.setItem("usuario", nombre);

    $("#local2").text(nombre);

    $("#botonDesconectar").show();



}

function mostrarUserActivo() {


    if (sessionStorage.getItem("usuario")) {


        $("#areaForm").hide();
        $("#local2").text(sessionStorage.getItem("usuario"));



    } else {

        $("#areaForm").show();
        $("#botonDesconectar").hide();


    }







}


function cargaPagina() {

    inicioColor();
    mostrarUserActivo();
}

function salir() {

    sessionStorage.removeItem("usuario");
    location.reload();


}