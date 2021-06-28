const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");

let first = "";
let second = "";
let prevSecond = "";
let res="";
let isFirstDone = false;
let isSecondDone = false;
let action;
let isFirstClick = true;
let prevRes = 0;


 function getResultOP (num1, num2){
     switch(action){
         case '+': return num1 + num2;
         case '-': return num1 + num2;
         case '*': return num1 * num2;
         case '/': return num1 / num2;
         default: return;
     }
}


for ( let operation of operations){
  operation.addEventListener("click", e => {
    action = e.target.innerText;
    //keep on calculating previouse results with another number
    if (prevRes){ 
        isSecondDone = false;
        second = "";
    }

    if(isSecondDone && prevRes){
        this.getResultOP(prevRes,second);
        result.innerText = res;
        prevRes = res;
    }

    if ( !isFirstDone ) { //go to second number
        isFirstDone = true;
      }

});
}


  //Numeric buttons listener to get user input
  //After operation button was clicked -> handle second number
  for ( let number of numbers){
      number.addEventListener("click", (e) =>{

        let input = e.target.innerText;
        if(!isFirstDone){
            if(isFirstClick ){
              this.resetValues();
              isFirstClick = false;
            }
            first = first + input;
            result.innerText = first;
            first = parseInt(first);
        } else{
            second = second + input;
            result.innerText = second;
            second = parseInt(second);
            isSecondDone = true;
        }

      });
  }


equal.addEventListener("click", () => {

  if (isFirstDone && isSecondDone && !isFirstClick) { // calc result + in a case of click on number (without operator first) reset all
    res = getResultOP(first,second);
    result.innerText = res;
    prevRes = res;
    isFirstClick = true;
  }else if (isSecondDone && prevRes){ //keep spamming the '=' sign -> will keep calculating 
    res = getResultOP(prevRes,second); 
    result.innerText = res;
    prevRes = res;
  }

});

//reset methods

function resetValues(){
    first = "";
    second = "";
    res= "";
    isFirstDone = false;
    isSecondDone = false;
    result.innerText = "0";
    action = undefined;
}

// Reset all values
reset.addEventListener("click", () => {
    this.resetValues();
});
