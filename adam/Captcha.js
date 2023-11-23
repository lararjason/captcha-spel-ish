 // Replace 'path/to/your/image.jpg' with the actual path to your image
 var imagePath = 'Images/Beretta';
 var correctAnswer = 'Image3'; // Change to the correct answer
const images = ["Beretta.png", "Deagle.png", "Glock-17.png", "Magnum.png"]
 // Set the image source


 function checkGuess(guess) {
   if (guess === correctAnswer) {
     document.getElementById('imageBox').style.display = 'none';
     e
   } else {
     alert('Incorrect guess. Try again!');
   }
 }
function getRandomInt(max){
  const newnr = Math.floor(Math.random()*(max));
  return newnr
}

var man = ("pistol");
console.log(man)
 var number = (getRandomInt(images.length));
console.log(images[number] + " ");

 console.log(images[length])
 const mainImage = document.getElementById("mainImage")
 console.log(mainImage)
 mainImage.src = "Images/" + images[number];

if (number === 0) {
  
correctAnswer = 'Beretta'
}

if (number === 1) {
correctAnswer = 'Desert Eagle'
}

if (number === 2) {
  correctAnswer = 'Glock-17'
  }

if (number === 3) {
    correctAnswer = 'Magnum'
    }
