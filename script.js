

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let previousVal = "";
let currentOperator="";
let onOff = 0; 
let currentBtn ="";
let decMode = 0;
btnStuff();
function btnStuff(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            if(inputBox.textContent && onOff==1){
                inputBox.textContent="";
                onOff=0;
                removeBtnStyle()
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
                case "plus": operator("+",e.target); onOff=1; break;
                case "multiply": operator("*",e.target); onOff=1; break;
                case "subt": operator("-",e.target); onOff=1; break;
                case "divide": operator("/",e.target); onOff=1; break;
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
}
function operator(input, target){
    currentBtn = target.classList;
    currentBtn.add("clickedButton");
    decMode=0;
    previousVal=parseFloat(inputBox.innerText);
    currentOperator=input;

}
function removeBtnStyle(){
    switch(currentOperator){
        default: currentBtn.remove("clickedButton"); 
    }
}


function erase(){
    let length = inputBox.innerText.length
    if(inputBox.innerText[length-1]==="."){
        decMode=0;
    }
    inputBox.innerText= inputBox.innerText.slice(0, -1)
 
}

function aC(){
    inputBox.innerText=""; 
    resultsBox.innerText="";
    previousVal=0;
    currentOperator = 0;
    decMode=0;
}