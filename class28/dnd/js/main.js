//Example fetch using DnD5eAPI - place subclasses in ul

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //assigned the data from the smurf 'click' to binding choice
  const choice = document.querySelector('input').value
  //plug choice into the string, then make the request
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

      //console logged the data to see what we get back...
      console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
