 /**fade-in fade-out pages transition **/
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });


//email and user registered from login page/link pop up 
let email = "a@a.com";
let user = "Temp User";


//executes on calc page load
function initUser() { //or welcome and logout?
  document.getElementById("userHeader").innerHTML = "Logged in as "+ user + " ("+email+") " +("<a href=\"login.html\" onclick=\"relogin()\"><span style=\"color:#4D9DE0;font-size:0.8em;font-style:normal;\">Not you?</span></a>");
}

//relogin from calc page
function relogin() {
  //clear all saved data 
  console.log("test");
}


//pull and store the name and email from login page
// array to store all users as objects
/*let users = [];

// function to take the username and his email as an object and push it to the array of users
const addUser = (ev) => {
  let user = {
    id: Date.now(),
    name: document.getElementById('fullname').value,
    email: document.getElementById('email').value
  }
  users.push(user);
}


document.getElementById('btn').addEventListener('click', addUser);*/


// let elmt1 = document.getElementById("exp");
// let params = window.location.search;
// let par = new URLSearchParams(params);
// elmt1.innerHTML = par.get('lname');

