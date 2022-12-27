// objeto creado de manera manual 

var miAuto={
    marca:"Toyota",
    modelo:"Corolla",
    annio:"2020",
    detalleDeAuto: function(){
        console.log( `Auto ${this.modelo} ${this.annio}`)
    }
}
// objeto creado con una funcion constructora

function auto(marca, modelo, annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
    
}

console.log(auto);
auto();
// una nueva instancia de un objeto 
var autoNuevo = new auto("tesla","modelo",2021);

console.log(autoNuevo);
