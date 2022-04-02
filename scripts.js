function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);

    var valorEmReal = valorEmDolarNumerico * 5.06;
    var valorEmReall = valorEmReal.toFixed(2);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Valor é: R$ " + valorEmReall;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function EURO() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);

    var valorEmEuro = valorEmEuroNumerico * 5.52;
    var valorEmEuroo = valorEmEuro.toFixed(2);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor é: € " + valorEmEuroo;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function BITCOIN() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmBitcoinNumerico = parseFloat(valor);

    var valorEmBitcoin = valorEmBitcoinNumerico * 211.753;
    var valorEmBitcoinn = valorEmBitcoin.toFixed(2);

    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor é: ₿ " + valorEmBitcoinn;
    elementoValorConvertido.innerHTML = valorConvertido;
}