// window.document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JavaScript</b>!";

// window.document.write("Olá <u>mundo escrito com window.document.write();</u><br><br>");

// window.document.write((4) + (7));

// // window.alert((10) + (3));

// console.log("Olá isso é um console.log();");




// let a,b,c;

// a = 5;
// b = 7;
// c= 9;




// function minhaFuncao() {
//     window.document.write((4) + (7));
//     window.document.write((4) + (7));
//     window.document.write((4) + (7));
// }

            
/* =================={ AULA 4 }================== */


// console.log("5 + 5");
// console.log("1");

// /*var let const*/

// var A = 1;
// var B = 5;
// var C = ((A) + (B));

/*console.log(C);*/

/* =================={ AULA 6 }================== */

// var pote = "Bombom";
// window.alert(pote);

// var l = 2;
// var r = 3;
// var v = 5;

// window.alert((l) + (r) + (v));


// var nome, sobrenome, data_nasc, nome_completo, idade;

// nome = "Leony";
// sobrenome = "Leandro Barros";
// nome_completo = ((nome) + (" ") + (sobrenome));
// idade = 30;

// pessoa = ((idade) + (10) + (nome));

// soma = ((idade) + (10));
// pessoa = ((nome) + (" ") + (soma));

// window.document.getElementById("texto").innerHTML = (nome_completo);
// window.document.getElementById("texto").innerHTML = (pessoa);

// var pessoa = "Leony";
// var pessoa = "Lerico";

// const h = (76);

// var x = (10);

// {
//     var x = (2);
// }

// window.document.getElementById("texto").innerHTML = (x);

/* =================={ AULA 7 }================== */

// var valor1, valor2, valor3;

// valor1 = (10);
// valor2 = ("10");
// valor3 = ((valor1) + (valor2));

// comparacao = (valor1 !== valor2); 

// window.alert(valor3);
// window.alert(++valor3);
//window.alert(comparacao);

// var idade, eleitor, resultado, resultado2,resultado3;

// idade = 66;
// eleitor = ((idade) < (18)) ? "não Eleitor" : "sim, eleitor";
//window.alert("A resposta é " + eleitor + " e a idade dele é " + idade + "!");

// resultado = (idade > 60 && idade < 70);

// resultado2 = (idade === 65 || idade === 72);

// resultado3 = !(idade === 66);

// window.alert(resultado);
// window.alert(resultado2);
// window.alert(resultado3);





/* =================={ AULA 8 }================== */


// function soma(valor1, valor2) {
//     return ((valor1) + (valor2));
// }

// var total = soma((20),(23));

// window.document.getElementById("texto").innerHTML = total;


// function realParaDolar(real, cotacaoDolar) {
//     return ((real) * (cotacaoDolar));
// }

// var valorReal = 7.60;
// var cotacao = 5.90;

// var cot = realParaDolar((valorReal), (cotacao));

// window.alert("O valor em real é R$" + (valorReal) + " e o valor em dólar é US$" + (cot) + " !");


// function alertaHello() {
//     window.alert("Olá, pessoal!");
// }


// function paraCelsius(valorFahrenheit) {
//     return ((5/9) * (valorFahrenheit - 32));
// }

// var x = paraCelsius(23);

// window.alert("A temperatura é de " + x + "°C !");

// function minhaFuncao() {
//     let x = 2;
// }




/* =================={ AULA 8 }================== */


const carro = {
    marca:"Ford",
    modelo: "GT",
    ano: 2025,
    placa: "LRC-776",
    buzina: function() {
        window.alert("Biiiii")
    },
    completo: function() {
        return "A marca é " + this.marca + " e o modelo é: " + this.modelo + " !";
    }
};




/* =================={ AULA 9 }================== */



// function eventoClick() {
//     // window.alert("Olá, Mundo!");
//     window.document.body.style.backgroundColor = "Cyan";
// }

// function eventoDblClick() {
//     window.document.body.style.backgroundColor = "Blue";
// }

// function viraVermelho() {
//     let div = window.document.getElementById("teste");
//     div.style.backgroundColor = "red";
// }

// function viraAzul() {
//     let div = window.document.getElementById("teste");
//     div.style.backgroundColor = "blue";
// }

// function adicionaTexto() {
//     let p = window.document.getElementById("texto");
//     p.append("O mouse moveu!");
// }

