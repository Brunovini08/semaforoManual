
var botao = document.getElementById("botao");
var botao2 = document.getElementById("botao2");
function v(){
        var vermelho = document.getElementById("vermelho");
        var amarelo = document.getElementById("amarelo");
        var verde = document.getElementById("verde");
        vermelho.style.backgroundColor = "#FF807B";
        amarelo.style.backgroundColor = "#FFF2AE";
        verde.style.backgroundColor = "green";
}

function vermelho(){
    var verde = document.getElementById("verde");
    var amarelo = document.getElementById("amarelo");
    var vermelho = document.getElementById("vermelho");
    verde.style.backgroundColor = "#A7E0B3";
    amarelo.style.backgroundColor = "#FFF2AE";
    vermelho.style.backgroundColor = "red";
}

botao.addEventListener("click", vermelho);
botao2.addEventListener("click", v);



