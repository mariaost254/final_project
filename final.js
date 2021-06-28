
window.onload = function(){
    initUser();
    retrieveData ();
}

  function retrieveData (){
    let retrievedObject = localStorage.getItem('arrRes');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }

    