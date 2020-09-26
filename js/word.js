const word = document.getElementById("firstWord");
let firstWord = document.getElementById("firstWord").innerHTML;
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(firstWord[firstWord.length - 1] === input.value[0]) {
        swal("정답!", "one more time", "success");
        word.innerHTML = input.value;
        firstWord = word.innerHTML;
        input.value ='';
    } else {
        swal("땡!", "try again!");
        input.value ='';
    }
});

