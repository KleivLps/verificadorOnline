let isOnline = false;
let entrada = prompt('Estas conectado? Escribe "SI" o "NO"')
let respuesta = entrada ?? "No hay valor";
if (respuesta.toUpperCase() == "SI" || respuesta.toUpperCase() == "NO") {
    if (respuesta.toUpperCase() == "SI" && isOnline === false) {
        isOnline = true;
        if (isOnline) {
            let hobby = "programar", nombre = "Kleiver", ubicacion = "Lima", hora = "8:00PM", pais = "Perú", grados = "12°";
            alert("Usuario conectado");
            console.log(`Hola ${nombre} como esta el clima hoy, creo que estan a ${grados} en ${ubicacion}, espero estes disfrutando de ${hobby} el dia de hoy, por cierto, creo que ya son las ${hora} en ${pais}`);
        } else {
            alert("El usuario no esta conectado")
        }
    } else {
        alert("has decidido no conectarte")
    }
}else{
    alert(`${respuesta}`);
}