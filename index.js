function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
    }).then(function(contactos){
        var cuerpo = document.getElementById("cuerpo");
        var table = document.getElementById("table");
        
        for( i = 0 ; i < contactos.length ; i = i + 2 ){
            var primer = contactos[i];
            var segundo = contactos[i+1];

            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            var td6 = document.createElement("td");
            if( segundo == null ){
                text1 = document.createTextNode(primer.nombre);
                text2 = document.createTextNode(primer.apellido);
                text3 = document.createTextNode(primer.telefono);
                text4 = document.createTextNode("");
                text5 = document.createTextNode("");
                text6 = document.createTextNode("");
            }
            else{
                text1 = document.createTextNode(primer.nombre);
                text2 = document.createTextNode(primer.apellido);
                text3 = document.createTextNode(primer.telefono);
                text4 = document.createTextNode(segundo.nombre);
                text5 = document.createTextNode(segundo.apellido);
                text6 = document.createTextNode(segundo.telefono);
            }
            

            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);
            td6.appendChild(text6);

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            table.appendChild(tr);
        }
    })
}

function agregarContactos(){
    fetch("http://www.raydelto.org/agenda.php").then(function(contactos){
        return contactos.json();
    }).then(function(contactos){

    var aNombre = document.getElementById("AgendaNombre").value;
    var aApellido = document.getElementById("AgendaApellido").value;
    var aTelefono = document.getElementById("AgendaTelefono").value;

    contactos.push({"nombre":aNombre, "apellido":aApellido, "telefono":aTelefono});
    console.log("exito");
    })
}