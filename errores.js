function otroLlamado(){
     manejoError();
}
function manejoError(){
   return 3+z;
}

function manejoErrorAsync (callBack){
    setTimeout(function(){
        try{
        return 3+z;}
        catch (err){
            console.error('Error');
            callBack(err);
        }
    })
}
try{
   // otroLlamado();
    manejoErrorAsync(function(err){
        console.log('menejo el error');
    });

}catch(err){
    console.error("tuvimos un error");
  //  console.error(err); // explicación del error  
     console.error(err.message); // el mensaje puntual
     console.log("se manejo el error");
}
console.log('probando');
manejoError();
