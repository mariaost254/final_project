 /**fade-in fade-out pages transition **/
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });

//executes on calc page load
function initUser(name,email) { //or welcome and logout?
  document.getElementById("userHeader").innerHTML = "Logged in as "+ name + " ("+email+") " +("<a href=\"login.html\" onclick=\"relogin()\"><span style=\"color:#4D9DE0;font-size:0.8em;font-style:normal;\">Not you?</span></a>");
}

//relogin from calc page
function relogin() {
  localStorage.clear();
}

