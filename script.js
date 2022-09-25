

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let currentOperator = 0;
let previousVal = "";
let decMode = 0;
btnStuff();
function btnStuff(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            switch(e.target.classList[2]){
                case "zero":     
                    if(inputBox.innerText===""){
                    inputBox.innerText="";
                }   else{inputBox.innerText+=0}; break;
                case "one":     inputBox.innerText+=1; break;
                case "two":     inputBox.innerText+=2; break;
                case "three":   inputBox.innerText+=3; break;
                case "four":    inputBox.innerText+=4; break;
                case "five":    inputBox.innerText+=5; break;
                case "six":     inputBox.innerText+=6; break;
                case "seven":   inputBox.innerText+=7; break;
                case "eight":   inputBox.innerText+=8; break;
                case "nine":    inputBox.innerText+=9; break;
                case "AC":      aC(); break;
                case "C":       erase(); break;
                case "equals": break;
                case "multiply": break;
                case "decimal": 
                    if(decMode===0){
                        if(inputBox.innerText===""){
                            inputBox.innerText="0.";
                        }   else{inputBox.innerText+="."}; decMode=1;
                    }
                    else{

                    }
                    break;
            }
        })
    }
}


function erase(){
    let length = inputBox.innerText.length -1;
    if(inputBox.innerText[length]==="."){
        decMode=0;
    }
    inputBox.innerText= inputBox.innerText.slice(0, length)
    
}
function aC(){
    inputBox.innerText=""; 
    previousVal=0;
    currentOperator = 0;
    decMode=0;
}