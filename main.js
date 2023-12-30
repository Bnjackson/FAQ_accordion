const questions = document.querySelectorAll('.questions');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', (event) => {
        const answer = questions[i].nextElementSibling;
        if (answer.classList.contains('hidden')) {
            showAnswer(answer);
        } else {
            hideAnswer(answer);
        }
    });
}


function showAnswer(answer) {
    answer.classList.remove('hidden');
    answer.classList.add('unhidden');
    console.log(answer);
}

function hideAnswer(answer) {
    answer.classList.remove('unhidden');
    answer.classList.add('hidden');
    console.log(answer);
}