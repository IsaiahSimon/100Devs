//Create a button that adds 1 to a botScore stored in localStorage

//set botScore to zero on page load only if botScore is not there

if(!localStorage.getItem('botScore')){
  localStorage.setItem('botScore', 0)
}

//
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){

  let botScoreVal = Number(localStorage.getItem('botScore'))

  //add 1 to variable
  botScoreVal += 1

  //reset score to new value + 1
  localStorage.setItem('botScore', botScoreVal)
}
