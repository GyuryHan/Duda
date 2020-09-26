const content = document.querySelector('.content');
let start_time;
let end_time;
let timeOut;

swal("반응속도 테스트", "벨이 빨간색으로 바뀌면 벨을 재빨리 눌러주세요!");
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
            content.textContent = 'Too early, bell 다시 클릭 후 대기❗';
        } else {
            content.classList.remove('ready');
            content.classList.add('start');
            content.textContent = 'CLICK NOW❗❗❗❗❗❗';
        }
    } else if (content.classList.contains('start')) {
        end_time = new Date();
        let time = end_time - start_time;
        console.log(time);
        content.textContent = '당신의 반응속도: ' + time;
        content.classList.remove('start');
        content.classList.add('wait');
        start_time = null;
        end_time = null;
    }
});
