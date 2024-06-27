function clearDisplay() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    var current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function insert(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
