const smileyButton = document.querySelector("#smileyButton");
const coolButton = document.querySelector("#coolButton");
const shockButton = document.querySelector("#shockButton");

const paraTag = document.createElement('p');
document.body.append(paraTag);

smileyButton.addEventListener ('click' , () => {
    paraTag.innerHTML += "😄😄😄</br>";

});

coolButton.addEventListener ('click' , () => {
    paraTag.innerHTML += "😎😎😎</br>";

});

shockButton.addEventListener ('click' , () => {
    paraTag.innerHTML += "😦😦😦</br>";

});


