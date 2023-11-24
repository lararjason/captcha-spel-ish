/*
Hello whoever reads this

This is a simple captcha test that builds
on the principles of reverse psycology;
That you have to be wrong to be right.

Given that capthca busting programs are
made to always be right, their answers will be wrong
in this test, making it compleatly turing proof(Distinguish between humand and machine)



*/




//###(VARS)################################################################
const collordivs = document.querySelectorAll("div.color")
const result = document.getElementById("Result")
let memory = 0;
var values = ["0", "0", "0"] //rgb format
var rgb1 = "rgb(";
var rgb2 = "rgb(";
var difrence = 1;
var audio = new Audio('onlymp3.to - xQc Clap-rVaclqTtRog-192k-1700741326.mp3'); //audio
//###(FUNCTIONS)###########################################################
function getRandomInt(max) 
  {
    return Math.floor(Math.random() * max); //Random function for later use
  }

function generatecollor()
{
    rgb1 = "rgb("; //reset the values of rgb1 and rgb2
    rgb2 = "rgb(";
    for(let i = 0; i < values.length; i++) //Sett rgb1
    {
        values[i] = getRandomInt(255);
        rgb1 = rgb1 + values[i];
        if(i < values.length - 1)
        {
            rgb1 = rgb1 + ","
        }
    }
    console.log(rgb1)
    var change_no = getRandomInt(2); //Get one of the rgb slots
    var change_val = values[change_no];
    switch (change_val) //Check so that we don't generate errors
    {
        case change_val>difrence:
            change_charge = getRandomInt(difrence) //if if is 255 och lower than the required diference, then change apropreatly
            change_val = change_val + change_charge;
            break;
        case 255:
            change_charge = getRandomInt(difrence)
            change_val = change_val - change_charge;
            break;
        default:
            var change_charge = getRandomInt(difrence) //else, do +1, -1 diference
            switch (change_charge)
            {
                case 0:
                    change_val = change_val + difrence;
                    break;
                case 1:
                    change_val = change_val - difrence;
                    break;   
            }
            break;
    }

    values[change_no] = change_val; //insert the values
    rgb2 = rgb2 + values[0] + "," + values[1] + "," + values[2] + ")"; //Add these to rgb two
    console.log(rgb2);
}
function settelementcollor()
{
    generatecollor(); //generate colors
    for (let i = 0; i < collordivs.length; i++) {
        collordivs[i].style.backgroundColor = rgb1; //set all collors
        console.log(collordivs[i].style.backgroundColor);
        collordivs[i].onclick = function() // correct answere
        {
            result.innerHTML = "Congratulations!!! You picked wrong :)";
            settelementcollor();
            window.open('https://www.youtube.com/watch?v=sO6hyv921qU');
        };
    }
    memory = getRandomInt(4); //pick a random div
    collordivs[memory].style.backgroundColor = rgb2; //set to other collor
    collordivs[memory].onclick = function() // incorect answer
    {
        result.innerHTML = "You picked right! maby you can do this one to? Just to be shure ;)";
        audio.play();
        settelementcollor();
    };
}
//###(Init)#################################################################
settelementcollor();

/*
generate 1 rgb collor
generate another that is +1 or -1 with one value for one rgb



*/