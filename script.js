

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let previousVal = "", currentOperator="", currentBtn ="";
let onOff = 0, decMode = 0;

window.onload = function(){
    keyboard();
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", allButtons)
            function allButtons(e){
                if(inputBox.textContent && onOff==1 && e.target.classList[3]==="num"){
                    inputBox.textContent="";
                    onOff=0;
                }
                switch(e.target.classList[2]){
                    case "zero":     
                    if(currentOperator==="/"){inferno(); break;} //don't divide by 0
                        if(inputBox.innerText==="" && onOff=== 0){
                        inputBox.innerText=""; decMode=0;
                    }   else{inputBox.innerText+=0}; 
                    break;
                    case "AC": aC(); break;
                    case "C": erase(); break;
                    case "equals":  equals(); break;
                    case "plus": operator("+"); break;
                    case "multiply": operator("*"); break;
                    case "subt": operator("-"); break;
                    case "divide": operator("/"); break;
                    case "power": if(inputBox.innerText){operator("^")}; break;
                    case "posNeg": if(inputBox.innerText){inputBox.innerText=parseFloat(inputBox.textContent*-1)}; break;
                    case "percent": if(inputBox.innerText){inputBox.innerText=parseFloat(inputBox.textContent/100)}; break;
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
            }
    }
}

function keyboard(){
    document.addEventListener("keydown", e=>{
        let regex = (/^[1-9]+$/.test(e.key));
        if(inputBox.textContent && onOff==1 && regex){
            inputBox.textContent="";
            onOff=0;
        }
        if(regex){
          inputBox.innerText+=e.key;
        }
        switch(e.key){
            case "0": if(currentOperator==="/"){inferno(); break;}                    
                if(inputBox.innerText===""){
                inputBox.innerText="";
            }   else{inputBox.innerText+=0}; break;
            case "+": operator("+"); break;
            case "*": operator("*"); break;
            case "/": operator("/"); break;
            case "-": operator("-"); break;
            case  ".":     
                if(decMode===0){
                if(inputBox.innerText===""){
                inputBox.innerText="0.";
                }   else{inputBox.innerText+="."}; decMode=1; break;
            } break;
            case "Enter": equals(); break;
            case "Backspace": erase(); break;
            case "Escape": aC(); break;
        }
    })
}

function equals(){
    decMode=0;
    if(onOff===0){
        switch(currentOperator){
            case "*":inputBox.textContent= parseFloat(previousVal * inputBox.textContent); break;
            case "+": inputBox.textContent= parseFloat(previousVal) + parseFloat(inputBox.textContent); break;
            case "-": inputBox.textContent= previousVal - parseFloat(inputBox.textContent); break;
            case "/": inputBox.textContent= previousVal / parseFloat(inputBox.textContent); break;
            case "^": inputBox.textContent = previousVal ** parseFloat(inputBox.textContent); break; 
        }
        onOff=1;
    }
        previousVal=inputBox.textContent;
        resultsBox.innerText=inputBox.innerText;
        currentOperator="";
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
    if(x){resultsBox.innerText=inputBox.innerText;}
    else{
        if(inputBox.innerText){
            let arr = [];
            arr=[previousVal,currentOperator];
            resultsBox.innerText=arr.join(" ");
        }
    }
}
function erase(){
    if(inputBox.innerText[inputBox.innerText.length-1]==="."){decMode=0;}
    if(inputBox.innerText===0){inputBox.innerText="";}
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

function inferno(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].classList.remove("button");
        allBtns[i].classList.remove("num");  
    }
    let incr= 0;
    function setDelay(){
        allBtns[incr].classList.add("inferno");
        incr++;
        if(incr<allBtns.length){
            setTimeout(setDelay,100);
        }
    }
    setDelay();
    let text = document.querySelector(".logoText");
    let weirdChar = ["#","$", "&","ج", "ن", "艾", "れ", "勒", "щ", "и","0","1", "ª", "|", "~", "ç" ]
    setTimeout(()=>{text.innerText=""}, 2700);
    setTimeout(()=>{
        let y=0;
        function setAnotherDelay(){
            let ran = Math.floor(Math.random()*16);
            text.innerText+=weirdChar[ran]
            inputBox.innerText+=weirdChar[ran];
            resultsBox.innerText+=weirdChar[ran];
            y++;
            if(y<130){
                setTimeout(setAnotherDelay,20)
            }
        }
        setAnotherDelay()
    }, 3000);
    let mainContainer = document.querySelector("#main-container");  
    let body = document.querySelector("body");
    let display = document.querySelector(".display");
    setTimeout(()=>{
      mainContainer.style.background="none";
      mainContainer.style.boxShadow="none";
      body.style.background="white";
      display.style.background="none"
    },3500)
    setTimeout(()=>{
        display.classList.add("inferno")
    },4000)
    setTimeout(()=>{body.style.background="black";},5500)
    setTimeout(()=>{
        text.innerText=" ";
        body.style.background="black";
        text.innerText="Goodnight";
        text.style.color="white"
    },6000)
    setTimeout(()=>{
        text.style.display="none";
    },7000)
}