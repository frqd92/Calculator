

let inputBox = document.getElementById("inputBox");
let allBtns = document.querySelectorAll(".button");
let resultsBox = document.getElementById("resultsBox");
let currentOperator = 0;
let previousVal = "";
btnStuff();

function btnStuff(){
    for(let i=0;i<allBtns.length;i++){
        allBtns[i].addEventListener("click", (e)=>{
            switch(e.target.classList[2]){
                case "zero":                
                    if(inputBox.innerText!==""){
                    inputBox.innerText+=0;
                }; break;
                case "one":  inputBox.innerText+=1; break;
                case "two":  inputBox.innerText+=2; break;
                case "three":  inputBox.innerText+=3; break;
                case "four":  inputBox.innerText+=4; break;
                case "five":  inputBox.innerText+=5; break;
                case "six":  inputBox.innerText+=6; break;
                case "seven":  inputBox.innerText+=7; break;
                case "eight":  inputBox.innerText+=8; break;
                case "nine":  inputBox.innerText+=9; break;
                case "AC":  aC(); break;
                case "equals":
                     equals(previousVal,inputBox.innerText);
                     break;
                case "multiply": 
                currentOperator=3; 
                previousVal= inputBox.innerText;
                inputBox.innerText="";
                break;
            }
        })
    }
}


function equals(firstN,secondN){
    switch(currentOperator){
        case 3: 
        console.log(firstN*secondN);
        inputBox.innerText= firstN*secondN;
        currentOperator=0;
        break;
    }

}


function aC(){
    inputBox.innerText=""; 
    resultsBox.innerText="";
    previousVal=0;
    currentOperator = 0;
    mode = 0;
}