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
var John,Mike,Mary;
John = (89+120+103)/3;
Mike = (116+94+123)/3;

var winner,winnerAvgScore;
if (John>Mike){
  winner = 'John';
  winnerAvgScore=John;
}else if(John === Mike){
  winner = 'John and Mike';
  winnerAvgScore = John;
}
else{
  winner = 'Mike';
  winnerAvgScore = Mike;
}

var Mary = (97+134+105)/3;
if(winnerAvgScore<Mary){
  winner = 'Mary';
  winnerAvgScore = Mary;
}
else if(winnerAvgScore ===Mary && winner ==='John and Mike'){
  winner = 'all of them';
}
else if (winnerAvgScore === Mary && winner==='Mike'){
  winner = 'Mary and Mike';

}
else if (winnerAvgScore === Mary && winner === 'John'){
  winner = 'Mary and John'
}
console.log('winner is '+winner+' and  averge score is '+ winnerAvgScore);

function calculateAge(birthyear){
  return 2020-birthyear;
}
function yearsUntilRetirement(year,firstName){
  var age = calculateAge(year);
  var retirement = 65-age; //은퇴할 나이
  console.log(firstName+" retires in "+retirement+"years.");


}

yearsUntilRetirement(1996,'John');

//Function declaration
// function whatDoYouDo(job,firstName){}


//Function expression  함수를 변수로 설정가능
var whatDoYouDo = function(job,firstName) {
  switch(job){
    case 'teacher':
      return firstName+ ' teaches kids how to code'; //return 을 사용하므로 break는 따로 필요없다.
    case 'driver' :
      return firstName+ ' drives a cab in Lisbon';

    case 'designer':
      return firstName+ ' designs beautiful websites';
  
    default:
      return firstName+ ' does something else';
      
  }
}
console.log( whatDoYouDo('teacher', 'John') );
console.log( whatDoYouDo('designer', 'Jane') );
console.log( whatDoYouDo('retired', 'Mark') );

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