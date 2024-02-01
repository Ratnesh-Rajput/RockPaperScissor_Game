const choiceDisplay= document.getElementById("choice");
const comp= document.getElementById("comp");
const result= document.getElementById("result");
let choice;
const rock=document.getElementById("Rock");
const paper=document.getElementById("Paper");
const scissor=document.getElementById("Scissor");

 rock.addEventListener('click',choiceDisplayer);
 scissor.addEventListener('click',choiceDisplayer);
 paper.addEventListener('click',choiceDisplayer);

    function choiceDisplayer(e){
        choiceDisplay.innerHTML=e.target.id;
        RPSresult();
    }

    function RPSresult(){
     let c= Math.ceil((Math.random())*3);
     if(c==0){c=1;}
     if(c==1){c="rock";}
     else if(c==2){c="paper";}
     else if(c==3){c="scissor"}
     comp.innerHTML=c;
     let userchoice= choiceDisplay.innerHTML;
     
     if (c==="rock"){
        if(userchoice==="Rock"){result.innerHTML="It's a Tie";}
        else if(userchoice==="Paper"){result.innerHTML="Victory to the Hooman!!!"}
        else if(userchoice==="Scissor"){result.innerHTML="Terminator Wins!!!"}
    }
    if (c==="paper"){
        if(userchoice==="Paper"){result.innerHTML="It's a Tie";}
        else if(userchoice==="Scissor"){result.innerHTML="Victory to the Hooman!!!"}
        else if(userchoice==="Rock"){result.innerHTML="Terminator Wins!!!"}
    }
    if (c==="scissor"){
        if(userchoice==="Scissor"){result.innerHTML="It's a Tie";}
        else if(userchoice==="Rock"){result.innerHTML="Victory to the Hooman!!!"}
        else if(userchoice==="Paper"){result.innerHTML="Terminator Wins!!!"}
    }

    }