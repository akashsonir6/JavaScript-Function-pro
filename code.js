// 1 program that prints even numbers from 1 to 100 in descending order
 
for (let i = 101; i > 0; i--) {
    if (i % 2 == 0) {
      console.log(i)
    } 
  }


// 2 function to accept a number as parameter and return false or true based on weather the number is prime or not
function test_prime(n)
 {

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));

// 3 a function which accept a number and reverse a number as output

var input = prompt("Write a number");

function around() {
  input = parseInt(input.split('').reverse().join(''));
  console.log(input);
}

around();

// 4 a function which accepts list of country names as parameter and returns the longest country name as output

function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, "");
}
console.log(Longest_Country_Name(["India", "France", "United States of America"]));