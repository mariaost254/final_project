const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const equal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");
const nextpage = document.querySelector(".next");

let first = "";
let second = "";
let res="";
let isFirstDone = false;
let isSecondDone = false;
let action;
let prevRes = "";
let isFirstChar = true;
let arrRes = [];
let tempAction = false;

//check page load if url contains other params n1 n2 options
//if true open log in pop up and show result 

    //calc result and send it back to result mathod + save equation to an array (transfer to local storage)
    //keep results as string in an array //+ ? with time stamp
 function getResultOP (num1, num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);

     switch(action){
         case '+': 
         {
            if (tempAction){
                let temp = num2;
                num2 = (num1 * num2) / 100;
                arrRes.push(num1.toString() + ' + ' + temp.toString()+ '% = ' + (num1 + num2).toString());
            }else{
                arrRes.push(num1.toString() + ' + ' + num2.toString()+ ' = ' + (num1 + num2).toString());
            }
            return (num1 + num2).toString();
         }
         case '-': 
         {
            if (tempAction){
                let temp = num2;
                num2 = (num1 * num2) / 100;
                arrRes.push(num1.toString() + ' - ' + temp.toString()+ '% = ' + (num1 - num2).toString());
            }else{
                arrRes.push(num1.toString() + ' - ' + num2.toString()+ ' = ' + (num1 - num2).toString());
            }
            return (num1 - num2).toString();
         }
         case '*': 
         {
            if (tempAction){
                let temp = num2;  
                num2 = num2 /100;
                arrRes.push(num1.toString() + ' * ' + temp.toString()+ '% = ' + (num1 * num2).toString());
            }else{
                arrRes.push(num1.toString() + ' * ' + num2.toString()+ ' = ' + (num1 * num2).toString());
            }
            return (num1 * num2).toString();
         }
         case '/': 
         {
            if (tempAction){
                let temp = num2;
                num2 = num2 /100;
                arrRes.push(num1.toString() + ' / ' + temp.toString()+ '% = ' + (num1 / num2).toString());
            }else{
                arrRes.push(num1.toString() + ' / ' + num2.toString()+ ' = ' + (num1 / num2).toString());
            }
            return (num1 / num2).toString();
         }
         case '^': 
         {
            arrRes.push(num1.toString() + ' ^ ' + num2.toString()+ ' = ' + (num1 ** num2).toString());
            return (num1 ** num2).toString();
         }
         case '%': 
         {
            arrRes.push(num1.toString() + ' % ' + num2.toString()+ ' = ' + ((num1 * num2) / 100).toString());
            return ((num1 * num2) / 100).toString();
         }
         default: return;
     }
}

//take the array to the local storage -> will be used in next page 
nextpage.addEventListener("click", e =>{
    if(localStorage.getItem('arrRes') != null){
        retrievedObject = localStorage.getItem('arrRes');
        retrievedObject=JSON.parse(retrievedObject);
        arrRes.push.apply(arrRes,retrievedObject);
        arrRes.reverse();
    }
    localStorage.setItem('arrRes', JSON.stringify(arrRes));
    window.location.href='final.html';
})

//check which operation will be used listener
for ( let operation of operations){
  operation.addEventListener("click", e => {
    if(action && e.target.innerText== '%'){ // for calculation such as 20 - %5
      tempAction = action;
    }
    action = e.target.innerText;
    //keep on calculating previouse results with another number
    if((isFirstDone && isSecondDone && tempAction) || (prevRes && isSecondDone && tempAction)){// for continuous calculation (prev result..) such as 20 - %5
        action = tempAction;
        tempAction = true;
    }

    else if (prevRes){ 
        isSecondDone = false;
        second = "";
        isFirstDone = true;
        isFirstChar = true;
    }

    if ( !isFirstDone ) { //go to second number
        isFirstDone = true;
        isFirstChar = true;
      }

});
}


  //Numeric buttons listener to get user input
  //After operation button was clicked -> handle second number
  for ( let number of numbers){
      number.addEventListener("click", (e) =>{
        let input = e.target.innerText;
        
         if (prevRes != "" && input =='±' && isSecondDone && !isFirstDone){
            prevRes *= -1;
            result.innerText = prevRes;
        }
        
        else if(!isFirstDone){
            if(prevRes != ""){
              this.resetValues();
              isFirstChar = true;
            }
            if(input !='±'){
            first = first + input;
            result.innerText = first;
            isFirstChar = false;
            }else if (!isFirstChar){
                first *= -1;
                result.innerText = first;
            }
            
        } 
        
        else{
            if(input !='±'){
            second = second + input;
            result.innerText = second;
            isSecondDone = true;
            isFirstChar = false;
            }else if (!isFirstChar){
                second *= -1;
                result.innerText = second;
            }
        }

      });
  }

  //calculating result listener

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
    tempAction = false;
    isFirstDone = false;
    isFirstChar = true;
    isSecondDone = false;
    result.innerText = "0";
    action = undefined;
}

// Reset all values
reset.addEventListener("click", () => {
    this.resetValues();
});