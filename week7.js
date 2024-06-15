/* 
   /* 
  Create an array called ages that contains the following 
  values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the 
array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure 
it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.


ANSWER UNDER THIS QUESTION */


let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let num1 = ages[0];
let b = ages[ages.length-1];

function subtract (x,y){
  return x - y;
}

console.log(subtract(num1,b));

ages.push(22);


function averageAge(x){
  let sum = 0;
  for (let i = 0; i < x.length; i++){
    sum += x[i];
  }
  let average = sum / x.length;
  return average;
}

console.log("average age is: ", averageAge(ages))

/*
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the
 average number of letters per name.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function average (names){
for (let i = 0; i < names.length; i++){
  let sum = 0;
        sum += names[i].length;
        return sum / names.length;
  }
}

console.log("average is:", average(names));

/*
Use a loop to iterate through the array again and 
concatenate all the names together, separated by spaces.
*/
function stringNames(array){
  for(let i = 0; i < array.length; i++){
    let newArray = array.join(" ");
    return newArray;
  }
}
console.log("Names:",stringNames(names));


/*
!!!!!!!!!!!!!!How do you access the last element of any array?
*/

// array[array.length - 1]

/* this one does the least amount of damage to the code*/
/*
!!!!!!!!!!!!!!!!!How do you access the first element of any array?
*/
// array[0]

/*
!!!!!!!!!!!!!!!!Create a new array called nameLengths. Write a 
loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function numName(names){
  for (let i = 0; i <= names[i].length; i++){
          return names[i].length;
    }
  }

console.log("number of letters:", numName(names));

let nameLengths = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'].map(item => item.length);
console.log(nameLengths);
//names.map((item) => nameLengths.push(item.length))


/*
Write a loop to iterate over the nameLengths array 
and calculate the sum of all the elements in the array.
*/

let sum = 0;

nameLengths.forEach( num => {
  sum += num;
})
console.log('Sum of array is ', sum)

function numLettersArray(array){
  for (let i = 0; array.length; i++){
    let sum = 0;
    sum += array[i];
    return sum;
}
}


console.log("Array sum of letters is:", numLettersArray(nameLengths))

/*
Write a function that takes two parameters, 
word and n, as arguments and returns the word concatenated 
to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to 
return 'HelloHelloHello').
*/

function multiplyWord(word, n){
  return word.repeat(n);
  }

console.log(multiplyWord("Hello",3))
/*
Write a function that takes two parameters, 
firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.
*/
firstName = "Hayley";
lastName = "Weimaster"
function fullName (x , y){
  return x + " " + y;
}
console.log(firstName, lastName)
/*
Write a function that takes an array of numbers and 
returns true if the sum of all the numbers in the array is greater than 100.
*/
let num1Array = [4,6,6,7,99];
function sumOneHundred(array){
  let sum = 0;                                
  for (let i = 0; i < array.length; i++) {   
    sum += array[i];                      
  } 
  if (sum >= 100){
    return true;
  }
  else{
    return false;
  }
}
console.log(sumOneHundred(num1Array));
/*
Write a function that takes an array of numbers and 
returns the average of all the elements in the array.
*/
let num2Array=[45,73,65,32]

function averageOfArray(array){
  sum = 0;
  for (let i = 0; i < array.length; i++){
    sum+=array[i];
  }
  return sum / array.length;
}
console.log("average of array:", averageOfArray(num2Array))
/*
Write a function that takes two arrays of 
numbers and returns true if the average of the elements
 in the first array is greater than the average of 
 the elements in the second array.
 */
let num3Array = [43,54,6,78];
let num4Array = [6,9,82,2];

function compareArrays(array1, array2){
  sum1 = 0;
  for (let i = 0; i < array1.length; i++){
    sum1 +=array1[i];
  }
  let newArray1 = sum / array1.length;
  sum2 = 0;
  for (let i = 0; i < array2.length; i++){
    sum1 +=array2[i];
  }
  let newArray2 = sum / array2.length;
  if (newArray1 > newArray2){
    return true;
  }
  else{
    return false;
  }
}
console.log(compareArrays(num3Array, num4Array));

/*Write a function called willBuyDrink that takes a boolean 
isHotOutside, and a number moneyInPocket, and returns 
true if it is hot outside and if moneyInPocket is greater than 10.50.
*/

let isHotOutside = true;
let moneyInPocket = 11;

function willBuyDrink(temp,money){
  if (temp && money >= 10.50){
    return true;
  }
  else{
    return false;
  }
}
console.log(willBuyDrink(isHotOutside,moneyInPocket))

/*
Create a function of your own that solves a problem. 
In comments, write what the function does and why you created it.
*/
workCompleted = 85;
beingPlayed = false;
function shouldIPlayZelda(progress, taken){
  if (progress >= 80 && taken == false){
    return true;
  }
  else{
    return false;
  }
}
console.log(shouldIPlayZelda(workCompleted,beingPlayed))
// I need to finish most of my work before I can take a break to play zelda.
//This function tells me if I have enough work complete to take an hour break and also 
// take into account if my bf is already palying a game or not. 