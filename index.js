const pairbutton = document.querySelector('#pair')
const number = document.querySelector('#number')
const score = document.querySelector('#score')
const impairbutton = document.querySelector('#impair')
const randomNumber = () => {
    return Math.floor(Math.random()*100)
}
number.innerHTML = randomNumber()
const start = new Date().getTime();
const clickOnPair = () => {
    number.innerHTML%2 ? null : score.innerHTML++
    number.innerHTML = randomNumber()
    if(score.innerHTML == 10){
        window.alert('your time is ' +(new Date().getTime()-start)/1000 + ' s')
        score.innerHTML = 0
        clearInterval(myTimer);
        myTimer = setInterval(() => {
            number.innerHTML = randomNumber()
        },3000);
    }
}
const clickOnImpair = () => {
    number.innerHTML%2 ?  score.innerHTML++ : null
    number.innerHTML = randomNumber()
    if(score.innerHTML == 10){
        window.alert('Game Over')
        score.innerHTML = 0
    }
    clearInterval(myTimer);
    myTimer = setInterval(() => {
        number.innerHTML = randomNumber()
    },3000);
}
 var myTimer = setInterval(() => {
    number.innerHTML = randomNumber()
},3000);

pairbutton.addEventListener("click", clickOnPair);
impairbutton.addEventListener("click", clickOnImpair);