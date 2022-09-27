

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let previousVal = "", currentOperator="", currentBtn ="";
let onOff = 0, decMode = 0;

window.onload = function(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            if(inputBox.textContent && onOff==1 && e.target.classList[3]==="num"){
                inputBox.textContent="";
                onOff=0;
            }
            switch(e.target.classList[2]){
                case "zero":     
                if(currentOperator==="/"){console.log("hello")} //don't divide by 0
                    if(inputBox.innerText===""){
                    inputBox.innerText="";
                }   else{inputBox.innerText+=0}; 
                break;
                case "AC": aC(); break;
                case "C": erase(); break;
                case "equals": equals(); break;
                case "plus": operator("+"); break;
                case "multiply": operator("*"); break;
                case "subt": operator("-"); break;
                case "divide": operator("/"); break;
                case "power": if(inputBox.innerText){operator("^")}; break;
                case "posNeg": if(inputBox.innerText){inputBox.innerText=parseFloat(inputBox.textContent*-1)}; break;
                case "percent": if(inputBox.innerText){inputBox.innerText=parseFloat(inputBox.textContent/100)}; decMode=1; break;
                case "sqroot": if(inputBox.innerText){inputBox.innerText=parseFloat(Math.sqrt(inputBox.textContent))}; upperBox("sqrt"); break;
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
            case "^": inputBox.textContent = previousVal ** parseFloat(inputBox.textContent); break; 
        }
        previousVal=inputBox.textContent;
        resultsBox.innerText=inputBox.innerText;
}
function operator(input){
        onOff=1; decMode=0;
        if(inputBox.textContent){
            currentOperator=input;
            previousVal=parseFloat(inputBox.innerText);
        }
    upperBox();
}
function upperBox(x){
    if(x){resultsBox.innerText=inputBox.innerText;} //for sqrt display
    else{
        if(inputBox.innerText){
            let arr = [];
            arr=[previousVal,currentOperator];
            resultsBox.innerText=arr.join(" ");
        }
    }
}
function erase(){
    if(inputBox.innerText[inputBox.innerText.length-1]==="."){
        decMode=0;
    }
    if(inputBox.innerText===0){
        inputBox.innerText="";
    }
    inputBox.innerText= inputBox.innerText.slice(0, -1)
}
function aC(){
    inputBox.innerText=""; 
    resultsBox.innerText="";
    previousVal="";
    currentOperator = 0;
    decMode=0;
    onOff=0;
}