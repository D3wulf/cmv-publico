let coches = [];

function leerXML() {
    // lee desde GitHub.
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };

    // Abrir Xampp!!!!!!!!111
    xhr.open("GET", "miXml.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    let Nom;
    let Foto;
    let Pie;
    //let Detalle;
    let coche = [];
    let xmlDoc = xml.responseXML;
    let tabla = "";
    let x = xmlDoc.getElementsByTagName("coche");

    //tabla += "<table><tr><th>Coche</th><th>Foto</th></tr>";

    for (let i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        Foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        Pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        //Detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;

        coche = [Nom, Foto, Pie];
        coches.push(coche);

    }

    console.log(coches.length);

    tabla += ""
}

function mostrar() {

    // muestro en pantalla el array de usuarios coches

    let tabla = "";



    //tabla += "<div >";

    for (let i = 0; i < coches.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = coches[i][0];
        Foto = coches[i][1];
        Pie = coches[i][2];
        // actualizo la tabla de visualización
        tabla += `<h3>${Nom}</h3>`;
        tabla += `<img src="${Foto}" class='img-fluid' alt="">`;
        tabla += `<p class=''>${Pie}</p>`;
        //tabla += "<a href='#' class='btn btn-primary'>Ir</a>"


        // actualizo el array bidimensional con los usuarios coches

    }

    //tabla += "</div>";


    document.getElementById("contenidoXML").innerHTML = tabla;
}

let miCoche;

function mostrarUrl() {

    miCoche = document.getElementById("coche").value;

    console.log(miCoche);

    let encontrado = 0;
    let url = "";

    for (let i = 0; i < coches.length; i++) {

        if (miCoche == coches[i][0]) {

            encontrado = 1;
            url = coches[i][1];
        }
    }

    if (encontrado == 1) {

        console.log("Se han encontrado resultados");
        console.log(url);
    } else {
        alert("No se han encontrado resultados a su búsqueda");
    }

    document.getElementById("contenido4").innerHTML = url;

}