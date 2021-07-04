let historyBox =  document.querySelector("#fin_clc");
let printBtn =  document.querySelector(".print");
let back =  document.querySelector("#back");
let clear =  document.querySelector("#clear");

let retrievedObject ="";

//===for shre popup
let closePopup = document.querySelector("#popupclose");
let overlay = document.querySelector("#overlay");
let popup = document.querySelector("#popup");
let shareBtnw = document.querySelector("#whatsapp");
let shareBtne = document.querySelector("#email");

window.onload = function(){
    initUser();
    retrieveData ();
    fillHistory();
}

  function retrieveData (){
    retrievedObject = localStorage.getItem('arrRes');
    retrievedObject=JSON.parse(retrievedObject);
  }

  function fillHistory (){
    if(retrievedObject!=null){
    for(let i=retrievedObject.length-1; i>=0 ; i--) {
      let calc = document.createElement('p');
      calc.innerHTML = retrievedObject[i].toString();
      historyBox.appendChild(calc);
    }
  }
}

  
  printBtn.addEventListener('click', event =>{
    let printContents = document.getElementById('fin_clc').innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    location.reload();
  })

  back.addEventListener('click', event =>{
    window.location.href='calc.html';
  })

  clear.addEventListener('click', event =>{
    localStorage.clear();
    location.reload(historyBox);
  })

//close pop up vis button or click on darken screen
closePopup.addEventListener('click', event =>{
  overlay.style.display = 'none';
  popup.className = ''; 
})

overlay.addEventListener('click', event =>{
  overlay.style.display = 'none';
  popup.className = ''; 
})
//share via whatsapp
shareBtnw.addEventListener('click', event =>{
  overlay.style.display = 'block';
  popup.className = 'show';
})

//share via email
shareBtne.addEventListener('click', event =>{
  overlay.style.display = 'block';
  popup.className = 'show';
})










  //https://api.whatsapp.com/send?phone=+972num&text=urlencodedtext

  function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
      let name= document.getElementById("name").value;
    
    var win = window.open(`https://api.whatsapp.com/send?phone=${num}&text=text`, '_blank');
   // win.focus();
  }