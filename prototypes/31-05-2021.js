// let saludo = " hola mundo";
// let numerosArr = [];
// let numero = 7;
// function llenaArray() {
//     while (numerosArr.length < numero) {
//         for (let i = 0; i < numero; i++) {
//             numerosArr[i] = Math.floor(Math.random() * 7) + 1;
//         }
//     }
// }
// llenaArray();
// numerosArr.forEach(element => console.log(element));
// function menor() {
//     document.write(numerosArr.sort());
// }
// function mayor() {
//     numerosArr.sort();
//     document.write(numerosArr.reverse());
// }

let registrados = [];

function leerXML() {
    // lee desde GitHub.
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };

    // Abrir Xampp!!!!!!!!111
    xhr.open("GET", "registrados.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    let usrNom;
    let usrPsw;
    let usuario = [];
    let xmlDoc = xml.responseXML;
    let tabla = "";
    let x = xmlDoc.getElementsByTagName("usuario");

    tabla += "<table><tr><th>Empleado</th><th>Clave</th></tr>";

    for (let i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        usuario = [usrNom, usrPsw];
        registrados.push(usuario);

    }

    tabla += "</table>"
        //document.getElementById("contenidoXML").innerHTML = tabla;


}

function mostrar() {

    // muestro en pantalla el array de usuarios registrados

    let tabla = "";

    registrados.forEach(
        (usuario) => {
            usuario.forEach(
                (datos) => {
                    tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
                    for (let i = 0; i < registrados.length; i++) {
                        // leo las etiquetas que me interesan del objeto
                        usrNom = registrados[i][0];
                        usrPsw = registrados[i][1];
                        // actualizo la tabla de visualización
                        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
                        // actualizo el array bidimensional con los usuarios registrados

                    }
                    tabla += "</table>"
                });
        });
    document.getElementById("contenidoXML").innerHTML = tabla;
}



function ascNombre() {

    registrados.sort(
        (usuario1, usuario2) => usuario1[0].localeCompare(usuario2[0]), );
    mostrar();

}

function desClave() {

    //desciende por clave
    registrados.sort(
        (usuario2, usuario1) => usuario1[0].localeCompare(usuario2[0]), );
    mostrar();
}

function Usuario() {

    miUsuario = parseInt(prompt("Seleccione usuario empezando por 0 hasta 4"));
    registrados.sort();
    let elegido = registrados.slice(miUsuario, miUsuario + 1);
    document.getElementById("contenido4").innerHTML = elegido;
}

let user;

function mostrarClave() {

    user = document.getElementById("usuario").value;

    console.log(user);

    let encontrado = 0;
    let clave = "";

    for (let i = 0; i < registrados.length; i++) {

        if (user == registrados[i][0]) {

            encontrado = 1;
            clave = registrados[i][1];
        }
    }

    if (encontrado == 1) {

        console.log("Se han encontrado resultados");
        console.log(clave);
    } else {
        alert("No se han encontrado resultados a su búsqueda");
    }

    document.getElementById("contenido4").innerHTML = clave;


    // obtenemos el usuario del campo input y
    // validamos que exista en el array
    // si no, mostramos un alert y no hacemos nada
    // si existe actualizamos el elemento con id clavebuscada

    // sintaxis jQuery: nombre = $("#nom").val();

}





























// pasos ejercicio con XML:
// generar el array desde el XML
// AÑADIR un botón para cada orden:
// 1 - ascendente por nombre de usuario
// 2 - asecendente por clave de usuario
// 3 - mostrar solamente el usuario solicitado
//    (input - .slice .indexOf)