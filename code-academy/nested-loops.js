// Write your code below
const bobsFollowers = ['Tyrone', 'Mike', 'Frank', 'Leron'];

const tinasFollowers = ['Mike', 'Megan', 'Leron'];

const mutualFollowers = [];

//loop through bobsFollowers
for (let i = 0; i < bobsFollowers.length; i++){
  //loop through tinasFollowers
  for (let j = 0; j < tinasFollowers.length; j++){
    //push common friends to mutualFollowers array
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
};

console.log(mutualFollowers);