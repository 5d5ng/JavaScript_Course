/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

var score = 0;
function Question(quiz, answers, correct) {
  this.quiz = quiz;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.displayQuestion = function () {
  console.log(this.quiz);
  for (var i = 0; i < this.answers.length; i++) {
    console.log(i + ":" + this.answers[i]);
  }
};

Question.prototype.checkQuiz = function (num) {
  if (num == this.correct) {
    console.log("Correct");
    score += 5;
  } else {
    console.log("Wrong answer");
  }

  console.log("Your Score is " + score);
};



var q1 = new Question(
  "Who is the best football player in the world?",
  ["messi", "Son", "Ronaldo"],
  0
);

var q2 = new Question(
  "Who will be the greatest woman in the world?",
  ["mom", "girlfriend"],
  0
);

var q3 = new Question("Pick anything", ["1", "2"], 1);

var Qarray = [q1, q2, q3];

while(true){
var qnum = Math.floor(Math.random() * Qarray.length); //랜덤으로 문제 배정

Qarray[qnum].displayQuestion();

var ans = prompt("please select the correct answer!"); // promt 입력창
if(ans==-1)break;
console.log();
Qarray[qnum].checkQuiz(ans);
}