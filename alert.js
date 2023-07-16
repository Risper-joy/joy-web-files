let personName = "Your name"; // Double quotes
let regNumber = 'your regno'; // Single quotes
document.write (personName + "<br>" + regNumber);



    let i = 0;
let text =0;
while (i<=10) {
  text=text+i
  i++;
}

document.write("The while loop sum is"+ text);

let a,b,c;
a=2;
b=3;
c=4;
if(a>b&&a>c)
{
document.write("the greatest is" +a);
}
else if(b>a&&b>c)
{
   document.write("the greatest is" +b) ;
}
else
{
    document.write("the greatest is " +c);
}


    let sum=0;
    for(let x=1;x<=10;x++){
    sum=sum+x;
    document.write("   "+sum);
    }

    function getDayOfWeekUsingSwitch(dayNumber) {
        switch (dayNumber) {
          case 0:
            return "Sunday";
          case 1:
            return "Monday";
          case 2:
            return "Tuesday";
          case 3:
            return "Wednesday";
          case 4:
            return "Thursday";
          case 5:
            return "Friday";
          case 6:
            return "Saturday";
          default:
            return "Invalid day number!";
        }
      }
      
      document.write(getDayOfWeekUsingSwitch(0)); // Output: Sunday
      document.write(getDayOfWeekUsingSwitch(3)); // Output: Wednesday
      document.write(getDayOfWeekUsingSwitch(7)); // Output: Invalid day number! 
      
      function getDayOfWeekUsingIfElse(dayNumber) {
        if (dayNumber === 0) {
          return "Sunday";
        } else if (dayNumber === 1) {
          return "Monday";
        } else if (dayNumber === 2) {
          return "Tuesday";
        } else if (dayNumber === 3) {
          return "Wednesday";
        } else if (dayNumber === 4) {
          return "Thursday";
        } else if (dayNumber === 5) {
          return "Friday";
        } else if (dayNumber === 6) {
          return "Saturday";
        } else {
          return "Invalid day number!";
     }
      }
      document.write(getDayOfWeekUsingSwitch(0)); // Output: Sunday
      document.write(getDayOfWeekUsingSwitch(3)); // Output: Wednesday
      document.write(getDayOfWeekUsingSwitch(7)); // Output: Invalid day number! 


        var largest;
      
        if (a >= b) {
          if (a >= c) {
            largest = a;
          } else {
            largest = c;
          }
        } else {
          if (b >= c) {
            largest = b;
          } else {
            largest = c;
          }
        }
      
        
      document.write("largest" +largest);

let z = 0;
let txt =0;
do {
  txt=txt+z;
  z++
  }
while(z<=10)

document.write(" The sum using DoWhile is "+txt)