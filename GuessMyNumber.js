/* Sat Mar 5 2022 */


'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector{'mesage'}.textContant = 'ヽ(^o^)ノ You Got It right';

document.querySelector('.number').textContent = 13;

document.querySelector('score').textContent = 10;

document.quertSelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    if (!guess) {
        document(querySelector('message').textContent = '（◞‸◟） NO NUMBER!')
    }
});

/*                                       */








