function Calcular() {
    const calcular = document.getElementById("textboxTabuada").value;

    if (isNaN(calcular) || (calcular == "" ) || (calcular == 0)) {
        window.alert("Não pode ser caracter, vazio ou zero");
        document.getElementById("textboxTabuada").value;
        document.getElementById("textboxTabuada").focus();
    }

    else {
        var i = 1;
        var result = 0;
        var text = "";

        for (i; i<=10; i++) {
            result = calcular*i;
            text = text + calcular + "x" + i + "=" + result + "\n";
        }
        window.alert(text);
    }
}

function Limpar() {
    document.getElementById("textboxTabuada").focus();
}