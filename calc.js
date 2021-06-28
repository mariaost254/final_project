const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
const nextpage = document.querySelector(".next");

let first = "";
let second = "";
let prevSecond = "";
let res="";
let isFirstDone = false;
let isSecondDone = false;
let action;
let prevRes = "";

let arrRes = [];


 function getResultOP (num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    //keep results as string in an array //+ ? with time stamp
     switch(action){
         case '+': 
         {
            arrRes.push(num1.toString() + ' + ' + num2.toString()+ ' = ' + (num1 + num2).toString());
            return (num1 + num2).toString();
         }
         case '-': 
         {
            arrRes.push(num1.toString() + ' - ' + num2.toString()+ ' = ' + (num1 - num2).toString());
            return (num1 - num2).toString();
         }
         case '*': 
         {
            arrRes.push(num1.toString() + ' * ' + num2.toString()+ ' = ' + (num1 * num2).toString());
            return (num1 * num2).toString();
         }
         case '/': 
         {
            arrRes.push(num1.toString() + ' / ' + num2.toString()+ ' = ' + (num1 / num2).toString());
            return (num1 / num2).toString();
         }
         default: return;
     }
}

//take the array to the local storage -> will be used in next page 
nextpage.addEventListener("click", e =>{
    localStorage.setItem('arrRes', JSON.stringify(arrRes));
    window.location.href='final.html';
})


for ( let operation of operations){
  operation.addEventListener("click", e => {
    action = e.target.innerText;
    //keep on calculating previouse results with another number
    if (prevRes){ 
        isSecondDone = false;
        second = "";
        isFirstDone = true;
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
            if(prevRes != ""){
              this.resetValues();
            }
            first = first + input;
            result.innerText = first;
        } else{
            second = second + input;
            result.innerText = second;
            isSecondDone = true;
        }

      });
  }


equal.addEventListener("click", () => {
  if (isFirstDone && isSecondDone && prevRes=="" ) { // calc result + in a case of click on number (without operator first) reset all
    res = getResultOP(first,second);
    result.innerText = res;
    prevRes = res; 
    isFirstDone = false;
  }else if (isSecondDone && prevRes){ //keep spamming the '=' sign -> will keep calculating 
    res = getResultOP(prevRes,second); 
    result.innerText = res;
    prevRes = res;
    isFirstDone = false;
  }


});

//reset methods

function resetValues(){
    first = "";
    second = "";
    res= "";
    prevRes = "";
    isFirstDone = false;
    isSecondDone = false;
    result.innerText = "0";
    action = undefined;
}

// Reset all values
reset.addEventListener("click", () => {
    this.resetValues();
});