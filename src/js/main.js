var body = document.querySelector('body');
var body_width = body.offsetWidth;
var body_height = body.offsetHeight;
var leaf_1 = document.querySelectorAll('.leaf-1');

for(var i = 0; i < leaf_1.length; i++)
{
	leaf_1[i].style.width = (body_width)/2 + 'px';

	degree = i * 36 + Math.round(Math.random()*5);

	leaf_1[i].style.transform = 'rotate('+ degree + 'deg)';

	var random_zIndex = Math.round(Math.random()*leaf_1.length+2);

	leaf_1[i].style.zIndex = random_zIndex;
}

var leaf_2 = document.querySelectorAll('.leaf-2');

for(var i = 0; i < leaf_2.length; i++)
{
	leaf_2[i].style.width = (body_width)/2 + 'px';

	degree = i * 60 + Math.round(Math.random()*5);

	leaf_2[i].style.transform = 'rotate('+ degree + 'deg)';

	var random_zIndex = Math.round(Math.random()*leaf_2.length+5);

	leaf_2[i].style.zIndex = random_zIndex;
}