// function limparTexto() {
//     window.document.getElementById("campoTexto").value = "";
// }

// function mudou() {
//     window.console.log("Mudou!");
// }

// function teclaPressionada() {
//     let input = window.document.getElementById("campoTexto").value;
//     console.log(input);
// }




/* =================={ AULA 11 }================== */


// const lista = [
//     "arroz",
//     "feijão",
//     "macarrão",
//     "leite"
// ];

// const listo = new Array(
//     "arroz",
//     "feijão",
//     "macarrão",
//     "leite"
// );

// lista[0] = "café";
// window.alert(lista[0])


// const pessoa = [
//     "Leony",
//     "Leandro",
//     (18),
//     "Lerico"
// ];

// // window.alert(pessoa.length);
// pessoa.push("Lericoriano");
// window.alert(pessoa[pessoa.length - 1]);


/* =================={ AULA 13 }================== */

// var interruptor = "off";

// if (interruptor == "on") {
//     window.alert("A lampada está ligada");
// } else {
//     window.alert("A lampada está desligada");
// }

// var hora = new Date().getHours();

// if (hora < 12) {
//     window.alert("Bom Dia!");
// } else if (hora < 18) {
//     window.alert("Boa Tarde!");
// } else {
//     window.alert("Boa Noite!");
// }

function verificar() {
    let nome = window.document.getElementById("inome").value;

    if (nome == "" || nome == null) {
        let p = window.document.getElementById("teste");
        p.innerHTML = "O campo não poderá ser vazio!";
            p.style.color = "red";
            p.style.fontSize = "30px";
    } else {
        let p = window.document.getElementById("teste");
        p.innerHTML = "Está tudo certo para prosseguir!"
            p.style.color = "green";
            p.style.fontSize = "30px";
    }
}



/* =================={ AULA 14 }================== */

function verificaCor() {

    let cor = window.document.getElementById("icor").value.toLowerCase();
    
    switch (cor) {
        case "azul":
            window.document.getElementById("teste").style.backgroundImage = "linear-gradient(45deg, blue, cyan)";
            break;
        case "vermelho":
            window.document.getElementById("teste").style.backgroundImage = "linear-gradient(45deg, black, red";
            break;
        case "amarelo":
            window.document.getElementById("teste").style.backgroundImage = "linear-gradient(45deg, black, yellow";
            break;
        case "verde":
            window.document.getElementById("teste").style.backgroundImage = "linear-gradient(45deg, black, green)";
            break;
        default:
            window.document.getElementById("teste").style.backgroundImage = "linear-gradient(45deg, rgb(184, 184, 184), rgb(184, 184, 184))";
            window.document.getElementById("teste").innerHTML = "Cor disponível!";
            setTimeout(function() {
                window.document.getElementById("teste").innerHTML = "";
            }, 1000);
    }
}

function diaDaSemana() {
    var dia = new Date().getDay();
    var diaMeu = 0;
    window.document.getElementById("teste").style.color = "green";

    switch (dia) {
        case 0:
            window.document.getElementById("teste").innerHTML = "Hoje é Domingo!";
            break;
        case 1:
            window.document.getElementById("teste").innerHTML = "Hoje é Segunda-Feira!";
            break;
        case 2:
            window.document.getElementById("teste").innerHTML = "Hoje é Terça-Feira!";
            break;
        case 3:
            window.document.getElementById("teste").innerHTML = "Hoje é Quarta-Feira!";
            break;
        case 4:
            window.document.getElementById("teste").innerHTML = "Hoje é Quinta-Feira!";
            break;
        case 5:
            window.document.getElementById("teste").innerHTML = "Hoje é Sexta-Feira!";
            break;
        case 6:
            window.document.getElementById("teste").innerHTML = "Hoje é Sábado!";
            break;
        default:
            window.document.getElementById("teste").innerHTML = "Não existe tal dia!"
    }
}

/* =================={ AULA 15 }================== */

// for (let i=0; i <= 10000; i++) {
//     window.document.getElementById("teste").innerHTML += i + ", ";
// }

// let ano = new Date().getFullYear();

// for (let i=ano; i >=1900; i--) {
//     window.document.getElementById("iano").innerHTML += "<option value='" + i  + "'>" + i + "</option>";
// }

