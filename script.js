//array 
let gatos = [
    { nombre: "Pelusa", edad: "4 años", sexo: "Macho", vacunas: true },
    { nombre: "Garfield", edad: "6 meses", sexo: "Macho", vacunas: true },
    { nombre: "Gaturro", edad: "2 años", sexo: "Macho", vacunas: false },
    { nombre: "Luna", edad: "7 años", sexo: "Hembra", vacunas: true },
];

//funciones

//funcion bienvenida
function hello(){ 
    let nombre = prompt("Ingresá tu nombre.");
    let apellido = prompt("Ingresá tu apellido.");
    if ((nombre && apellido) != ""){
        alert (
            "Hola, " + nombre + " " + apellido + ". Bienvenido a nuestro refugio."
            );
    } else while (nombre === "") {
        let error = "Tenés que ingresar un nombre y un apellido.";
        alert(error);
        nombre = prompt("Ingresá tu nombre");
        apellido = prompt("Ingresá tu apellido");
    }
    return nombre;
};

//menú inicio
function inicio(){
    let opciones = prompt("Ingresá una opción: \n1. Ver gatos disponibles \n2. Adoptar un gato \n3. Dar en adopción a un gato \n4. Ver requisitos de adopción \n5. Cancelar");
    while (opciones !== "5") {
        if (opciones === "1") {
            verGatos();
        } else if (opciones === "2") {
            adopcion()
        } else if (opciones === "3") {
            darEnAdopcion()
        }else if (opciones === "4"){
            requisitos()
            break
        }
    }
};

//opción 1
function verGatos(){
    let gatosDisponibles = prompt("Los gatos disponibles son: \n" + gatos.map((gato, indice) => ((indice + 1) + ". " + gato.nombre + "\n" )).join("") + "\n0. Volver al inicio");
    if (gatosDisponibles != 0){
        const elGato = gatos[gatosDisponibles - 1]
        let informacionGato = prompt(`Nombre: ${elGato.nombre} \nEdad: ${elGato.edad} \nSexo: ${elGato.sexo} \nVacunas: ${elGato.vacunas ? "si" : "no"}`);
    } else if (gatosDisponibles == 0){
        inicio();
    }
};

//opción 2
function adopcion(){
    let gatoAdoptado = prompt("Selecciona al gato que quieras adoptar. \n" + gatos.map((gato, indice) => ((indice + 1) + ". " + gato.nombre + "\n" )).join("") + "\n5. Cancelar" );
    if (gatoAdoptado != 5){
        const seleccionado = gatos[gatoAdoptado - 1]
        alert(`¡Felicitaciones, ${nombre}! Adoptaste a ${seleccionado.nombre}.`);
    } else if (gatoAdoptado == 5){
        inicio();
    }
};

//opción 3
function darEnAdopcion(){
    let nombreGato = prompt("¿Cuál es el nombre del gato que se dará en adopción?");
    let edadGato = prompt(`¿Qué edad tiene ${nombreGato}`);
    let sexoGato = prompt("¿Cuál es su sexo?");
    let vacunasGato = prompt("¿Está vacunado?");
    let vacunasGatom = vacunasGato.toLowerCase()
    gatos.push({nombre: nombreGato, edad: edadGato, sexo: sexoGato, vacunas: vacunasGatom == "si" ? true : false});
    alert("Ha dado en adopción a " + nombreGato)
    inicio()
}

//opción 4
function requisitos(){
    let requisitosAdopción = prompt("Ser mayor de edad.\nComprobante de domicilio: Un documento que demuestre que el lugar donde va a vivir el gato es de tu propiedad o vives allí de alquiler.\nContrato de adopción: En este contrato que firmarás te comprometes a cuidar del gato y mantenerlo en las mejores condiciones, a brindarle los cuidados veterinarios que necesite, a no utilizarlo para cría, a comunicar a la protectora cualquier cambio y, por supuesto, a no abandonarlo.\nCubrir los costes: Sí, adoptar tiene un coste, pero se trata de una donación para cubrir los costes veterinarios que ha tenido el animal en la protectora. \n0.Volver al inicio \n1.Finalizar");
    if (requisitosAdopción == 0){
        inicio();
    } else {
        alert("¡Hasta pronto!");
    }
}

//ejecución
let nombre = hello()
inicio()


