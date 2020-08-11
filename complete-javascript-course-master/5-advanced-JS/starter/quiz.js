/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
(function(){  //전역 스코프에 방해가 되지않게 즉시호출함수표현식 사용
  function Question(question,answer,correct){ // function constructor
    this.question = question; // 질문 
    this.answer = answer; // 정답후보
    this.correct = correct; // 정답번호
    
  }

  Question.prototype.displayQ = function(){ //프로토타입을 이용해 메소드 추가
    console.log(this.question);
    for(var i=0;i<this.answer.length;i++){
      console.log(i+'. '+this.answer[i]);
    }
    
  };

  Question.prototype.chkAns = function(input){
    var res = input==this.correct ? 'Correct!':'Wrong --';
    console.log(res);

  }
  var q1 = new Question("Who is the best football player in the world?",['messi','Son','Ronaldo'],0);
  var q2 = new Question('Who will be the greatest woman in the world?',['mom','girlfriend'],1);
  var q3 = new Question('Pick anything',['1','2'],1);

  var Qarray = [q1,q2,q3];


  
  var qnum = Math.floor(Math.random()*Qarray.length); //랜덤으로 문제 배정

  Qarray[qnum].displayQ();

  var ans = prompt('please select the correct answer!'); // promt 입력창

  Qarray[qnum].chkAns(ans);
})();