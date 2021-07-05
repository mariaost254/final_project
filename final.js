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
let label = document.querySelector("#lbl");


window.onload = function(){
  let params = window.location.search;
  let par = new URLSearchParams(params);
  initUser(par.get('fullname'), par.get('email'));
  retrieveData ();
  fillHistory();
}

window.onback = function(){
  let params = window.location.search;
  let par = new URLSearchParams(params);
  let finalurl = 'calc.html';
  finalurl= finalurl.concat("\?fullname="+par.get('fullname')+"&email="+par.get('email'));
  window.location.href=finalurl;
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
    let params = window.location.search;
    let par = new URLSearchParams(params);
    let finalurl = 'calc.html';
    finalurl= finalurl.concat("\?fullname="+par.get('fullname')+"&email="+par.get('email'));
    window.location.href=finalurl;
  })

  clear.addEventListener('click', event =>{
    localStorage.clear();
    location.reload(historyBox);
  })

//close pop up vis button or click on darken screen
function closepopUp(){
  overlay.style.display = 'none';
  popup.className = ''; 
  sendWhatsapp.style.display = 'none';
  sendEmail.style.display = 'none';
  label.style.display = 'none';
  n1.value ='';
  n2.value ='';
}
closePopup.addEventListener('click', event =>{
 this.closepopUp();
})

overlay.addEventListener('click', event =>{
  this.closepopUp();
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
  if(n2.value=='' || n1.value==''){
    label.style.display = 'flex';
    return false;
  }
  return true;
}

n1.addEventListener('click', event =>{
  if(n1.value == '' && label.style.display == 'flex')
      label.style.display = 'none';
})

n2.addEventListener('click', event =>{
  if(n2.value == '' && label.style.display == 'flex'){
      label.style.display = 'none';
  }
})

sendEmail.addEventListener('click', event =>{
  let num1= n1.value;
  let num2 = n2.value;
  let oper = op.options[op.selectedIndex].value;
  let str = num1 + " " + oper + " " + num2+" ";
  if(testValues()){
      window.open("mailto:?subject=Solve The Equation&body=Solve: "+str+ 
      "%0AClick on the link to get your answer http%3A%2F%2Flocalhost%3A8000%2Fcalc.html%3Fn1%3D"+num1+"%26n2%3D"+num2+"%26op%3D"+oper+"");
  }
});

sendWhatsapp.addEventListener('click', event =>{
  let num1= n1.value;
  let num2 = n2.value;
  let oper = op.options[op.selectedIndex].value;
  if(oper == '+') oper = '%2B';
  let str = "Solve The Equation "+ num1 + " "+ oper +" "+ num2+ "%0ACopy the link to get your answer %0A";
  let link = `http%3A%2F%2Flocalhost%3A8000%2Fcalc.html%3Fn1%3D${num1}%26n2%3D${num2}%26op%3D${oper}`;
  if(testValues()){
    window.open(`https://web.whatsapp.com/send?text=${str}${link}`);
  }
});
