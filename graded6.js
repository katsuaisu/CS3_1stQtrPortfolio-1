process.stdin.on('data', function (data)  {
    let num = Number(data.toString().trim()); // convert data input into a number do not change anything here. Do not remove this line.
  
    /* - Please work with the num variable in your code.
  
        - No HTML nor CSS needed.  Output is just through console.log
  
        - No prompt, getElementById, alert nor confirm
  
        - just focus on the stated requirements
  
  */
  
   // -------------------------------  type your answers below -----------------------------------------/
  
      let checky = 1;
      let counter = 1;
      let output = "1 ";
      while (checky < num)
      {
              checky += counter;
              if (checky > num)
              {
                  break;
              }
              counter++;
              output += checky + " ";
      }
      
      console.log(output);
  
  
  
    
  
   // --------------------------------- end of your answer ----------------------------------------------/
  
    process.exit();  // stops the process do not remove
  });// do not remove