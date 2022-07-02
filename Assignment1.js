console.clear();

// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
var str1 = 'Today is';
var str2 = '      a beautiful day     ';
var str3 = ' In Hawaii.     ';
console.log(str1.trim()+" "+str2.trim()+" "+str3.trim());


console.log("Q1 END =====================")

// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

var enteredAlphabet = 'w';
switch (enteredAlphabet){
	case 'A': case 'a': case 'E': case 'e': case 'I': case 'i': case 'O': case 'o': case 'U': case 'u':
		console.log("this is a vowel");
		break;
		
	default:
		console.log("This is a consonant");
}

console.log("Q2 END =====================")

// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.
function calculator(num1,num2){
	switch (operator){
    case '*':
      console.log(num1*num2);
      break;
      
     case '/':
      console.log(num1/num2);
      break;
      
      case '+':
      console.log(parseInt(num1)+parseInt(num2));
      break;
      
      case '-':
      console.log(num1-num2);
      break;
      
  }
}

num1=prompt("enter the first number");
num2=prompt("enter the second number");
operator=prompt("enter the operation sign you want to perform");
calculator(num1,num2);

console.log("Q3 END =====================")


// Question 4:
// Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal.

var a = prompt("enter the first side of traingle");
var b = prompt("enter the second side of traingle");
var c = prompt("enter the third side of traingle");

if(a == b && a == c && b==c){
  console.log("this is equilateral triangle")
}

else if(a == b || a == c || b == c){
  console.log("this is Isosceles triangle")
}

else {
console.log("this is a scalene traingle")
}


console.log("Q4 END =====================")


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

var totalcost=0;
function calculateBill(n){
    if (units <= 50){
        totalCost = units * 0.5;
        console.log("total electric bill is ", totalCost)
    }
    else if (units <= 150)
    {
        totalCost = (50 * 0.5)
            + (units - 50)
                  * 0.75;
        console.log("total electric bill is ", totalCost)
    }
    else if (units <= 250)
    {
        totalCost = (50 * 0.5)
            + (100 * 0.75)
            + (units - 150)
                  * 1.2;
        console.log("total electric bill is ", totalCost)
    }
    else if (units > 250)
    {
        totalCost = (50 * 0.5)
            + (100 * 0.75)
            + (100 * 1.2)
            + (units - 250)
                  * 1.5;
          console.log("total electric bill is ", totalCost+totalCost/5)
    }
    
}

var units = prompt("enter the unit consumed");

calculateBill(units);

console.log("Q5 END =====================")