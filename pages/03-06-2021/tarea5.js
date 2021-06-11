let carlinos = [];

function leerXML() {
    // lee desde GitHub.
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cargarArray(this);
        }
    };

    // Abrir Xampp!!!!!!!!111
    xhr.open("GET", "carlinos.xml", true);
    xhr.send();
}

function cargarArray(xml) {
    let Nom;
    let Foto;
    let Pie;
    let Detalle;
    let carlino = [];
    let xmlDoc = xml.responseXML;
    let data = "";
    let x = xmlDoc.getElementsByTagName("carlino");

    //data += "<table><tr><th>carlino</th><th>Foto</th></tr>";

    for (let i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        Foto = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        Pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        Detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;

        carlino = [Nom, Foto, Pie, Detalle];
        carlinos.push(carlino);

    }
    for (let i = 0; i < carlinos.length; i++) {
        // leo las etiquetas que me interesan del objeto
        Nom = carlinos[i][0];
        Foto = carlinos[i][1];
        Pie = carlinos[i][2];
        Detalle = carlinos[i][3];

        // data += `<div id='imagen'>`
        // data += `<h3>${Nom}</h3>`;
        // data += `<img src="${Foto}" alt="">`;
        // data += `<p class='pie'>${Pie}</p>`;
        // data += `</div>`;


        data += `<div class="card m-3" style="width: 20%; height: 375px;">`
        data += `<img src="${Foto}" class="card-img-top gris" style="min-height: 200px;" alt="...">`
        data += `<div class="card-body">`
        data += `<h5 class="card-title">${Nom}</h5>`
        data += `<p class="card-text m-0" style="height: 70px;">${Pie}</p>`
            //data +=`<a href="" class="btn btn-primary m-0">Ir</a>`
        data += `</div>`
        data += `</div>`

    }

    console.log(carlinos.length);

    document.getElementById("contenido").innerHTML = data;


}