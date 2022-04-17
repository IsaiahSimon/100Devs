let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
let runnerAge = 20;

if ((runnerAge > 18) && (registeredEarly)){
  raceNumber += 1000;
}

if ((runnerAge > 18) && (registeredEarly)){
  console.log(`Early adults will race at 9:30 am in race number: ${raceNumber}.`);
}else if((runnerAge > 18) && !(registeredEarly)){
  console.log(`
Late adults run at 11:00 am in race number: ${raceNumber}.`);
}else if (runnerAge < 18){
  console.log(`
Youth registrants run at 12:30 pm (regardless of registration) in race number: ${raceNumber}.`);
}else{
  console.log(`Please see the registration desk.`)
}
