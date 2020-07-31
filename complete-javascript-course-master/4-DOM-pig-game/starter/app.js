/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0; //0 is first Player and 1 is second Player

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
//getElementById : id만을 통해서 접근하며 앞에 #을 붙이지않아도된다. querySelector보다 속도면에서도 더 빠르다.

//css에서 선택하는것 처럼 이 메소드를 이용하면 자바스크립트에서 가능하다.
//textContent를 이용해 선택한 부분의 요소에 dice변수값을 저장해주었다.
//textContent는 html코드에 평문을 출력시켜주는 역할을 한다. html코드가 아닌 평문만 가능하다.

// document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'
//innerHTML을 이용해 태그문을 포함해서 출력가능하다.

var x = document.querySelector("#score-0").textContent; //html 코드에 있는 평문도 접근가능하다.
console.log(x); //score-0 아이디에 있는 요소가 출력

//화면 시작시 주사위를 지우려는 코드
document.querySelector(".dice").style.display = "none"; // css코드 수정을 위해 style이용 display property의 'none'
//And in JavaScript what we do is
// we use first the style method
// and then this is the CSS property
// and this is the CSS value
// that we attribute to this property.
function btn() {
  //Do soemthing here
}

document.querySelector(".btn-roll").addEventListener("click", btn);
//we have two arguments. The first one is the event type ,the second part is the function that will be called
// as soon as the event happens.

// then, we would simply do it like this,
// just the name of the function,
// without the parenthesis operator,
// because we don't want to call it right here.
// We want the Event Listener to call the function for us.
// And this button function
// is then called the callback function.
// And that's because it's a function that is not called by us, 우리에 의해 호출되지않고 다른 함수에 의해서 호출되는 함수: 콜백함수
// but, by another function.

//Anonymouys function 한번만 호출되는 함수를 만들 때 익명함수를 유용하게 사용가능하다.
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1.Random number
  var dice = Math.floor(Math.random() * 6) + 1; // 1부터 6까지 난수 출력

  //2.Display the result
  //주사위가 나온 값마다 다른 이미지를 출력해주어야한다.
  var diceDOM = document.querySelector(".dice"); //코드길이를 줄이기 위해 이렇게도 작성가능하다.
  diceDOM.style.display = "block"; //다시 주사위를 보이게 설정
  diceDOM.src = "dice-" + dice + ".png"; //주사위 값에 맞게 이미지를 변경해주어야하므로 이렇게 작성
  //3. Update th round score If the rolled number was not a 1 (depnd on the rule of game)
  if (dice !== 1) {
    //다른 언어에서 !=와 동일 자바스크립트에서 !=는 타입비교만..
    //Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //1이나오는 경우
    //turn over Next player
    nextPlayer();
  }
});

// getElementByID,
// instead of querySelector.
// So, this only works for IDs,
// but is faster than querySelector.
// So, sometimes, when we have IDs,

document.querySelector(".btn-hold").addEventListener("click", function () {
  // Add Current score to Global score
  scores[activePlayer] += roundScore;

  //Update the UI
  document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
  
  //Check if player won the game
  if(scores[activePlayer]>=100){
    document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none'; //승부가 나서 주사위 없애기
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    

  }else{
  //Role Dice 버튼을 눌렀을 떄 0이 나올 경우와 똑같이 플레이어를 변경해주어야함으로 함수로 만들어서 코드 중복성제거
  nextPlayer();
  }



});

function nextPlayer(){
  document.querySelector("#current-" + activePlayer).textContent = "0"; //턴 옮기기전에 0으로 변경
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); // 삼항연산자
  roundScore = 0; //현재점수 초기화

  // document.querySelector('.player-0-panel').classList.remove('active'); // active 클래스를 .player-0-panel요소에서 제거함
  // document.querySelector('.player-1-panel').classList.add('active');// active 클래스를 .player-1-panel요소에서 추기함

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //toggle은 존재하면 제거 , 존재하지않으면 추가

  document.querySelector(".dice").style.display = "none"; //턴이 종료될떄 다시 주사위 이미지를 숨겨줌
}
