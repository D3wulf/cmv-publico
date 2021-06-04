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
    let Detalle;
    let coche = [];
    let xmlDoc = xml.responseXML;
    let data = "";
    let x = xmlDoc.getElementsByTagName("coche");

    for (let i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        Foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        Pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        Detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;

        coche = [Nom, Foto, Pie, Detalle];
        coches.push(coche);

    }

    for (let i = 0; i < coches.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = coches[i][0];
        Foto = coches[i][1];
        Pie = coches[i][2];
        Detalle = coches[i][3];

        data += "<div class='mySlides fade'>"
            //data += "<div class='numbertext'>" + [i] + "/" + coches.length + "</div>"
            // data += `<h3>${Nom}</h3>`
        data += `<img src="${Foto}" style="width:100%">`
        data += `<p class='text'>${Pie}</p>`
        data += "</div>"


    }

    document.getElementById("contenido").innerHTML = data;




}