function fun1(){
    console.group("Agrupando funciones fun 1");
    console.log("Información 1")
    fun2();
    console.log("Información 1 de vuelta")
    console.groupEnd("Fin de la agrupación fun 2");
    console.count('Vaces')
    console.count('Vaces')
    console.countReset('Vaces');
    console.count('Vaces');
}
function fun2(){
    
    console.group("Fin de la agrupación fun 1");
    console.log("Información 2")
    console.groupEnd("Fin de la agrupación fun 2");
}
console.log("Empezó");
fun1();