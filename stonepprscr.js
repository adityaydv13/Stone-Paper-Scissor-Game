let choices = document.querySelectorAll(".choice");
 let msg = document.querySelector("#msg");
 let compscore=document.querySelector("#comp-score-board")
 let userscore=document.querySelector("#user-score-board")
let compch=0;
let userwin=0;
let count=0;
let c=0


function showwinner(userwin){
    if(userwin===true){
    msg.innerText="You Won"
    msg.style.backgroundColor="green"
    count++;
    userscore.innerText=count;
    
    }
else{
 msg.innerText="You Lost"
 msg.style.backgroundColor="red"
 c++;
 compscore.innerText=c;
}
}
const drawgame=()=>{
   
    msg.innerHTML="Match Draw";
}

const gencompch=()=>{
    option=["stone","paper","scissor"]
    let randomno=Math.floor(Math.random()*3)
    return option[randomno];
}

let playgame=(userch)=>{
    console.log("userch:",userch)
    //generate comp choice
    const compch=gencompch();
    console.log("comp ch:",compch);

    if(userch===compch){
        drawgame();
        
    }
    
     else {
     if(userch==="stone"&&compch==="scissor"||userch==="paper"&&compch==="stone"||userch==="scissor"&&compch==="paper")
       {  
        userwin=true;
        }
           else if(userch==="scissor"&&compch==="stone"||userch==="stone"&&compch==="paper"||userch==="paper"&&compch==="scissor")
          {
            userwin=false;
            }
            else
            userwin=false;
            
        }
     showwinner(userwin);
}
 choices.forEach((ele) => {
    ele.addEventListener("click",()=>{
         const userch = ele.getAttribute("id");
        playgame(userch);
    });
});
  