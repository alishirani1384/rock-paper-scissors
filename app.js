let userScore=0;
let compScore=0;
const userSpan=document.getElementById('user-score')
const compSpan=document.getElementById('comp-score')
const scoreBoard=document.querySelector('score-board')
const result=document.querySelector('.result > p')
const rock=document.getElementById('r')
const paper=document.getElementById('p')
const scissors=document.getElementById('s')
const smallUser="USER".fontsize(3).sub()
const smallcomp="COMP".fontsize(3).sub()


function convert(letter) {
    if (letter==="r") return "Rock";
    if (letter==="p") return "Paper";
    if (letter==="s") return "sisors";
}


function wins(user,computer) {
    userScore++;
    userSpan.innerHTML=userScore
    result.innerHTML=`${convert(user)}${smallUser} beats ${convert(computer)}${smallcomp} you wined!🥳` ;
    document.getElementById(user).classList.add('green-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('green-glow')},2000)
}

function lose(user,computer) {
    compScore++;
    compSpan.innerHTML=compScore
    result.innerHTML=`${convert(computer)}${smallcomp} beats ${convert(user)}${smallUser} you lost...😭`;
    document.getElementById(user).classList.add('red-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('red-glow')},2000)
}

function draw() {
    result.innerHTML="its a draw "  
}

function getComputerChoise() {
    let choises=['r','p','s']
    const randomNumber=Math.floor(Math.random()*3)
    return choises[randomNumber]
}

function main() {
    rock.addEventListener('click',()=>game("r"))
    paper.addEventListener('click',()=>game("p"))
    scissors.addEventListener('click',()=>game("s")) 
}

function game(userChoise) {
    const computerChoise=getComputerChoise()
    switch(userChoise+computerChoise){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoise , computerChoise)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoise ,computerChoise)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoise ,computerChoise)
            break;
    } 
}
main()
