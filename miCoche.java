//ejercicio 1

let suma;

function sumaParams(a,b,c){
    suma= a+b+c;
    console.log(suma);
}

sumaParams(1,2,3);



//Crear una clase coche.
//Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.
//Una función que incremente el número de puertas que tiene el coche.
//Crear un objeto miCoche en el main y añadirle una puerta.
//Mostrar el número de puertas que tiene el objeto.

public class Coche {

  // cantidad de puertas
  private static int puertasTotales = 0;

  public Coche(String puertas) {
    this.puertas = puertas;
  }
  
  // método de clase
  public static int getPuertas() {
    return Coche.puertasTotales;
  }
  

  public int cantidadPuertas() {
    return this.cantidadPuertas;
  }
  public void cuantaPuertas() {
    this.puertas=+1;
    Coche.puertasTotales=+1;
  }
}