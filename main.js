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


