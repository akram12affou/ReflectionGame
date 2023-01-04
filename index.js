let i =0;
const arr = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
]
let score = 0
function pOrI(e){
    if(+document.getElementsByClassName('number')[0].innerHTML%2 == 0 && e=='pair' ){
        score++;
    }
    if(e=='impair' && +document.getElementsByClassName('number')[0].innerHTML%2 !== 0){
        score++;
    }

    }

setInterval(
    function () {
        if(i==10){
            document.getElementsByTagName('body')[0].innerHTML = `<h1>Game Over</h1> your score ${score}/10 `
        }else{

        
         document.getElementsByClassName('score')[0].innerHTML = score
        document.getElementsByClassName('number')[0].innerHTML = arr[i++]
    }
},500);