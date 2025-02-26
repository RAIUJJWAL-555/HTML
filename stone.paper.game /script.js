let cscore = 0;
let yscore = 0;

const container = document.querySelectorAll(".choice");
const final = document.querySelector(".final");
const yscorepara = document.querySelector("#yscore");
const cscorepara = document.querySelector("#cscore");

const genCompChoice = ()=>{
    const option = ["rock","paper","scessior"];
    let optionIDX = Math.floor(Math.random()*3);
    return option[optionIDX];
}



const gamedraw = () => {
    console.log ("MATCH WAS DRAWN");
    final.innerText ="GAME DRAW ! PLAY AGAIN";
    final.style.backgroundColor ="rgb(167,167,13)";
}




const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        yscore++;
        yscorepara.innerText = yscore;
        console.log("YOU WON !");
        final.innerText =`YOU WON! Your ${userChoice} beats ${compChoice}`;
        final.style.backgroundColor ="green";
    }else{
        cscore++;
        cscorepara.innerText = cscore;
        console.log("YOU LOSE !");
        final.innerText =`YOU LOSE! ${compChoice} beats Your ${userChoice}`;
        final.style.backgroundColor ="red";
    }
}



const playgame = (userChoice) =>{
    console.log("userChoice is =",userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("compChoice is =",compChoice);

    if(userChoice ===compChoice){
        gamedraw();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice === "scessior" ? false : true;
        }else{
            userWin = compChoice=== "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}



container.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("ID");
    // console.log(userChoice)    ;
    playgame(userChoice);
    });
});

