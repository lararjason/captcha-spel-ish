var score = 0;
var gameInterval;
var timer;
var secondsLeft = 15;
var gameActive = false;
var canCreateBall = true;

function startGame() {
    if (!gameActive) {
        score = 0;
        gameActive = true;
        createBall();
        timer = setInterval(function () {
            secondsLeft--;
            document.getElementById('timer').textContent = 'Time Left: ' + secondsLeft;
            console.log("Time left: " + secondsLeft + " seconds");

            if (secondsLeft <= 0) {
                clearInterval(gameInterval);
                clearInterval(timer);
                document.getElementById('timer').textContent = 'Time Left: 0' ;
                stop();
                checkIfHuman();
            }
        }, 1000);
    } else {
        alert("Game is already active. Wait for it to finish.");
    }
}

function createBall() {
    if (gameActive) {
        console.log('createBall');
        var target = document.createElement('div');
        target.classList.add('container');
        target.id = 'icon';

        var divsize = (Math.floor(Math.random() * 50) + 25);
        var main = document.querySelector('main');

        var posx = Math.floor(Math.random() * (main.offsetWidth - divsize));
        var posy = Math.floor(Math.random() * (main.offsetHeight - divsize));

        target.style.width = divsize + 'px';
        target.style.height = divsize + 'px';
        target.style.left = posx + 'px';
        target.style.top = posy + 'px';

        target.addEventListener('click', function () {
            if (gameActive) {
                increaseScore();
                main.removeChild(target);
                createBall();
            }
        });

        main.appendChild(target);
    }
}


function increaseScore() {
    score++;
    document.getElementById('score').textContent = 'Score: ' + score;
}


function stop() {
    gameActive = false;
    clearInterval(gameInterval);
    clearInterval(timer);
    alert("Game over! Score: " + score);
    document.querySelector('main').removeChild(document.getElementById('icon'));
}

function checkIfHuman() {
    var maxScore = 25;
    var minScore = 5;
    if (score > maxScore, score < minScore) {
        alert('You are not human, Wee Woo Wee Woo');
        window.location.replace("https://en.wikipedia.org/wiki/Robot");
    }   else 
    {
        alert('You are human, Wee Woo Wee Woo');
        const humanimg = document.createElement('img');
        humanimg.src = 'img/1.png';
        document.getElementById('field').appendChild(humanimg);
        document.getElementById('button').remove();
        document.getElementById('button').remove();
        score = 0;
    }
}

function clickEffect(e){
    var d=document.createElement("div");
    d.className="clickEffect";
    d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
    document.body.appendChild(d);
    d.style.cursor = 'none';
    d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
    }
    document.addEventListener('click',clickEffect);
