let passengers = "rizz";
let capacity = 100;

let answer = "You will need: " + Math.ceil(passengers/capacity) + " planes.";
if (passengers > 0 && typeof(passengers) == Number)
{
console.log(answer);
}
else
{
    console.log("stupid");
}