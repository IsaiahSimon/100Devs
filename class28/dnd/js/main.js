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
      //access the subclasses of data...
      //hard-code to access the obj, then keys
      //console.log(data.subclasses[0].name) //reference 1st obj, then key
      //console.log(data.subclasses[1].name) //reference 2nd obj, then key

      //Loop through subclasses, and place names (keys) into console...
      //data.subclasses.forEach( subClass => console.log(subClass.name))

      //LOOP
      data.subclasses.forEach( subClass => {
        console.log(subClass.name)

        //create an <li>
        let li = document.createElement('li')
        //add text to <li>
        li.textContent = subClass.name
        //append <li> to <ul>
        document.querySelector('ul').appendChild(li)

      })

      //figure out how to clear out old <li> elements (remove/replace Children)
      document.querySelector('button').addEventListener('click', resetUl)

      function resetUl(){
        document.querySelector('ul').replaceChildren('')
      }
      
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
