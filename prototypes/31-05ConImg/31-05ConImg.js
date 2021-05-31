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
    let coche = [];
    let xmlDoc = xml.responseXML;
    let tabla = "";
    let x = xmlDoc.getElementsByTagName("coche");

    tabla += "<table><tr><th>Coche</th><th>Foto</th></tr>";

    for (let i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        Foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + Nom + "</td><td>" + Foto + "</td></tr>";
        // actualizo el array bidimensional con los usuarios coches
        coche = [Nom, Foto];
        coches.push(coche);

    }

    tabla += "</table>"
        //document.getElementById("contenidoXML").innerHTML = tabla;


}

function mostrar() {

    // muestro en pantalla el array de usuarios coches

    let tabla = "";

    coches.forEach(
        (coche) => {
            coche.forEach(
                (datos) => {
                    tabla = "<table><tr><th>Coche</th><th>Foto</th></tr>";
                    for (let i = 0; i < coches.length; i++) {
                        // leo las etiquetas que me interesan del objeto
                        Nom = coches[i][0];
                        Foto = coches[i][1];
                        // actualizo la tabla de visualización
                        tabla += "<tr><td>" + Nom + "</td><td>" + `<img src="${Foto}" alt="">` + "</td></tr>";
                        // actualizo el array bidimensional con los usuarios coches

                    }
                    tabla += "</table>"
                });
        });
    document.getElementById("contenidoXML").innerHTML = tabla;
}