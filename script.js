

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let previousVal = "";
let currentOperator="";
let onOff = 0; 
let currentBtn ="";
let decMode = 0;
let arr = [];

window.onload = function(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            if(inputBox.textContent && onOff==1 && e.target.classList[3]==="num"){ // this is the problem with creating operator twice in a row and it clears everything. You should 
                inputBox.textContent="";
                onOff=0;
            }
            switch(e.target.classList[2]){
                case "zero":     
                    if(inputBox.innerText===""){
                    inputBox.innerText="";
                }   else{inputBox.innerText+=0}; 
                break;
                case "AC":      aC(); break;
                case "C":       erase(); break;
                case "equals": equals(); break;
                case "plus": operator("+",e.target); break;
                case "multiply": operator("*",e.target); break;
                case "subt": operator("-",e.target); break;
                case "divide": operator("/",e.target); break;
                case "posNeg": if(inputBox.innerText){inputBox.innerText=parseFloat(inputBox.textContent*-1)}; break;
                case "decimal": 
                    if(decMode===0){
                        if(inputBox.innerText===""){
                        inputBox.innerText="0.";
                        }   else{inputBox.innerText+="."}; decMode=1;
                    }
                break;
                default:
                inputBox.innerText+=e.target.innerText;
            }
        })
    }
}
function equals(){
        switch(currentOperator){
            case "*":inputBox.textContent= previousVal * inputBox.textContent; break;
            case "+": inputBox.textContent= previousVal + parseFloat(inputBox.textContent); break;
            case "-": inputBox.textContent= previousVal - parseFloat(inputBox.textContent); break;
            case "/": inputBox.textContent= previousVal / parseFloat(inputBox.textContent); break;
        }
    previousVal=inputBox.textContent;
    resultsBox.innerText=inputBox.innerText;
}
function operator(input, target){
    
    onOff=1; decMode=0;
    currentOperator=input;
    previousVal=parseFloat(inputBox.innerText);
    console.log("current operator :" + currentOperator);console.log("current button :" + currentBtn)
    arr=[previousVal,currentOperator];
    resultsBox.innerText=arr.join(" ");

}

function erase(){
    let length = inputBox.innerText.length-1;
    if(inputBox.innerText[length]==="."){
        decMode=0;
    }
    inputBox.innerText= inputBox.innerText.slice(0, -1)
    resultsBox.innerText=inputBox.innerText;
 
}

function aC(){
    inputBox.innerText=""; 
    resultsBox.innerText="";
    previousVal=0;
    currentOperator = 0;
    decMode=0;
    onOff=0;
}