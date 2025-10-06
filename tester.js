// process.stdin.on('data', function (data)  {
//    let num = Number(data.toString().trim()); 

//let planeNow = 4;
//let capacity = 100;
//let answer = "Starting from "+ planeNow + " planes, you will need: " + (Math.ceil(num/capacity)-planeNow) + " more planes.";
//if (num >400)
//{
//console.log(answer);
//}
//else
//{
//    console.log("stupid");
//}
//  process.exit();
//  });
//        This is set plane, unset passengers
//hi


let passenger = 0;
let planes = 0;
let capacity = 100;
let ans = 0;

rl = require('readline');
rli = rl.createInterface({input: process.stdin});
rli.on('line', get_passenger_and_plane);

function get_passenger_and_plane(line)
{
  [planes, passenger] = line.trim().split(' ');
  console.log(passenger, planes);
  solve(passenger, planes);
}

function solve(passenger, planes)
{
  ans = Math.ceil(passenger/capacity) - planes;

if (ans < 0) ans = 0
  console.log(ans)
}
//      Unset planes, unset passengers