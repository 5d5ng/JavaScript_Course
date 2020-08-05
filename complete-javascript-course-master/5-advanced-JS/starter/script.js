// // //Function constructor

// // // var john = {
// // //   name:'John',
// // //   yearofBirth:1990,
// // //   job: 'teacer'
// // // };
// // // john.jj  ='e';
// // // console.log(john);

// // // //function Constructor 은 항상 첫글자 대문자
// // // //자바에서 클래스랑 비슷한 느낌?
// // // var Person = function(name,yearOfBirth,job){
// // //   this.name = name;
// // //   this.yearOfBirth = yearOfBirth;
// // //   this.job = job;
// // // }

// // // Person.prototype.calculateAge= function(){ //Person function constructor(생성자 함수)의 프로토타입 프로퍼티에 저장하는 코드
// // //   console.log(2020 - this.yearOfBirth);
// // // }
// // // //Person에 메소드로 추가하는 방법도 있지만 위의 방식으로도 저장이 가능하다.

// // // var john = new Person('John',1990,'teacher'); //인스턴스화
// // //new를 통해서 생성되고 global object를 가리키지 않는다.  즉 기존함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
// // //따라서 this가 새로운 Object를 가리키게된다.
// // // So again our new operator here
// // // first creates an empty object,
// // // then it calls our function with the this variable
// // // not pointing to the global object
// // // but to the new object that was created here.
// // // And then when this code here runs
// // // the this variable is no longer the global variable.
// // // And so these are all set on the new object
// // // which is then in the end assigned to this variable.

// // // var jane = new Person('Jane',1969,'designer');
// // // var mark = new Person('Mark',1948,'retired');
// // // john.calculateAge();
// // // jane.calculateAge();
// // // mark.calculateAge();

// // // Person.prototype.lastName = 'Smith';

// // // console.log(john.lastName);
// // // console.log(jane.lastName);
// // // console.log(mark.lastName);
// // //위에서 정의해준데로 셋 다 Smith 즉 생성한 모든 인스턴스들의 lastName 프로퍼티를 상속받았다.

// // // Now down here we have something called the proto.
// // // And this is, in fact, the prototype of the john object
// // //__proto__ 는 그 객체의 프로토타입을 의미한다.

// // //Object.create

// // // var personProto = {
// // //   calculateAge: function(){
// // //     console.log(2020-this.yearOfBirth);
// // //   }
// // // };

// // // var john = Object.create(personProto);
// // // john.name = 'John';
// // // john.yearOfBirth = 1990;
// // // john.job ='teacher';

// // // var jane = Object.create(personProto,{
// // //   name:{value:'Jane'},
// // //   yearOfBirth:{value:1969},
// // //   job:{value:'desinger'}
// // // });
// // //Object.create()을 이용하면 어떤 것을 프로토타입으로 정할 것인지 보여주기 때문에
// // //복잡한 상속관계를 함수생성자보다 쉽게 보여준다.
// // // Actually, one of the biggest benefits of object.create is
// // // that it allows us to implement
// // // a really complex inheritant structures in an easier way
// // // than function constructors because it allows us
// // // to directly specify which object should be a prototype.

// // // //Primitve
// // // var a = 23;
// // // var b = a;
// // // a = 46;
// // // console.log(a); //46
// // // console.log(b); // 23
// // // //프리미티브의 경우 데이터 그대로를 가져와 복사하는 것이기 때문에 a 값의 변화가 b에 영향을 주진않는다.

// // // //Object
// // // var obj1 = {
// // //   name: 'John',
// // //   age :26
// // // };
// // // var obj2 = obj1;
// // // obj1.age = 30;
// // // console.log(obj1.age);
// // // console.log(obj2.age);

// // // //Functions
// // // var age =27;
// // // var obj ={
// // //   name:'Jonas',
// // //   city:'Lisbon'
// // // };

// // // function change(a,b){
// // //   a = 30;
// // //   b.city = 'San Francisco'
// // //   console.log(a);
// // // }

// // // change(age,obj)

// // // console.log(age); // 27
// // // console.log(obj.city); // San Fransisco

// // //Lectuer: Passing functions as arguments
// // var years = [1999, 1965, 1937, 2005, 1998];

// // function arrayCalc(arr, fn) { // fn을 콜백함수로 사용한다.
// //   var arrRes = [];
// //   for(var i = 0;i < arr.length;i++){
// //     arrRes.push(fn(arr[i]));
// //   }
// //   return arrRes;
// // }

// // function calculateAge(el){
// //   return 2020 - el;

// // }

// // function isFullAge(el){

// //   return el >= 18;
// // }

// // function maxHeartRate(el){ //나이
// //   if(el>=18 && el <=81){
// //   return Math.round(206.9 - (0.67 * el));
// //   }
// //   return -1;
// // }

// // var ages = arrayCalc(years,calculateAge); //나중에 호출할것이기 때문에 calculateAge()라고 쓰지 않는다.

// // var fullAges = arrayCalc(ages,isFullAge);

// // var rates = arrayCalc(ages,maxHeartRate);

// // console.log(ages);
// // console.log(fullAges);
// // console.log(rates);

