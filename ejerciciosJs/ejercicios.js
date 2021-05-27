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

    let num1, num2, texto;

    num1= parseInt(prompt(" Elija un número "));

    num2= parseInt(prompt(" Elija otro número "));
    
    texto="";

    if(!isNaN(num1) && !isNaN(num2) ){

        if(num1 != num2){

        texto = (num1>num2) ? ` El numero ${num1} es mayor` : `El número ${num2} es mayor` ;

        }else if (num1 == num2){

            texto = `Los números ${num1} y ${num2} son iguales`;
        }

    }else{

        texto ="El/los número/s es/son incorrecto/s";
    }
    return document.write(texto);
}
function opcionesPant(){

    

        let anchoPant = "El ancho de la ventana es :" + window.innerWidth + "px";
    
        let altoPant = "El alto de la ventana es :" + window.innerHeight + "px";
    
        let miUri = "El archivo con el que estas trabajando es: " + document.baseURI;
    
        let alturaDispo = "Altura disponible: " + screen.availHeight + "px";
    
        let anchoDispo = "Ancho disponible: " + screen.availWidth + "px";
    
        document.getElementById("demo").innerHTML = miUri + "<br>" + alturaDispo + "<br>" + anchoDispo + "<br>" + anchoPant + "<br>" + altoPant;
    
}
