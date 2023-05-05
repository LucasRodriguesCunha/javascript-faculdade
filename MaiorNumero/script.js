function testar(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);

    let resultado = document.getElementById("resultado");

    if(numero1 > numero2){
        resultado.innerHTML = "Número 1 é maior que o número 2";
    }else if(numero2 > numero1){
        resultado.innerHTML = "Numero 2 é maior que o número 1";
    }else{
        resultado.innerHTML = "Os números são iguais";
    }
}