const cardList = document.querySelectorAll('.card');
const cardBack = document.querySelectorAll('.card-back');
const new_candi = ['red', 'red', 'orange', 'orange', 'yellow', 'yellow', 'pink', 'pink', 'blue', 'blue', 'black', 'black'];
let color_candi = new_candi.slice();
let color = [];
let clickflag = true;
let click_card = [];
let right_card = [];
let start_date;
let end_date;

function shuffle () {
    for (let i =0; color_candi.length > 0; i ++) {
       color = color.concat(color_candi.splice(Math.floor(Math.random() * color_candi.length), 1));
    }
}

function cardSetting() {
    clickflag = false;
    for (let i =0; i < 12; i ++) {
        cardBack[i].style.backgroundColor = color[i];
    }

    for (const card of cardList) {
        card.addEventListener('click', function(){
            if(clickflag && !right_card.includes(card)) {
            card.classList.toggle('flipped');
            click_card.push(card);
            if (click_card.length === 2) {
                if (click_card[0].querySelector('.card-back').style.backgroundColor === click_card[1].querySelector('.card-back').style.backgroundColor) {
                    right_card.push(click_card[0]);
                    right_card.push(click_card[1]);
                    click_card = [];
                    if (right_card.length === 12) {
                        end_date = new Date().valueOf();
                        swal("성공입니다!", + ((end_date - start_date) / 1000) + "초 걸렸습니다.") ;
                        color_candi = new_candi.slice();
                        color = [];
                        right_card = [];
                        start_date = null;
                        end_date = null;
                        console.log(new_candi, color, right_card, start_date, end_date, click_card);
                        shuffle();
                        cardSetting();
                    }
                } else { //두 카드의 색상이 다르면
                    clickflag = false;
                    setTimeout(function() {
                        click_card[0].classList.remove('flipped');
                        click_card[1].classList.remove('flipped');
                        clickflag = true;
                        click_card = [];
                    }, 1000);
            }
          }
        }
      });
    };

    cardList.forEach(function (card, index) {
        setTimeout(function() {
            card.classList.add('flipped');
        }, 1000 + 100 * index);
    });

    setTimeout(function() {
        cardList.forEach(function (card) {
            card.classList.remove('flipped');
        });
        clickflag = true;
        start_date = new Date().valueOf();
        console.log(start_date);
    }, 5000);
}

shuffle();
cardSetting();