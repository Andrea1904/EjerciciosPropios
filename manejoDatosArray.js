let array = [1, 2, 3, 4, 5, 6];
console.log("----------------------");
console.log(array);
function adicionarNumeros() {
  array.push(6, 7, 8, 9, 10);
}
adicionarNumeros();
console.log("----------------------");
console.log(array);
// elimina el elemento en la posicion 0

let shiftArray = array.shift();
//Revisamos. El output debe de ser [2,3,4,5]
console.log("----------------------");
console.log(array)

// pop borramos datos 

shiftArray=array.pop();
console.log("----------------------");
console.log(array)
console.log("Fin !!")