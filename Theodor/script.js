document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");
    const captchaContainer = document.getElementById("captcha-container");
    const verifyButton = document.getElementById("verify-button");
    const response = document.getElementById("response");
    const countdown = document.getElementById("countdown");
    const puzzleSize = 4;
    const imageSize = 100;

    let puzzleState = [];
    let canMove = true;
    let shouldDoDvdMove = false;
    let moveSpeed = 1;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createPuzzle() {
        puzzleState = Array.from({length: puzzleSize * puzzleSize}, (_, index) => {
            return index;
        });
        puzzleState[puzzleState.length - 1] = null;
        canMove = true;
        shouldDoDvdMove = false;
        addCustomCss();
        captchaContainer.style.removeProperty("left");
        captchaContainer.style.removeProperty("top");
        captchaContainer.style.margin = "auto";

        shuffleArray(puzzleState);

        updatePuzzle();
        countdownTimer();
    }

    function dvdMove() {
        // Get the screen dimensions
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;


        // Set initial position and speed
        let x = (screenWidth - captchaContainer.clientWidth) / 2;
        let y = 0;
        //let x = parseInt(captchaContainer.style.left.replace(/^\D+/g, ''));
        //let y = parseInt(captchaContainer.style.top.replace(/^\D+/g, ''));

        captchaContainer.style.margin = "0";

        let speedX = 4 * Math.random(); // You can change the speed
        let speedY = Math.random(); // You can change the speed

        // Function to update the position of the reflecting div
        function updatePosition() {

            x += speedX;
            y += speedY;

            // Reflect off the walls
            if (x + captchaContainer.clientWidth > screenWidth || x < 0) {
                speedX = moveSpeed * -Math.sign(speedX);
            }
            if (y + captchaContainer.clientHeight > screenHeight || y < 0) {
                speedY = moveSpeed * -Math.sign(speedY);
            }

            // Update the position
            captchaContainer.style.left = x + 'px';
            captchaContainer.style.top = y + 'px';

            // Repeat the update
            if (shouldDoDvdMove) {
                requestAnimationFrame(updatePosition);
            } else {
                return 1;
            }
        }

        // Start the animation

        updatePosition();

    }

    function countdownTimer() {
        var timeleft = 180;
        var downloadTimer = setInterval(function () {
            document.getElementById("countdown").innerHTML = timeleft + " SECONDS REMAINING";
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                document.getElementById("countdown").innerHTML = "NO MORE TIME LEFT!";
                canMove = false;
                setTimeout(() => {
                    createPuzzle();
                }, 60000);
            } else if (timeleft === 60) {
                shouldDoDvdMove = true;
                moveSpeed = 1;
                dvdMove();
            } else if (timeleft <= 60) {
                moveSpeed = (60 - timeleft) / 5 + 1;
            }


            timeleft -= 1;
        }, 1000);
    }

    function addCustomCss() {
        captchaContainer.style.width = "437px";
        var style = document.createElement("style");
        style.innerHTML = `
        .puzzle-piece {
          background-size: ` + imageSize * puzzleSize + `px ` + imageSize * puzzleSize + `px;
          background-image: url(assets/processed/processed_image.png);
        }
        #puzzle-container {
          grid-template-columns: repeat(${puzzleSize}, ${imageSize}px);
          width: ${imageSize * puzzleSize + 5 * (puzzleSize - 1)}px;
          height: ${imageSize * puzzleSize + 5 * (puzzleSize - 1)}px;
        }
      `;
        document.head.appendChild(style);
    }

    function updatePuzzle() {
        if (!canMove) {
            return false;
        }

        puzzleContainer.innerHTML = "";

        for (let i = 0; i < puzzleState.length; i++) {
            const piece = document.createElement("div");
            piece.className = "puzzle-piece";
            if (puzzleState[i] == null) {
                piece.style.background = 'none';
            }
            const x = (puzzleState[i]) % puzzleSize;
            const y = Math.floor((puzzleState[i]) / puzzleSize);
            piece.style.backgroundPosition = `${x * -imageSize}px ${y * -imageSize}px`;
            puzzleContainer.appendChild(piece);

            piece.addEventListener("click", () => movePiece(i));
        }
        return true;
    }

    function movePiece(index) {
        const pieceValue = puzzleState[index];
        const emptyIndex = puzzleState.indexOf(null);
        const row = Math.floor(index / puzzleSize);
        const emptyRow = Math.floor(emptyIndex / puzzleSize);

        if ((row === emptyRow && Math.abs(index - emptyIndex) === 1) || (Math.abs(row - emptyRow) === 1 && index % puzzleSize === emptyIndex % puzzleSize)) {
            puzzleState[emptyIndex] = pieceValue;
            puzzleState[index] = null;
            updatePuzzle();
        }
    }

    function isSolved() {
        for (let i = 0; i < puzzleState.length; i++) {
            if (puzzleState[i] !== null && puzzleState[i] !== i) {
                return false;
            }
        }
        return true;
    }

    //reloadButton.addEventListener("click", () => {
    //    createPuzzle();
    //});


    verifyButton.addEventListener("click", () => {
        if (isSolved()) {
            response.innerHTML = "You solved the puzzle! Redirecting in 3...";
            setTimeout(() => {
                response.innerHTML = "You solved the puzzle! Redirecting in 2...";
            }, 1000);
            setTimeout(() => {
                response.innerHTML = "You solved the puzzle! Redirecting in 1...";
            }, 2000);
            setTimeout(() => {
                response.innerHTML = "You solved the puzzle! Redirecting in 0...";
                location.assign("https://www.youtube.com/watch?v=RrDt9a0q3P0");
            }, 3000);
        } else {
            response.innerHTML = "Puzzle is not solved yet! Reshuffling...";

            setTimeout(() => {
                response.innerHTML = "";
                let randint, randint2, randi, randj = 0;

                while (randint === randint2 || randi === randj) {
                    randint = Math.floor(Math.random() * puzzleState.length);
                    randint2 = Math.floor(Math.random() * puzzleState.length);
                    randi = puzzleState[randint];
                    randj = puzzleState[randint2];
                    if (randi == null) {
                        randi = 8;
                    }
                    if (randj == null) {
                        randj = 8;
                    }
                }

                [puzzleState[randi], puzzleState[randj]] = [puzzleState[randj], puzzleState[randi]];

                updatePuzzle();
            }, 1000);
        }
    });

    createPuzzle();
});
