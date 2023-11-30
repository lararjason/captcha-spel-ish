var t1 = document.getElementById('text1')
var t2 = document.getElementById('text2')
var pirat = document.getElementById('pirate');
const meow = [t1, t2];
const rand = Math.round(Math.random());

if(rand == 0){
    t1.style.display = 'inline';
    t2.style.display = 'none';
}
if(rand == 1){
    t1.style.display = 'none';
    t2.style.display = 'inline';
}
function close() {
    const rand = Math.round(Math.random());
}
function answer() {
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;

    if (input1Value.toLowerCase() === "tales" || input2Value.toLowerCase() === 'timbers') {
        alert('Captcha passed! You are a human.');
        document.getElementById('dialog').close();
    } else {
        alert('Captcha failed! Try again, ye scurvy dog.');
    }
}