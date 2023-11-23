let img = document.getElementById('bigImg');
totalImages = 50;
currentImg = 1;

window.addEventListener('load', function() { 
    showImg();

    // samla ihop alla tumnaglar, loopa igenom och skapa event-listeners
        // när man klickar på en bild, ska man få dens src, & uppdatera den stora bildens src
            // kör console.log(this) -> this.src 
            // replace ->)/thumbs/thumb-3.jpg -> korrekt url för stor 
            
 });

function showImg() {
    img.src = 'Bilder/bilder.zip (Unzipped Files)-20230824T131717Z-001/bilder.zip (Unzipped Files)/' + currentImg + '.jpg';
}