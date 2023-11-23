document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.answer');
    const captchaImage = document.getElementById('captchaImage');
    const infoText = document.getElementById('info');
    
    let correctAnswers = 0;
    let currentQuestion = 0;


    fetch('questions.json')
        .then(response => response.json())
        .then(questions => {
            const questionKeys = Object.keys(questions);
            const shuffledKeys = shuffleArray(questionKeys);

            loadQuestion(questions, shuffledKeys, currentQuestion);
            
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    const currentQuestionData = questions[shuffledKeys[currentQuestion]];
                    if (button.textContent === currentQuestionData.Correct) {
                        correctAnswers++;
                        if (correctAnswers === 3) {
                            infoText.textContent = "Du har klarat Captchan!";
                            setTimeout(() => {
                                window.location.href = "klarat.html";
                            }, 4000);
                        } else {
                            currentQuestion++;
                            if (currentQuestion < shuffledKeys.length) {
                                loadQuestion(questions, shuffledKeys, currentQuestion);
                            }
                        }
                    } else {
                        infoText.textContent = "Fel svar. Börjar om...";
                        setTimeout(() => {
                            location.reload();
                        }, 2000);
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    function loadQuestion(questions, keys, questionIndex) {
        const currentQuestionData = questions[keys[questionIndex]];
        captchaImage.src = `img/${currentQuestionData.bild1}`;
        const shuffledAnswers = shuffleArray(currentQuestionData.svar);
        buttons.forEach((button, index) => {
            button.textContent = shuffledAnswers[index];
        });
        infoText.textContent = `Vilket år är detta? (Fråga ${questionIndex + 1})`;
    }

    function shuffleArray(array) {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
});
