let ejercicio = prompt("¿que ejercicio quieres ver?");

if( parseInt(ejercicio) == 1) {

    let num_1 = prompt("Dame un número.");
    let num_2 = prompt("dame el número que le quieras sumarm");
    let resultado = parseInt(num_1) + parseInt(num_2);
    alert("el resultado es " + resultado)

}

else if(parseInt(ejercicio) == 2) {
    let num_1 = prompt("Dame el primer número.");
    let num_2 = prompt("Dame el segundo número.");
    let num_3 = prompt("Dame el tercer número.");
    
    let resultado = [num_1 , num_2 , num_3];
    resultado.sort();
    
    alert(resultado[2] + ">" + resultado[1] + ">" + resultado[0]);
}

else if(parseInt(ejercicio) == 3) {
    let str = prompt("dame la palabra que quieres contar")
    alert(str + " tiene " + str.length + " caracteres.")
}

else if(parseInt(ejercicio) == 4) {
    let num_1 = prompt("¿que número quieres saber si es par?")
    if(num_1 % 2 == 0) {
        alert("es par")
    }
    else{
        alert("es impar")
    }
}

else if(parseInt(ejercicio) == 5) {
    let str = prompt("ingrese la palabra que quieras repetir");
    let num_1 = prompt("ingrese el número de reoeticiones");
    for (num_2 = 0; num_2 != parseInt(num_1); num_2++) {
        document.write(str + "<br>")
    }
}

else if(parseInt(ejercicio) == 6) {
    let num_1 = prompt("ingrese el primer número");
    let num_2 = prompt("ingrese el segundo número");
    for (num_1; num_1 != num_2; num_1++){
        document.write(num_1);
    }
}

else if(parseInt(ejercicio) == 7) {
    let num_1 = prompt("ingrese el primer número");
    let num_2 = prompt("ingrese el segundo número");
    for (num_1; num_1 != num_2; num_1++){
        if(parseInt(num_1) % 3 == 0){
            document.write(num_1)
        }
    }
}

else if(parseInt(ejercicio) == 8) {
    num_1 = 2
    for (num_1; num_1 <= 101; num_1++){
        if(parseInt(num_1) % 2 == 0){
            document.write(num_1 + "<br>")
        }
        else if (parseInt(num_1) % 5 == 0){
            document.write(num_1 + "<br>")
        }
    }
}

else if(parseInt(ejercicio) == 9) {
    MiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    posicion = MiArray.length;
    resultado = 0;
    for(num_1 = 0; num_1 <= posicion; num_1 ++){
        resultado += MiArray[num_1]
    }
    dcomunet.write(resultado)
    console.log(resultado)
}

else if(parseInt(ejercicio) == 10) {
    MiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    posicion = MiArray.length;
    resultado = 0;
    for(num_1 = 0; num_1 <= posicion; num_1 ++){
        if (MiArray[num_1] % 2 == 0){
            resultado += MiArray[num_1]
        }
    }
    dcomunet.write(resultado)
    console.log(resultado)
}

else if(parseInt(ejercicio) == 11) {
    
}

else if(parseInt(ejercicio) == 12) {
    
}

else if(parseInt(ejercicio) == 13) {
    
}

else if(parseInt(ejercicio) == 14) {
    
}

else if(parseInt(ejercicio) == 15) {
    let num_1 = prompt("ingrese el número menor");
    let num_2 = prompt("ingrese el número mayor");
    let num_3 = prompt("ingrese el divisor")
    for (num_1; num_1 <= num_2; num_1++){
        if(parseInt(num_1) % parseInt(num_3) == 0){
            document.write(num_1 + " ")
        }
    }
}

else {
    alert ("ese ejercicio no existe")
}
