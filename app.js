let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const rndmIdx=Math.floor(Math.random()*3);
    return options[rndmIdx];
}
const drawGame=()=>{
    console.log("gameDrawn");
    msg.innerText="Game was drawn.play Again";
    msg.style.backgroundColor="orange";
}
const playGame=(userChoice)=>{
      console.log("userChoice=",userChoice);
      const compChoice=genCompChoice();
      console.log("compChoice=",compChoice);
      if(userChoice===compChoice){
        drawGame();
      }else{
        let userWin =true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true ;
        }
        else  if(userChoice==="Paper"){
            userWin=compChoice==="Scissor"?false:true ;
        }
        else if(userChoice==="Scissor"){
            userWin=compChoice==="Rock"?false:true ;
        }
      showWinner(userWin,userChoice,compChoice);
    }
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win!your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you lose.${compChoice} beats your${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
choices.forEach((choice)=>{
    choice.addEventListener( "click", ()=> {
        const userChoice=choice.getAttribute("Id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})