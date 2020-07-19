// Lecture: Hoisting
///////////////////////////////////////

calcAge(1975);
//함수를 정의해주기 전에도 함수가 잘 실행된다.
//호이스팅

//functions
function calcAge(year){
    console.log(2020-year);
}

// retirement(1999);

var retirement = function(year){
    console.log(65-(2016-year));
}


//variables
console.log(age); //뒤에 선언한 경우 undefined 만약 출력코드 뒤에 라도 선언하지 않는다면 에러발생.
var age =23;  //global execution context object에 저장된다.
console.log(age); //23출력

function foo(){
    var age = 65;// 이 변수는 variable object 내부에 정의되었다.
    console.log(age);
}
foo();
console.log(age);

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









