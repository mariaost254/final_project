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
let sendWhatsapp = document.querySelector("#sharewhatsapp");
let sendEmail = document.querySelector("#shareemail");
let n1 = document.querySelector("#n1");
let op = document.querySelector("#dropdown");
let n2 = document.querySelector("#n2");


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
  sendWhatsapp.style.display = 'none';
  sendEmail.style.display = 'none';
})

overlay.addEventListener('click', event =>{
  overlay.style.display = 'none';
  popup.className = ''; 
  sendWhatsapp.style.display = 'none';
  sendEmail.style.display = 'none';
})
//share via whatsapp
shareBtnw.addEventListener('click', event =>{
  sendWhatsapp.style.display = '';
  sendEmail.style.display = 'none';
  overlay.style.display = 'block';
  popup.className = 'show';
})

//share via email
shareBtne.addEventListener('click', event =>{
  sendEmail.style.display = '';
  sendWhatsapp.style.display = 'none';
  overlay.style.display = 'block';
  popup.className = 'show';
})

function testValues(){

}

sendEmail.addEventListener('click', event =>{
  //test values no to be null first
  // let url = new URL('httphttp%3A%2F%2Flocalhost:8000%final.html');
  //write down the equation in the text message also 
  let num1= n1.value;
  let num2 = n2.value;
  let oper = op.options[op.selectedIndex].text;
  let str = num1 + " " + oper + " " + num2+" ";
  window.open("mailto:mariaost253@gmail.com?subject=Solve The Equation&body=Solve: "+str+ 
  "%0AClick on the link to get your answer http%3A%2F%2Flocalhost%3A8000%2Ffinal.html%3Fn1%3D"+num1+"%26n2%3D"+num2+"%26op%3D"+oper+"");
  //change value to sending or sent
});

sendWhatsapp.addEventListener('click', event =>{
});






  //https://api.whatsapp.com/send?phone=+972num&text=urlencodedtext

  function send_handle(){

    let num=document.getElementById("number").value;
  
    let msg= document.getElementById("msg").value;
  
      let name= document.getElementById("name").value;
    
    var win = window.open(`https://api.whatsapp.com/send?phone=${num}&text=text`, '_blank');
   // win.focus();
  }