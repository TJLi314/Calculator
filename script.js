// Eval array that stores everything that needs to be calculated
let eval = [];
const display = document.querySelector("#displayContent");

// Change the corresponding number to the ID
function numToID(num) {
    let ID = "";
    switch (num) {
        case 0:
            ID = "zero"; break;
        case 1:
            ID = "one"; break;
        case 2:
            ID = "two"; break;
        case 3:
            ID = "three"; break;
        case 4:
            ID = "four"; break;
        case 5:
            ID = "five"; break;
        case 6:
            ID = "six"; break;
        case 7:
            ID = "seven"; break;
        case 8:
            ID = "eight"; break;
        case 9:
            ID = "nine"; break;
    }
    return ID;
}

// Add a click event listener to every number button
for (let i = 0; i <= 9; i++) {
    let id = "#" + numToID(i);
    let numBtn = document.querySelector(id);
    numBtn.addEventListener('click', () => {
        eval.push(i);
        display.textContent = "" + i;
    });
}

// Add event listener to every operation button
let plus = document.querySelector("#plus");
plus.addEventListener('click', () => eval.push("+"));

let minus = document.querySelector("#minus");
minus.addEventListener('click', () => eval.push("-"));

let multiply = document.querySelector("#multiply");
multiply.addEventListener('click', () => eval.push("*"));

let divide = document.querySelector("#divide");
divide.addEventListener('click', () => eval.push("/"));

function equation() {
    let invalid = false;
    while (eval.length > 1) {
        if (typeof(eval[0]) != "number" || typeof(eval[2]) != "number" || typeof(eval[1]) != "string") {
            display.textContent = "0";
            invalid = true;
            break;
        }

        var result = 0;
        switch (eval[1]) {
            case "+":
                result = eval[0] + eval[2]; break;
            case "-":
                result = eval[0] - eval[2]; break;
            case "*":
                result = eval[0] * eval[2]; break;
            case "/":
                result = eval[0] / eval[2]; break;
        }

        eval.shift();
        eval.shift();
        eval.shift();
        eval.unshift(result);
    }

    if (!invalid) {
        display.textContent = "" + eval[0];
    }

    eval = [];
}

const equals = document.querySelector("#equals");
equals.addEventListener('click', equation);

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    display.textContent = "0"; 
    eval = [];
});