// const carros = ["Gol", "Fusca", "Brasília", "Del Rey", "Chevette"];
// var tamanho = carros.length;

// for (let i=0; i < tamanho; i++) {
//     window.document.getElementById("teste").innerHTML += carros[i] + " - ";
// }

/* =================={ AULA 16 }================== */

// function ativarContagem() {
//     tempo = window.document.getElementById("itempo");
//     {   
//         tempo.style.fontSize = "24px";
//         tempo.style.width = "100%";
//         tempo.style.color = "green";
//     }
//     tempo.innerHTML = "Começou a contagem!";
//     Tempo = setTimeout(function() {
//         tempo.innerHTML = "A contagem acabou!"
//         {
//             tempo.style.color = "red";
//         }
//     },2000);
// }

// function pararContagem() {
//     clearTimeout(Tempo);
//     tempo.innerHTML = "A contagem parou!";
//     {
//         tempo.style.color = "tomato";
//     }
// }


function AtivarContagem() {
    Tempo = setInterval(function() {

        var cronometro = parseInt(window.document.getElementById("itempo").innerHTML);
        
        if (window.document.getElementById("itempo").innerHTML === "NaN" || window.document.getElementById("itempo").innerHTML === NaN || window.document.getElementById("itempo").innerHTML instanceof String) {
            var soma = cronometro;
        } else {
            var soma = cronometro - 1;
        }
        
        // if (window.document.getElementById("itempo").innerHTML === "NaN" || window.document.getElementById("itempo").innerHTML === NaN || window.document.getElementById("itempo").innerHTML instanceof String) {
        //     setTimeout(() => {
        //         window.document.getElementById("itempo").innerHTML = "Tempo já se esgotou!";
        //         PararContagem();
        //     }, 50);}
        if (soma === 0) {
            window.document.getElementById("itempo").style.fontSize = "24px";
            window.document.getElementById("itempo").style.width = "100%";
            window.document.getElementById("itempo").style.color = "red";
            window.document.getElementById("itempo").innerHTML = "Tempo Esgotado!";
            PararContagem();    
        } else {
            window.document.getElementById("itempo").innerHTML = soma;
        }

        if (isNaN(window.document.getElementById("itempo").innerHTML)) {
            window.document.getElementById("itempo").innerHTML = "Tempo se esgotou!";
        }
    },1000);
    
}



function PararContagem() {
    clearInterval(Tempo);
}

function zerarContagem() {
    var tempo = window.document.getElementById("itempo").innerHTML;
    var zerar = parseInt(tempo - tempo);
    if (zerar === 0) {
        window.document.getElementById("itempo").style.fontSize = "24px";
        window.document.getElementById("itempo").style.width = "100%";
        window.document.getElementById("itempo").style.color = "red";
        window.document.getElementById("itempo").innerHTML = "Tempo Esgotado!";
        PararContagem();
    } else if (window.document.getElementById("itempo").innerHTML === "NaN" || window.document.getElementById("itempo").innerHTML === NaN || window.document.getElementById("itempo").innerHTML instanceof String || window.document.getElementById("itempo").innerHTML === "Tempo Esgotado!") {
        window.document.getElementById("itempo").innerHTML = "Operação Impossível!";
    } else {
        window.document.getElementById("itempo").innerHTML = zerar;
    }

    if (isNaN(window.document.getElementById("itempo").innerHTML)) {
        window.document.getElementById("itempo").innerHTML = "Operação Impossível!";
    }
}

function resetarContagem() {
    var tempo = window.document.getElementById("itempo").innerHTML;
    var reset = parseInt(tempo);
    reset = 10;
    {
        window.document.getElementById("itempo").style.color = "rgb(77, 77, 255)";
        window.document.getElementById("itempo").style.width = "10%";
        window.document.getElementById("itempo").style.margin = "20px auto";
        window.document.getElementById("itempo").style.fontSize = "40px";
    }
    window.document.getElementById("itempo").innerHTML = reset; 
}

// let tempoInterval;  // Variável global para armazenar o intervalo da contagem
// let contadorAtivo = false;  // Flag para verificar se a contagem está ativa

// function AtivarContagem() {
//     // Se a contagem já estiver ativa, não faz nada
//     if (contadorAtivo) return;

