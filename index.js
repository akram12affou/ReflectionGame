const pairbutton = document.querySelector('#pair')
const number = document.querySelector('#number')
const score = document.querySelector('#score')
const impairbutton = document.querySelector('#impair')
const TIMING = 2000;
const randomNumber = () => {
    return Math.floor(Math.random()*100)
}
number.innerHTML = randomNumber()
const start = new Date().getTime();
var myTimer = setInterval(() => {
    number.innerHTML = randomNumber()
},TIMING);
const checkingScore = () => {
    number.innerHTML = randomNumber()
    if(score.innerHTML == 10){
        window.alert('your time is ' +((new Date().getTime()-start)/1000).toFixed(2) + ' s')
        score.innerHTML = 0
    }
        clearInterval(myTimer);
        myTimer = setInterval(() => {
            number.innerHTML = randomNumber()
        },TIMING);
}
const clickOnPair = () => {
    number.innerHTML%2 ? null : score.innerHTML++
    checkingScore()
}
const clickOnImpair = () => {
    number.innerHTML%2 ?  score.innerHTML++ : null
    checkingScore()
}
pairbutton.addEventListener("click", clickOnPair);
impairbutton.addEventListener("click", clickOnImpair);