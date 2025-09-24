 *List and describe at least 5 topics that we discussed in class that you know very well. Each description should be at least 1 paragraph with three to five sentences.*

# **Hello! Good day to you nosy peeps!**
*This quarter, I both refreshed my knowledge on fundamental things in coding and learned new things in a different coding language.*

### 1. Declaring Variables and Functions

As with almost any programming language, variables are a must have in doing anything. Functions are also quite useful in making code more reliable and readable. Variables in JavaScript have quite a few differences to variables in C++, like any data type being initialized with a shared pool of terms (except for const), and these data types being more "lax", with the main ones only being Number, String and Boolean, instead of C++'s Integer, Float, and more. They can also be used almost interchangeably, and do not have any issues with being combined together, unlike C++. As for functions, they are still mostly the same, but you have to start with the word function to declare them.

### 2. Simple Arithmetic and Comparison Operations

Of course, without any operations to do on your variables, they would be next to useless. There aren't really many changes with how arithmetic and comparison operations worked in C++, which we learned last year, and JavaScript. A newly introduced comparison operation is ===, which compares both the value stored in a variable and the data type. And, as mentioned before, you can mix data types in arithmetic and comparison operations, and JavaScript doesn't really care too much.

### 3. Conditional Control Structures

And with an understanding of variables and different operations, we can now create programs that can "make decisions" on their own. These are where the If, Else, If Else and Switch control structures. For example, *if* I wanted to insult my Strontium classmates that are older than me, I could use an If statement like this:

```javascript
let section = "Strontium";
let age = 16;               //These are example values

if (section == "Strontium" && age > 15)
{
    console.log("Haha you are old haha haha");
}                          
                            //In this case, the If statement would evaluate as true and output the weird line
```

I could also use a Switch statement for, say, judging based on favourite pastry, like so:

```javascript
let pastry = "turnover";

switch (pastry)
{
    case "cream puff":
    case "turon":
    case "croissant":
    {
        console.log("I respect that.");
        break;
    }
    case "pie":
    case "cinnamon roll":
    {
        console.log("Woah, you're awesome!");
        break;
    }
    case "apple pie":
    {
        console.log("Can we be besties for ever and ever and ever?!?!?");
        break;
    }
    default:
    {
        console.log("Dunno what that is whoops.");
    }
}
                            //Here, it would output "Woah, you're awesome!"
```

### 4. Loops and their Variations
### 5. A Few Built in Functions and Fun Code Shortcuts


