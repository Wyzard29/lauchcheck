const input = require('readLine-sync');

//Take in astronaut count

let astronautCount= input.question('What is the astronaut count?');
astronautCount = Number(astronautCount);

let date =	"Monday 2019-03-18";
let time =	"10:05:34 AM";
//let astronautCount =	7;
let astronautStatus =	"ready";
let averageAstronautMassKg =	80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg =	760000;
let shuttleMassKg =	74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius 	=-225;
let fuelLevel =	0.9;
let dateLine = "Date: " + date
let timeLine = "Time: " + time
let weatherStatus =	"clear";
const dashLine = "-------------------------------------";

console.log(dashLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(dashLine);
console.log("\n")

console.log(dateLine);
console.log(timeLine);

console.log(dashLine);
console.log("> ASTRONAUT INFO");
console.log(dashLine);

console.log("* count: "+ astronautCount);
console.log("* status: "+ astronautStatus);
console.log("\n")
console.log(dashLine);
console.log("> FUEL DATA");
console.log(dashLine);

console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + (fuelLevel * 100) +"%");
console.log("\n")
console.log(dashLine);
console.log("> MASS DATA");
console.log(dashLine);

console.log("* Crew mass: "+ crewMassKg +" kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* total mass: " + totalMassKg + " kg");
console.log("\n")
console.log(dashLine);
console.log("> FLIGHT PLAN");
console.log(dashLine);

console.log("* weather: " + weatherStatus);
console.log("\n")

console.log(dashLine);
console.log(">  OVERALL STATUS");
console.log(dashLine);
console.log("* Clear for takeoff: Yes");