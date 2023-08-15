function myfun(text, id) {
    var inp = document.getElementById("input")
    inp.value += text

}

function del() {
    var inp = document.getElementById("input")
    inp.value = ""
}

function back() {
    var inp = document.getElementById("input")

    inp.value = inp.value.slice(0, -1)
}

function equal() {
    var inp = document.getElementById("input")
    var value = inp.value
    var num1 = 0, num2 = 0, op, j = 0, i = 1, result = 0

    while (!isoperator(value[i])) {
        i++
    }
    num1 = parseFloat(value.slice(0, i))
    while (j <= value.length) {
        if (isoperator(value[i])) {
            op = value[i]
        }
        j = i + 1
        while (!isoperator(value[j]) && j <= value.length) {
            j++
        }
        num2 = parseFloat(value.slice(i + 1, j))

        result = operate(num1, num2, op)
        num1 = operate(num1, num2, op)
        num2 = 0
        i = j;
    }

    inp.value = result
}

function isoperator(op) {
    if (op == '+' || op == '-' || op == '/' || op == '*') {
        return true
    }
    return false
}

function operate(number1, number2, operator) {
    if (operator == '+') { 
        result = number1 + number2;
    }
    else if (operator == '-') { 
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2; 
    }
    return result
}
