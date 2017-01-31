var body = document.querySelector('body');
var body_width = body.offsetWidth;

var leaf = document.querySelectorAll('.leafs');

for(var i = 0; i < leaf.length; i++){
  leaf[i].style.width = (body_width+50)/2 + 'px';
  
  leaf[i].style.transform = 'rotate('+ i * 40 + 'deg)';
}