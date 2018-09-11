var backgroundToggle = document.getElementById('slider');
var background = document.getElementsByClassName('background');
var shake = document.getElementById('shake');
var history = document.getElementById('history');
var resume = document.getElementById('resume');
var arrow = document.getElementById('arrow');
var titles = document.querySelectorAll('.title');
var arrows = document.querySelectorAll('.arrows');
var item2 = document.querySelectorAll('.changeColor');
var buttons = document.querySelectorAll('button');

// Change background from night mode to day mode
// TODO: make a callable function instead of IIFE
(function setBackground() {
  backgroundToggle.addEventListener("click", () => {
    if (background[0].style.backgroundColor == "rgb(23, 28, 40)") {
      background[0].setAttribute('style', 'background: #98ff98; color: black;');
      for (let i = 0; i < item2.length; i++) {
        item2[i].setAttribute('style', 'color: black;');
      }
      for (let j = 0; j< buttons.length; j++) {
        buttons[j].setAttribute('style', 'color: black;');
      }
    } else {
      background[0].setAttribute('style', 'background: #171c28; color: white;');
      for (let i = 0; i < item2.length; i++) {
          
        item2[i].setAttribute('style', 'color: white');
      }
      for (let j = 0; j< buttons.length; j++) {
        buttons[j].setAttribute('style', 'color: white');
      }
    }
  });
})();
/*
// Shake hands with visitor
(function shakeHands(){
  shake.addEventListener("mouseover", () => {
    shake.setAttribute('style', 'position: relative; bottom: 10px;')
  });
  shake.addEventListener("mouseout", () => {
    shake.style.bottom = "0";
  });
})();


(function moveArrow(){
  resume.addEventListener("mouseover", () => {
    arrow.setAttribute('style', 'position: relative; left: 10px;');
  });
  resume.addEventListener("mouseout", () => {
    arrow.style.left = "0";
  });
})();*/

//selector1 is the element to be mousedOver
//selector2 is the element that moves
function MouseOverMove(selector1, direction, selector2 = selector1, pixels = 10) {
  selector1.addEventListener("mouseover", () => {
    selector2.setAttribute('style', `position: relative; ${direction}: ${pixels}px;`);
  });
  selector1.addEventListener("mouseout", () => {
    selector2.style[direction] = "0";
  });
}

MouseOverMove(shake, 'bottom');
MouseOverMove(resume, 'left', arrow);
for (let i = 0; i < titles.length; i++) {
  MouseOverMove(titles[i], 'left', arrows[i]);
}
