let gamsq=[];
let usrsq=[];


let btns=["y","r","p","g"];
let started=false;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if (started==false){
        console.log("game started");
        started=true;
    levelup();
    console.log(gamsq);
    }
});

function  btnflash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },200); 
}

function levelup(){
usrsq = [];
level++;
 h4.innerText=`level ${level}`;
 let randIdx=Math.floor(Math.random()*4);
 let randcol=btns[randIdx];
 let randBtn=document.querySelector(`.${randcol}`);
gamsq.push(randcol);
console.log(gamsq);
 btnflash(randBtn);
} 

 function checkAns(){
    let idx=usrsq.length -1;
    if(usrsq[idx]===gamsq[idx]){
        if(usrsq.length === gamsq.length){
            setTimeout(levelup, 1000);
             

        }
      
       
    }
    else{
        h4.innerText=`game over! press any key to start..`
        started = false;
        level = 0;
        gamsq = [];
        usrsq = [];
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        },200);
    }
}
 


function btnPress(){
let btn=this;
btnflash(btn); 
usrcolor=btn.getAttribute("id");
usrsq.push(usrcolor);
checkAns();
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}