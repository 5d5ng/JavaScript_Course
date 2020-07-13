// var firstName = 'Dave'

// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job); // 할당해주지않으면 Undefined 로 출력된다.

// job = 'Teacher'
// console.log(job);

// var 3years = 3;

// var firstName = 'John';
// var age = 28;
// console.log(firstName+" "+age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// alert(firstName+' is a ' + age+' year old '+job
// + '. Is he married? '+isMarried);

// var lastName = prompt('What is his last Name?'); //input시 사용
// console.log(firstName +' '+lastName);

//Basic operator
// var year,yearJohn,yearMark
// year = 2018;
// yearJohn = 2018 - 28;
// yearMark = 2018 - 33;
// console.log(yearJohn);

// var a = 10
// var b = 20
// var c = a <b

//Operator precedence
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// var ageJohn = now -yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) /2;
// console.log(average);

// var x,y ;
// x = y = (3 + 5) * 4 - 6;
// console.log(x,y);

// //More operators
// x = x * 2
// x*=2


/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var massMark,massJohn,heightMark,heightJohn , BMIMark,BMIJohn;
// massMark = 78; //kg
// massJohn = 92;
// heightMark = 1.69; //meters
// heightJohn = 1.95;

// BMIMark = massMark/(heightMark*heightMark)
// BMIJohn = massJohn/(heightJohn*heightJohn)

// if(BMIMark > BMIJohn){
//   console.log('Mark\'s BMI is higher than John\'s. ');
// }else{
//   console.log('John\'s BMI is higher than Mark\'s. ');
// }




// var firstName = 'John';
// var civilStatus = 'single';
// if(civilStatus === 'married'){
//   console.log(firstName + ' is married!');
// } else{
//   console.log(firstName+' will hopefully marry soon :)');
// }

// var isMarried = true;
// if(isMarried){
//   console.log(firstName + ' is married!');
// }else{
//   console.log(firstName+' will hopefully marry soon :)');
// }


var firstName = 'John';
var age = 16;
if(age<13){
  console.log(firstName +' is a boy.');

}else if(age >= 13 && age < 20){
  console.log(firstName+' is a teenager.');
}else{
  console.log(firstName+ ' is a man.');
}