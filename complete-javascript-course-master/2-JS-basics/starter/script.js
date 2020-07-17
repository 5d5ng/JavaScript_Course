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


// var firstName = 'John';
// var age = 16;
// if(age<13){
//   console.log(firstName +' is a boy.');

// }else if(age >= 13 && age < 20){
//   console.log(firstName+' is a teenager.');
// }else{
//   console.log(firstName+ ' is a man.');
// }

// var firstName ='John';
// var age = 16;
// age >= 18 ? console.log(firstName+' drinks beer.') : console.log(firstName + 'drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18){
//   var drink = 'beer';

// }else{
//   var drink = 'juice';
// }



// //switch statement
// var job = 'insturctor';



// switch(job){
//   case 'teacher':
//   case 'insturctor':
//     console.log(firstName+' teaches kids how to code.');
//     break;
//   case 'driver':
//     console.log(firstNmae + 'drives an uber in Lisbon.');
//     break;
//   case 'designer':
//     console.log(firstNmae + 'designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName+ ' does something else.');



// }

// age = 20;
// switch(true){
//   case age<13:
//     console.log(firstName+' is a boy.');
//     break;
//   case age >=13 && age <20 :
//     console.log(firstName+ ' is a teenager.');
//     break;
//   case age>=20 && age<30:
//     console.log(firstName +' is a young man. ');
//     break;
//   default:
//     console.log(firstName +' is a man.');

// }


/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before,
 log the average winner to the console. 
HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
// var John,Mike,Mary;
// John = (89+120+103)/3;
// Mike = (116+94+123)/3;

// var winner,winnerAvgScore;
// if (John>Mike){
//   winner = 'John';
//   winnerAvgScore=John;
// }else if(John === Mike){
//   winner = 'John and Mike';
//   winnerAvgScore = John;
// }
// else{
//   winner = 'Mike';
//   winnerAvgScore = Mike;
// }

// var Mary = (97+134+105)/3;
// if(winnerAvgScore<Mary){
//   winner = 'Mary';
//   winnerAvgScore = Mary;
// }
// else if(winnerAvgScore ===Mary && winner ==='John and Mike'){
//   winner = 'all of them';
// }
// else if (winnerAvgScore === Mary && winner==='Mike'){
//   winner = 'Mary and Mike';

// }
// else if (winnerAvgScore === Mary && winner === 'John'){
//   winner = 'Mary and John'
// }
// console.log('winner is '+winner+' and  averge score is '+ winnerAvgScore);

// function calculateAge(birthyear){
//   return 2020-birthyear;
// }
// function yearsUntilRetirement(year,firstName){
//   var age = calculateAge(year);
//   var retirement = 65-age; //은퇴할 나이
//   console.log(firstName+" retires in "+retirement+"years.");


// }

// yearsUntilRetirement(1996,'John');

// //Function declaration
// // function whatDoYouDo(job,firstName){}


// //Function expression  함수를 변수로 설정가능
// var whatDoYouDo = function(job,firstName) {
//   switch(job){
//     case 'teacher':
//       return firstName+ ' teaches kids how to code'; //return 을 사용하므로 break는 따로 필요없다.
//     case 'driver' :
//       return firstName+ ' drives a cab in Lisbon';

//     case 'designer':
//       return firstName+ ' designs beautiful websites';
  
//     default:
//       return firstName+ ' does something else';
      
//   }
// }
// console.log( whatDoYouDo('teacher', 'John') );
// console.log( whatDoYouDo('designer', 'Jane') );
// console.log( whatDoYouDo('retired', 'Mark') );

//statement 와 expression의 차이
//And really, anything that we do,
// again, that produces a result is an expression.
//값을 만들어 내는 것은 expression : 3+5 또는 if문 () 안에 들어가는 식
//statement는 while문 같은 상태  즉각적인 값을 만들어내지 않는다.

// Okay, so it doesn't really return anything,
// but this 23 here simply comes from this console.log here,
// but the statement itself, it does not return anything.
// So, it's just really this statement
// that doesn't produce a result, and so that's the difference
// between expressions and statement, all right?
// So, coming back to functions here,
// we learned that function expressions produce
// an immediate result, while function declarations do not.
// And this will actually be very important



var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1949);
console.log(names[0]);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

name[5] = 'Mary';
//Different data types
var john = ['John','Smith',1990,'teacher',false];

john.push('blue'); // 끝 부분에 삽입
john.unshift('Mr.'); //첫부분에 삽입
john.pop(); //끝부분 삭제
john.shift(); // 첫 부분 삭제
console.log(john);

console.log( john.indexOf(1990)); // indexOf()찾는 자료가 없다면 -1을 리턴한다.

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a desinger'
console.log(isDesigner);



/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and
 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

*/

//Object 인덱스가 아닌 데이터 명으로 접근하고싶을때 key-val 

// var john = {  //firstname이 key ''john' 이 value
//   firstname : 'John',
//   lastName:'Smith',
//   birthYear:1990,
//   family:['Jane','Mark','Bob','Emily'],
//   job:'teacher',
//   isMarried: false
// };

// console.log(john.firstname);
// console.log(john['lastName']);
// var x ='birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1989;
// jane['lastName'] = 'Smith';
// console.log(jane);

//Object and method

var john = {  //firstname이 key ''john' 이 value
  firstname : 'John',
  lastName:'Smith',
  birthYear:1990,
  family:['Jane','Mark','Bob','Emily'],
  job:'teacher',
  isMarried: false,
  calcAge:function(birthYear){ //method 
    this.age =  2020-this.birthYear; // "This" means this object, the present, the current object
    //this를 이용하면 age 변수가 자동으로 만들어진다.
  }
};
console.log(john.calcAge(1990));
console.log(john);
//arrray또한 push,pop을 가진것처럼 method 가 존재한다 즉 array가 object라는 것을 알수있다.

var Mark ={
  Name:'Mark',
  mass: 92,
  height:1.95,
  calBMI: function(){
    this.BMI = this.mass/(this.height**2);
    return this.BMI;
  }
  
}
var John ={
  Name:'John',
  mass: 78,
  height:1.69,
  calBMI: function(){
    this.BMI = this.mass/(this.height**2);
    return this.BMI;
  }
}
Mark.calBMI();
John.calBMI();
if(Mark.BMI>John.BMI){
  console.log(Mark.name+' is higher and his BMI is '+Mark.BMI);
}
else if(Mark.BMI===John.BMI){
  console.log('they both have same point.'+Mark.BMI);
}
else{
  console.log(John.name+' is higher and his BMI is '+John.BMI);

}
console.log(Mark);