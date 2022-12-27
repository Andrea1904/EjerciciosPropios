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


// crear los 30 carros de manera automatica 

function misAutos(marca, modelo, annio){
    this.marca=marca;
    this.modelo=modelo;
    this.annio=annio;
    
}

let autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca_1 = ("Patito"+i);
    var modelo_1= ("Modelo: "+i);
    var annio_1 = ("Año: "+i);
    autos.push(new auto (marca_1, modelo_1, annio_1));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }