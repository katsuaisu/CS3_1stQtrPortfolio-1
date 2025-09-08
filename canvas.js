for (let i = 1; i <= 10; i++)
{
    console.log((2*i));
}
console.log("exercise start");

var grades = [99, 98, 100, 87, 96];
var sum = 0;
var avg = 0;
var lowest = 100;
var highest = 0;

for (let i = 0; i < grades.length; i++)
{
    sum += grades[i];
    avg = (sum/grades.length);
    if (lowest > grades[i])
    {
        lowest = grades[i];
    }
    if (highest < grades[i])
    {
        highest = grades[i]
    }
}
//grades.sort(function(a, b) {return a-b;});  sort numerical values instantly, a-b = lowest to high, b-a = highest to low

var swapper = 0;
for (let i = 0; i < grades.length; i++)
{
    for (let j = i+1; j < grades.length; j++)
        if (grades[i] > grades[j])
        {
            swapper = grades[i];
            grades[i] = grades[j];
            grades[j] = swapper;
        }
}


console.log(sum);
console.log(avg);
console.log(lowest);
console.log(highest);
console.log(grades);

console.log("exercise end");

var j = 1;
while (j <= 5)
{
    console.log((j + " egg"));
    j++;
}

var k = 1;
do 
{
    console.log(2*k + " apple");
    k++;
} while (k <= 3)

var fave_obbies = ["beans", "red beans", "ash jumps", "nuggets reality"];
for (let i = 0; i <fave_obbies.length; i++)
{
    console.log(fave_obbies[i]);
}

var fave_fruits = ["mango", "melon", "apple", "orange", "rambutan"];
for (fruit of fave_fruits)
{
    console.log(fruit);
}

var fave_color = ["pink", "blue", "green"];
fave_color.forEach(print_color);     //very good for readability

function print_color(color)
{
    console.log(color);
}

fave_color.push("purple");          //add to array at the bottom i.e [array].push([variable])
fave_color.unshift("yellow");       //add to array at the top i.e [array].push([variable])

fave_color.forEach(print_color);

var popped = fave_color.pop();      //remove bottom variable in array, and store in another variable
var shifted = fave_color.shift();   //remove top variable in array, and store in another variable

fave_color.forEach(print_color);