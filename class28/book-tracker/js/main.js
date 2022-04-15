//Button click
document.querySelector('button').addEventListener('click', getFetch)

//local storage on page load vvv
document.querySelector('h3').innerText = localStorage.getItem('books')

//User enters ISBN, then console.log the Title
function getFetch(){
  //get value user types in
  const choice = document.querySelector('input').value
  console.log(choice)

  //Look up Eloquent JS 9781593275846
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      //we make our request
      .then(res => res.json()) // parse response as JSON

      //get back that data
      .then(data => {
        //check if it works
        //console.log(data.title)

        const bookTitle = data.title

        //update the <h3> to show book Title
        //document.querySelector('h3').innerText = bookTitle

        //concat instead of overwrite
        //document.querySelector('h3').innerText += ` ${bookTitle}`

        // setting value in localStorage with 'books' key ...the left colum in lS
        //localStorage.setItem('books', bookTitle)

        //grab all books already in lS, and concat new title to it
        //(3) Note: this will give null on the 1st run, need a conditional
        //let books = localStorage.getItem('books') + " ; " + bookTitle, moved into conditional
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', bookTitle)
        }else{
          let books = localStorage.getItem('books') + " ; " + bookTitle
          localStorage.setItem('books', books)
        }

        //take whole new string & put in localStorage, (moved inside conditional)
        //localStorage.setItem('books', books)

        //put Title into localStorage, make persistent on page load ^^
        //(2) Now put back into DOM
        document.querySelector('h3').innerText = localStorage.getItem('books')

        //Now I want a list of books using strings
        //concat, and update my storage with the concat

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
