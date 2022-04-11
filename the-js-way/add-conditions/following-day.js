// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let userDayOfWeek = prompt('Please enter a day of the week').toLowerCase();
console.log(userDayOfWeek);

switch (userDayOfWeek) {
  case 'sunday':
    alert('Tomorrow is Monday!');
    break;
  case 'monday':
    alert('Tomorrow is Tuesday!');
    break;
  case 'tuesday':
    alert('Tomorrow is Wednesday!');
    break;
  case 'wednesday':
    alert('Tomorrow is Thursday!');
    break;
  case 'thursday':
    alert('Tomorrow is Friday!');
    break;
  case 'friday':
    alert('Tomorrow is Saturday!');
    break;
  case 'saturday':
    alert('Tomorrow is Sunday!');
    break;
  default:
    alert('That\'s not a valid day!');
    break;
}