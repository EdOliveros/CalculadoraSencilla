const txtop1 = document.getElementById("op1")
const txtoperador = document.getElementById("operador")
const txtop2 = document.getElementById("op2")
const txtcalcular = document.getElementById("calcular")
const txtresultado = document.getElementById("resultado")


txtcalcular.addEventListener("click", calcular)

function calcular () {
    const operador = txtoperador.value
    const op1 = parseFloat(txtop1.value)
    const op2 = parseFloat(txtop2.value)

    if(operador == "+" || operador == "-" || operador == "*" || operador == "/") {
        let resultado
        switch (operador) {
            case "+":
                resultado = op1 + op2 
                break;
            case "-":
                resultado = op1 - op2 
                break;
            case "*":
                resultado = op1 * op2 
                break;
            case "/":
                resultado = op1 / op2 
                break;
        }
        txtresultado.innerText = "= " + resultado
    } 
}