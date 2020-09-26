let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let result = num1 * num2;

const h2 = document.querySelector("h2");
const body = document.querySelector("body");
h2.textContent = num1 + 'x' + num2 + '=?';

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(result === Number(input.value)) {
        swal("정답!", "당신은 산수왕", "success");
        num1 = Math.ceil(Math.random() * 10);
        num2 = Math.ceil(Math.random() * 10);
        result = num1 * num2;
        h2.textContent = num1 + 'x' + num2 + '=?';
        input.value ='';
    } else {
        swal("땡!", "try again!");
        input.value ='';
    }
});

