

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let previousVal = "";
let currentOperator="";
let onOff = false;
let decMode = 0;
btnStuff();
function btnStuff(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            switch(e.target.classList[2]){
                case "zero":     
                    if(inputBox.innerText===""){
                    inputBox.innerText="";
                }   else{inputBox.innerText+=0}; 
                displayText();
                break;
                case "AC":      aC(); break;
                case "C":       erase(); break;
                case "equals": break;
                case "plus":  break;
                case "multiply":  break;
                case "decimal": 
                    if(decMode===0){
                        if(inputBox.innerText===""){
                        inputBox.innerText="0.";
                        }   else{inputBox.innerText+="."}; decMode=1;
                    }
                    displayText();
                    break;
                default: 
                inputBox.innerText+=e.target.innerText;
                displayText();
            }
        })
    }
}

function displayText(){
    resultsBox.innerText=inputBox.innerText;
}

function erase(){

    if(inputBox.innerText[length]==="."){
        decMode=0;
    }
    inputBox.innerText= inputBox.innerText.slice(0, -1)
    displayText();
}
function aC(){
    inputBox.innerText=""; 
    resultsBox.innerText="";
    previousVal=0;
    currentOperator = 0;
    decMode=0;
}