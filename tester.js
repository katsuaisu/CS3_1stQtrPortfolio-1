
let len = getLength(122)


function getLength(num) 
{
  let len=0;
  for (; num >= 1; len++) 
  {
    num = (Math.floor(num / 10)); // while removing the ones, len increase
  } 
}
console.log(len);