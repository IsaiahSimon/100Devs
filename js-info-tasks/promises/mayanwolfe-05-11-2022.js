// a promise can only resolve once, not twice

function delay(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}

delay(3000).then(( => alert('runs after 3 seconds')));

// Rascal_Two: Something I also enjoy promisying is the loading of images, so if you use JS to
// set the .src of an <img> tag there's a unknown amount of time from the setting
// of that src to the rendering of the image (thanks to network), so if you wrap
// the image load event in a promise, you can wait for the image to actually load
// on the screen, then do something else

// Rascal_Two: Yeah, my example was I had a button that fetched random animal images, but I didn't want the user to accidentally click the button multiple times until all the images were done, so I disabled the form when the clicked, *then* enabled the form when all the images were done

// Async/await: "a more friendly way to work with Promises"

// put async keyword in front of a function
async function f() {
  return 1;
}

// now we can start chaining
async function f() {
  return 1;
}

f().then(alert); // 1

// keyword await makes the code wait until settled
// seems like a "yield" from Ruby

// Rascal_Two: If you ever want to chain on awaited values, surrounding the
// expression in parenthesis (await promise).whateverYouWantToDo is an option too


// ******* Rascal_Two: besides all the other advantages, another (visible here) is that you don't have all these mini-scopes encapsulating your previous chained-results, which can be a disadvantage if your last thing needs data from the first - chaining-solution would be to pass the data through all the .thens, or...rebuilding that doom pyramid!

// Rascal_Two: yes it can! You can promisify an event listener result!


// velusip: IIFE syntax?
// Rascal_Two: haha yup the async IIFE - instantly-invoked-function-expression
// Rascal_Two: still a habit of mine

// You can use asynchronous methods inside classes as well

// await basically performs ".then" in a more compact way. But note: it only works within an async function
// you can always append on a ".then" if you need to do something outside the async function.

async function loadJson(url) {
  let response = await fetch(url)
    if (response.status == 200){
      return response.json();
    }else{
      throw new Error(response.status);
    }
}

loadJson('heeps://javascript.info/no-such-user.json')
  .catch(alert); //Error: 404

// potentially dangerous while loop
async function demoGithubUser() {

  let user = ''

  while (true) {
    let name = prompt("Enter a name?", "iliakan")

      try {
        user = await loadJson(`https://api.github.com/users/${name}`)
        break;
      } catch(err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("No such user, please reenter.");
        } else {
          throw err;
        }
      }
  }
  alert(`Full name: ${user.name}.`)
    return user;
}


// last question
async function wait() {
  await new Promise(resolve => setTimeout(resolve, 5000));

  return 10;
}

function f() {      // cant use await here b/c this fn is NOT asynchronous
  wait().then(result => alert(result));     // waits until wait() is dont
}

f() // call the fn