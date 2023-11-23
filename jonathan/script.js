
const essay=document.getElementById("essay")
var test = ""
essay.innerHTML += test
essay.innerHTML += "Write here, just start typing"
var counter = 0;
var newHtml = "";


const dataLength = data.length;





window.addEventListener("keydown",function(event){
    event.preventDefault();
    if(event.repeat == false){
        console.log(counter + " / " + dataLength)
        if(counter == dataLength-1){
            console.log("nu!")
            newHtml = ""
            essay.innerHTML = newHtml
            counter = 0;
        }
        if(data[counter]== "<"){
            let html = true 
            newHtml += data[counter]
            essay.innerHTML = newHtml

            counter++
            while(html == true){
                if(data[counter]== ">" && data[counter+1] != "<"){
                    html = false
                }
                
                newHtml += data[counter]
                essay.innerHTML = newHtml      
                counter++
                if(counter == dataLength-1){
                    console.log("nu!")
                    newHtml = ""
                    essay.innerHTML = newHtml
                    counter = 0;
                }
                console.log(data[counter])
                console.log(counter + " / " + dataLength)

            }
        }
        
        if(counter == dataLength-1){
            console.log("nu!")
            newHtml = ""
            essay.innerHTML = newHtml
            counter = 0;
        }
        newHtml += data[counter]
        essay.innerHTML = newHtml
        counter++
    }
})
/*
document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault();
    if(counter == dataLength+1){
        console.log("you made it")
    }
})*/