//     contadorAtivo = true; // Marca que a contagem começou
//     tempoInterval = setInterval(function() {
//         let cronometro = parseInt(window.document.getElementById("itempo").innerHTML);
        
//         // Verifica se o cronômetro não é um número ou é NaN
//         if (isNaN(cronometro)) {
//             window.document.getElementById("itempo").innerHTML = "Erro: Valor inválido!";
//             clearInterval(tempoInterval);  // Para o intervalo se houver erro
//             contadorAtivo = false;  // Reinicia o controle da contagem
//             return;
//         }

//         var soma = cronometro - 1;
        
//         if (soma === 0) {
//             window.document.getElementById("itempo").style.fontSize = "24px";
//             window.document.getElementById("itempo").style.width = "100%";
//             window.document.getElementById("itempo").style.color = "red";
//             window.document.getElementById("itempo").innerHTML = "Tempo Esgotado!";
//             PararContagem();
//         } else {
//             window.document.getElementById("itempo").innerHTML = soma;
//         }
//     }, 1000);  // Intervalo de 1 segundo para contagem
// }

// function PararContagem() {
//     clearInterval(tempoInterval);  // Para a contagem
//     contadorAtivo = false;  // Marca que a contagem foi parada
// }

// function zerarContagem() {
//     window.document.getElementById("itempo").innerHTML = "0";
//     clearInterval(tempoInterval);  // Para o intervalo, caso tenha algum em andamento
//     contadorAtivo = false;
// }

// function resetarContagem() {
//     window.document.getElementById("itempo").innerHTML = "10";  // Reseta para 10
//     clearInterval(tempoInterval);  // Para qualquer intervalo em andamento
//     contadorAtivo = false;
// }







/* =================={ AULA 17 }================== */

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiii";
    }
}

const uno = new Carro("Fiat", "Uno", "2001");
console.log(uno);
console.log(uno.buzina())
uno.ano = 2024;

console.log(uno.ano);



/* =================={ AULA 18 }================== */

let data = new Date();
//console.log(data);

let ano = data.getFullYear();
//console.log(ano);

let mes = data.getMonth();
//console.log(mes + 1);


const mesesAno = ["Janeiro", "Fevereiro", "Março",
    "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"];

let mesEscrito = mesesAno[data.getMonth()];
console.log(mesEscrito);

let diaMes = data.getDate();
console.log(diaMes);

let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = [
    "Domingo"       ,
    "Segunda"       ,
    "Terça"         ,
    "Quarta"        ,
    "Quinta"        ,
    "Sexta"         ,
    "Sábado"
];

let diaDaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaDaSemanaEscrito)

let horas = data.getHours();
console.log(horas);

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let milisegundos = data.getMilliseconds();
console.log(milisegundos);

console.log(horas + ":" + minutos + ":" + segundos + ":" + milisegundos);


let dataBR = data.toLocaleString("pt-BR", {timeStyle:"short"});
console.log(dataBR);

d = new Date();

diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : '' + x;
}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);



var hoje = new Date();
var vencimento = new Date(2025, 9, 15);

if (hoje > vencimento) {
    console.log("Sua conta está vencida!");
} else {
    console.log("Sua conta ainda não venceu!");
}

var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
var diferencaDias = Math.abs(Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000)));

console.log(diferencaDias + " dias!");



/* =================={ AULA 19 }================== */


// const veiculo = {
//     marca: "Fiat",
//     modelo: "Uno",
//     ano: 2025,
//     motor: ["1.6", "1.4", "1.8"]
// }


// let texto = JSON.stringify(veiculo);

// window.document.getElementById("area").innerHTML = texto;
// let obj = JSON.parse(texto);
// console.log(obj.motor[2]);


function buscarCEP() {
    let campoTexto = window.document.getElementById("cep").value;

    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://viacep.com.br/ws/" + campoTexto + "/json/");
    ajax.send();

    ajax.onload = function() {
        window.document.getElementById("texto").innerHTML = this.responseText;
        let obj = JSON.parse(this.responseText);
        // window.alert(obj.ddd);
        let logra = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        window.document.getElementById("texto").innerHTML = "Logradouro:" + logra + "<br><br> Cidade:" + cidade + "<br><br> Estado:" + estado;
    }

}

