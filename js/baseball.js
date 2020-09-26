const input = document.querySelector("input");
const form = document.querySelector("form");
const h2 = document.getElementById("js_h2");
const user_count= document.getElementById("red");
let count = 0;
let arr;
let newArr;

function generateArray() {
    arr = [1,2,3,4,5,6,7,8,9];
    newArr = [];
    for(let i = 0; i < 4; i++) {
        let newNum = arr.splice(Math.floor(Math.random()*(9 - i)),1)[0];
        newArr.push(newNum);
    }
}

generateArray();
console.log(newArr)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let answer = input.value;
    if(answer == newArr.join('')) {
        swal("정답!", "홈런입니다⚾🏏", "success");
        input.value = '';
        generateArray();
        count = 0;
    } else {
        let strike = 0;
        let ball = 0;
        count += 1;
        if (count > 10) {
            alert('기회초과,답은' + newArr + '였습니다. \n 새로운 숫자가 배정됩니다.');
            input.value = '';
            generateArray();
            count = 0;
        } else {
            let answerArr = answer.split('').map(Number);
            console.log(answerArr);
            for (let i = 0; i < 4; i += 1) {
                if (answerArr[i] === newArr[i]) {
                    strike += 1;
                } else if (newArr.indexOf(answerArr[i]) > -1) {
                    ball += 1;
            }
        }
    }

    h2.innerHTML = answer + ": " + strike + "스트라이크" + ball + "볼입니다.";
    user_count.innerHTML = "남은기회: " + (10-count) + "번";
    input.value = '';
  }

});

