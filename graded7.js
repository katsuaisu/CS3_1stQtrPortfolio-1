process.stdin.on('data', function (data)  { // do not change anything on this line
    let num = Math.floor(Number(data.toString().trim())); // do not change anything on this line and work with the num variable 
      // test if num has a value and display on the console an error message when needed. 
      let banana = num + " has no value";
      if (isNaN(num) == true || num == 0) 
      { 
         console.log(banana);
      }
      else 
      {   
        // get the number of digits and place it in len.
        let num2 = num;
        let len = getLength(num);
        // to get the sum of all individual digits raised to the number of digits found in len
        let sum = getSum(num2, len);
        // show the result on the console using ternary operator and templated string.
        let apple = "The sum is: " + sum + " of " + num2 + " using length of: " + len;
        console.log(apple);
        console.log((sum == num2) ? 'It is an Armstrong number' : 'It is NOT an Armstrong number');
      }
      process.exit();  // stops the process and do not change this
    }); // do not change this part
    
    // function to determine the number of digits
    
    function getLength(num) 
    {
      let len=0;
      for (; num >= 1; len++) 
      {
        num = (Math.floor(num / 10)); // while removing the ones, len increase
      } 
      return len;
    }
    // get the sum of the digits that is raised by the number of digits. 
    function getSum(tempNum, len) 
    {
     let summy=0;
     let n;   
     while (tempNum > 0) 
     {
       n = tempNum % 10;
       tempNum = Math.floor(tempNum / 10);
       summy += Math.pow(n,len) // The Math.pow() is a method that returns the value of a base No. raised to a power (len)
     }
     return summy;
    }