element = document.querySelector(".increase");
var nb = parseInt(element.innerHTML);
element.innerHTML=0;
var newnb = 500;
var speed = 1;
increaseKills();

function increaseKills() {
  newnb--;
  if (newnb < 175) {
    speed += 5;
  }
  element.innerHTML=newnb;
  if (newnb > nb) {
    setTimeout("increaseKills();",speed);
  }
}