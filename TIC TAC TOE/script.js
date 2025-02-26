let boxes = document.querySelectorAll(".box");
let reset = document.querySelectorAll(".reset");
let newGame = document.querySelectorAll(".newGame");
let msg = document.querySelectorAll("#msg");
let new_btn = document.querySelectorAll(".new_btn");


var turnO = true;
const winPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO =false;
        }else{
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    }
    );
});
const showWinner = (Winner)=>{
    msg.innerText = `Cogratulation, WInner is ${Winner}`;
    newGame.classList.remove("hide");
}
const checkWinner = () => {
    for (let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
    if( pos1Val != "" && pos2Val != "" && pos3Val !=""){
        if( pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("WINNER",pos1Val);
            showWinner(pos1Val);
        };
    };
};
};