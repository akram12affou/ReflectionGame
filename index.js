let i =0;
let score = 0
const pairbutton = document.getElementById('pair')
const impairbutton = document.getElementById('impair')
const number = +document.getElementsByClassName('number')[0].innerHTML
const arr = Array.from(Array(10)).map(() => {
    return Math.floor(Math.random() * 100)
})
function pOrI(e){
    if(number%2 == 0 && e=='pair' ){
        score++;
    }
    if(e=='impair' && number%2 !== 0){
        score++;
    }
    impairbutton.disabled = true
    pairbutton.disabled = true
    }

setInterval(
    function () {
        if(i==10){
            document.getElementsByTagName('body')[0].innerHTML = `<h1>Game Over</h1> your score ${score}/10 `
        }else{
         document.getElementsByClassName('score')[0].innerHTML = score
        document.getElementsByClassName('number')[0].innerHTML = arr[i++]
        impairbutton.disabled = false
        pairbutton.disabled = false
    }
},500);
