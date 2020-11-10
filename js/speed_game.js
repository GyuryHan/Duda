const content = document.querySelector('.content');
const result = document.querySelector('.result');
const text = document.querySelector('.start_text');
const rocket = document.querySelector('.rocket');
let start_time;
let end_time;
let timeOut;

swal("반응속도 테스트", "로켓이 생성되면 재빨리 로켓을 클릭해주세요!");
content.addEventListener('click', function() {
    if (content.classList.contains('wait')) {
        content.classList.remove('wait');
        content.classList.add('ready');
        timeOut = setTimeout(function() {
            start_time = new Date();
            content.click();
        }, Math.floor(Math.random()* 1000) + 2000); //random초 실행
    } else if (content.classList.contains('ready')) {
        if(!start_time) {
            clearTimeout(timeOut);
            content.classList.remove('ready');
            content.classList.add('wait');
            result.textContent = 'Too early, bell 다시 클릭 후 대기❗';
        } else {
            content.classList.remove('ready');
            content.classList.add('start');
            text.innerHTML = '';
        }
    } else if (content.classList.contains('start')) {
        render();
        content.classList.add('rocket');
        rocket.classList.add('fly');
        end_time = new Date();
        let time = end_time - start_time;
        start_time = null;
        end_time = null;
        setTimeout(()=>{
            result.textContent = '당신의 반응속도: ' + time;
        },1000)
    }
});

let yPos=0;
let rafId;

function render() {
    rocket.style.transform =`translateY(${-yPos}px)`;
    yPos += 10;
    rafId = requestAnimationFrame(render);

    if(yPos > 420) {
        cancelAnimationFrame(rafId);
    }
}
