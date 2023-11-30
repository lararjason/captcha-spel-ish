const slay = document.querySelector('#the');
const what = ["nun", "stalin", "priest"]; // Correct answer is "stalin"
const rand = Math.floor(Math.random() * 3);
slay.innerText = what[rand];

function checkAnswer(choice) {
    if (choice === what[rand]) {
        alert('Indeed, I have vanquished the right soul, with calmness');
    } else {
        alert('ive slayned the wrong person');
    }
}

document.getElementById("sta").onclick = function () {
    checkAnswer('stalin');
};