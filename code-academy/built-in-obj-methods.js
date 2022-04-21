const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// Using Object.keys()
// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Using Object.entries()
// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Using Object.assign(target, sources)
// Declare newRobot below this line:
// const source = ;
const target = {laserBlaster: true, voiceRecognition: true};

const newRobot = Object.assign(target, robot);

console.log(newRobot);