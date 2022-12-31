//Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.

if(numeroIf > 0){
    return "soy positivo"
}else if(numeroIf < 0){
    return "soy negativo"
}else if(numeroIf = 0){
    return "soy igual a cero "
}


///Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, 
//el bloque de código que tendrá el bucle deberá:
//Incrementar el valor de la variable en uno cada vez que se ejecute.
//Mostrarlo por pantalla cada vez que se ejecute.

int numeroWhile;

while(numeroWhile<3){
    numeroWhile=+1;
    console.log(numeroWhile);
}

//Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

int numeroDoWhile;
do{
 numeroDoWhile= 3;
}while(numeroDoWhile<3)
    console.log(numeroDoWhile);

//Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la 
//variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse 
//por pantalla.

int numeroFor=0;

for (int i=0; numeroFor<0; i++){
    numeroFor= +1;
    console.log(numeroFor);
}

//Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. 
//Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en 
//la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.

int estacion;

          // switch con tipo de datos int
        switch (num){
            case 1:  estacion = "Invierno";
                     break;
            case 2:  estacion = "Primavera";
                     break;
            case 3:  estacion = "Otoño";
                     break;
            case 4:  dayString = "Invierno";
                     break;
            
        }
        System.out.println(dayString);