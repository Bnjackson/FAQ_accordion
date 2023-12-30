const questions = document.querySelectorAll('.questions');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', (event) => {
        const btn = questions[i].children[1];
        const answer = questions[i].nextElementSibling;
        if (answer.classList.contains('hidden')) {
            showAnswer(answer, btn);
        } else {
            hideAnswer(answer, btn);
        }
    });
}


function showAnswer(answer, btn) {
    answer.classList.remove('hidden');
    answer.classList.add('unhidden');
    btn.src = './assets/images/icon-minus.svg';
}

function hideAnswer(answer, btn) {
    answer.classList.remove('unhidden');
    answer.classList.add('hidden');
    btn.src = './assets/images/icon-plus.svg';
}