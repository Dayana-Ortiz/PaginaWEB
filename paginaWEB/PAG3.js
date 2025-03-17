function ejecutar() {

    let entrada = "";
    let codigo = 0; 
    let binario ="";
    entrada= document.getElementById("bina2").value;
    codigo=entrada.charCodeAt(0);
    
    for (let i = 7;i>=0;i--){
        if (2**i<= codigo){
            binario= binario + "1";
            codigo= codigo - 2**i;

        }else {
            binario= binario + "0";
        } 
    }
    document.getElementById("sal").innerHTML ="El numero binario del carcater es: "+binario;
    
    
}
function BinToAscii(){
    let bina = document.getElementById("binary").value;
    let result = 0;

  
    if(bina.length != 8){
        document.getElementById("xx").innerHTML = "Debes ingresar un binario de 8 digitos";
        return;
    }else{

        for(let i = 0; i<8; i++)
            result = result +  parseInt(bina[i]) * (2 ** (7 - i));
        
        document.getElementById("xx").innerHTML = "el numero decimal es: " + result
        document.getElementById("zz").innerHTML = "El caracter equivalente es el : "+ String.fromCharCode(result)
    }
}