// // //generic function생성후 각각 요소를 계산해주는 함수를 이용했다.
// // //하나의 큰 함수를 만드는것보다 가독성이나 모듈화되어있어서 좋다.

// // //Functions returning functions
// // function interviewQuestion(job){ //각 경우에 따라 알맞는 함수로 리턴해준다.
// //   if(job === 'designer'){
// //     return function(name){
// //       console.log(name+', can you please explain what UX design is?');
// //     }
// //   }else if(job ==='teacher'){
// //     return function(name){
// //       console.log('What subject do you teach, '+name+'?');
// //     }
// //   }else{
// //     return function(name){
// //       console.log('Hello '+name+', What do you do?');
// //     }
// //   }
// // }

// // var teacherQuestion = interviewQuestion('teacher'); //teacherQuestion가 함수가 된다.
// // var desingerQuestion = interviewQuestion('designer'); //desingerQuestion이 함수가 된다.

// // teacherQuestion('John');
// // desingerQuestion('John');
// // desingerQuestion('Jane');
// // desingerQuestion('Mark');
// // desingerQuestion('Mike');

// // teacherQuestion('Mark');// 변수로 함수를 리터받은 후 사용
// // interviewQuestion('teacher')('Mark'); //변수로 저장안하고 바로 함수처럼 사용해도된다.

// // //IIFE
// // // function game(){
// // //   var score = Math.random()*10;
// // //   console.log(score>=5);
// // // }

// // // game();

// // (function (){
// //   var score = Math.random()*10;
// //   console.log(score>=5);
// // })();

// // // we can no longer access the score variable from the outside,
// // // function(){

// // // }

// // // console.log(score);

// // (function (goodLuck){
// //   var score = Math.random()*10;
// //   console.log(score>=5-goodLuck);
// // })(5); //5가 goodluck 에 들어감

// // // in this case we are not using the function
// // // to create a piece of reusable code,
// // // all we want here, is to create a new scope,
// // // that is hidden from the outside scope,
// // // so where we can safely put variables.
// // // And with this, we obtain data privacy,

// function retirement(retirementAge){

//   var a =' years left until retirement.';

//   return function(yearofBirth){
//     var age =2020 - yearofBirth;
//     console.log((retirementAge - age)+a);
//   }
// }

// var retirementUS = retirement(66);
// //retirement 함수가 끝나면 익명함수 밖에 정의된 a에 대한 정보도 없어져야하는데 그렇지 않고 retirementUS에서도 변수 a를 사용하는데 문제가 없다.
// // 이 개념을 클로저라고한다.
// retirementUS(1990);

// retirement(66)(1990);

// // Okay, and then the function returns.
// // So, after the function returns,
// // now the execution context
// // of the retirement function is effectively gone,
// // and with it, the variable object
// // and the entire scope chain should be gone, right?
// // Actually, no.
// // The secret to closures is that,
// // even after a function returns,
// // and execution context is gone,
// // the variable object is still there.
// // It's not gone.

// function interviewQuestion(job) {
//   return function(name) {
//       if (job === 'designer') {
//           console.log(name + ', can you please explain what UX design is?');
//       } else if (job === 'teacher') {
//           console.log('What subject do you teach, ' + name + '?');
//       } else {
//           console.log('Hello ' + name + ', what do you do?');
//       }
//   }
// }

// interviewQuestion('teacher')('John');

// var interviewDesiger = interviewQuestion('designer');
// var interviewTeacher = interviewQuestion('teacher');
// var interviewPerson = interviewQuestion('engineer');

// interviewDesiger('Oh');
// interviewTeacher('SSabal');
// interviewPerson('Dave');

//Bind, call and apply
var john = {
  name: "john",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm a " +
          this.name +
          ", I 'm a " +
          this.job +
          "and I 'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm a " +
          this.name +
          ", I 'm a " +
          this.job +
          " and I 'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay
      );
    }
  },
};

var emily = {
  name:'Emily',
  age : 35,
  job: 'designer'
};

john.presentation("formal", "morning");

john.presentation.call(emily,'friendly','afternoon'); //call 을 이용해서 this를 다른 Object로 변경가능하다.

// john.presentation.apply(emily,['friendly','afternoon']); //apply는 call과 같은 역할을 하지만 두번째 매개변수를 배열로 받는다.
//즉 call은 인자 하나 하나,  apply는 인자 리스트를 전달한다.


//bind 메소드 함수를 리턴한다.
var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('evening');
johnFriendly('night');
//So again, bind allows us to preset some arguments here,
//이렇게 파라미터 수보다 적은 수의 파라미터를 인자로 받으면서 누락된 파라미터를 인자로 받는 기법을 커링이라고한다.

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');





var years = [1999, 1965, 1937, 2001, 1998];

function arrayCalc(arr, fn) { // fn을 콜백함수로 사용한다.
  var arrRes = [];
  for(var i = 0;i < arr.length;i++){
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el){
  return 2020 - el;

}

function isFullAge(limit,el){

  return el >= limit;
}
var ages = arrayCalc(years,calculateAge);
var fullKorea = arrayCalc(ages,isFullAge.bind(this,20)); // 한국 성인나이는 20이니까 bind를 이용해 limit 매개변수에 20을 넣어준다.

console.log(ages);
console.log(fullKorea);