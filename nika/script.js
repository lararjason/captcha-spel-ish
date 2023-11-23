
function checkAnswer(selectedAnswer) {
  // Correct answer
  var correctAnswer = 'Paris';

  // Check if the selected answer is correct
  if (selectedAnswer === correctAnswer) {
    document.getElementById('result').innerHTML = 'Correct!';
  } else {
    document.getElementById('result').innerHTML = 'Wrong! The correct answer is ' + correctAnswer;
  }
}
