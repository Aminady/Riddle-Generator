const riddle = document.querySelector('.riddle');
const answer = document.querySelector('.answer');
const answerBtn = document.querySelector('.show-answer');
const newRiddle = document.querySelector('.new-riddle');

function fetchAPI() { 
    fetch('https://riddles-api.vercel.app/random', {mode : "cors"})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        riddle.textContent = response.riddle;
        answerBtn.addEventListener('click', () => {
        answer.textContent = response.answer;
        })
    });
}

fetchAPI()
