document.addEventListener("click", stupidImage);

function stupidImage(event) {
	let x = event.clientX;
	let y = event.clientY;

	const amogusImg = document.createElement("img");

	if (Math.floor(Math.random() * 10) == 1) {
		amogusImg.src = "img/darock.png";
			amogusImg.width = 200;
			amogusImg.height = 200;
	}
	else { amogusImg.src = "img/amogus.png";
			amogusImg.width = 75;
			amogusImg.height = 40;
		}

	amogusImg.classList.add("fade-out");
	amogusImg.style.marginLeft = `${x - amogusImg.width/2}px`;
	amogusImg.style.marginTop = `${y - amogusImg.height/2}px`;

	let boom = new Audio("boom.mp3");

	document.body.appendChild(amogusImg);
	setTimeout(function() {amogusImg.remove();}, 490);
	boom.play();	
}
