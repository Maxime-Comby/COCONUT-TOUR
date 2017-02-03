/***********************************
*
* Leaf positionning for animation
*
************************************/

// select html body element
var body = document.querySelector('body');
 // get width
var body_width = body.offsetWidth;

// select first type of leaf
var leaf_1 = document.querySelectorAll('.leaf-1');

// loop through leaf_1 array
for(var i = 0; i < leaf_1.length; i++)
{
	//set picture width on half of the body width
	leaf_1[i].style.width = (body_width)/2 + 'px';

	// "random" degree
	var degree = i * 36 + Math.round(Math.random()*5);
	// apply rotate base on degree
	leaf_1[i].style.transform = 'rotate('+ degree + 'deg)';

	// random z-index
	var random_zIndex = Math.round(Math.random()*leaf_1.length+2);
	// aplly z-index
	leaf_1[i].style.zIndex = random_zIndex;
}

// select second type of leaf
var leaf_2 = document.querySelectorAll('.leaf-2');

// loop through leaf_2 array
for(var i = 0; i < leaf_2.length; i++)
{
	//set picture width on half of the body width
	leaf_2[i].style.width = (body_width)/2 + 'px';

	// "random" degree
	degree = i * 60 + Math.round(Math.random()*5);
	// apply rotate base on degree
	leaf_2[i].style.transform = 'rotate('+ degree + 'deg)';
	
	// random z-index
	var random_zIndex = Math.round(Math.random()*leaf_2.length+5);
	// aplly z-index
	leaf_2[i].style.zIndex = random_zIndex;
}

/***********************************
*
* Tour map system
*
************************************/

var pins = document.querySelectorAll('.pin');

var events = [
  {
  	"id": 1, 
    "name": "Gym Suédoise",
    "url": "https://gymsuedoise.com/",
    "date": "22 Mai - 5 Juin - 19 Juin - 3 Juillet",
    "place": "Parc Monceau",
    "picture" : "src/images/parc-monceau.jpg"
  },
  {
  	"id": 2,
    "name": "Gym Suédoise",
    "url": "https://gymsuedoise.com/",
    "date": "29 Mai - 12 Juin - 26 Juin - 10 Juillet",
    "place": "Buttes Chaumont",
    "picture" : "src/images/buttes-chaumont.jpg"
  },
  {
  	"id": 3,
    "name": "Gym Suédoise",
    "url": "https://gymsuedoise.com/",
    "date": "23 Mai - 30 Mai - 6 Juin - 20 Juin",
    "place": "Jardin du Luxembourg",
    "picture" : "src/images/jardin-luxembourg.jpg"
  },
  {
  	"id": 4,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "17 Mai",
    "place": "Pigalle",
    "picture" : "src/images/pigalle.jpg"
  },
  {
  	"id": 5,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "24 Mai - 5 Juillet",
    "place": "République",
    "picture" : "src/images/republique.jpg"
  },
  {
  	"id": 6,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "31 Mai",
    "place": "Sentier",
    "picture" : "src/images/sentier.jpg"
  },
  {
  	"id": 7,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "7 Juin",
    "place": "Champs-Élysés",
    "picture" : "src/images/champs-elysees.jpg"
  },
  {
  	"id": 8,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "14 Juin",
    "place": "Bastille",
    "picture" : "src/images/bastille.jpg"
  },
  {
  	"id": 9,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "21 Juin",
    "place": "Belleville",
    "picture" : "src/images/belleville.jpg"
  },
  {
  	"id": 10,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "28 Juin",
    "place": "Odéon",
    "picture" : "src/images/odeon.jpg"
  },
  {
  	"id": 11,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "12 Juillet",
    "place": "Jaurès",
    "picture" : "src/images/jaures.jpg"
  },
  {
  	"id": 12,
    "name": "Fnac Live Festival",
    "url": "http://www.fnac.com/fnacl1ve/",
    "date": "6 - 7 - 8 Juillet",
    "place": "Hôtel de Ville",
    "picture" : "src/images/hotel-ville.jpg"
  },
  {
  	"id": 13,
    "name": "We Love Green",
    "url": "http://www.welovegreen.fr/",
    "date": "10 - 11 Juin",
    "place": "Vincennes",
    "picture" : "src/images/vincennes.jpg"
  }
];

var map_container = document.querySelector('.map');
var event_container = document.querySelectorAll('.map>div');
for(var i in events)
{
	events[i]["pin"] = pins[i];
	builtPopUp(events[i], i);
}

function builtPopUp(e, i){
	var div = document.createElement('div');
	div.className = "pop-up";

	div.style.top = pins[i].offsetTop - 270 + 'px';
	div.style.left = pins[i].offsetLeft - 300 +  'px';

	var div_event_info = document.createElement('div');
	var div_event_picture = document.createElement('div');

	div_event_info.className = 'event-info';
	div_event_picture.className = 'event-picture';

	var event_title = document.createElement('span');
	event_title.className = 'event-title';
	var event_place = document.createElement('span');
	event_place.className = 'event-place';
	var event_date = document.createElement('span');
	event_date.className = 'event-date';
	var event_link = document.createElement('a');
	event_link.className = 'event-link';
	event_link.setAttribute('href', e.url);
	var event_picture = document.createElement('img');
	event_picture.src = e.picture;

	event_title.innerHTML = e.name + '<br>';
	event_place.innerHTML += e.place + '<br>';
	event_date.innerHTML += e.date + '<br>';
	event_link.innerHTML = 'EN SAVOIR PLUS';

	div_event_info.appendChild(event_title);
	div_event_info.appendChild(event_place);
	div_event_info.appendChild(event_date);
	div_event_info.appendChild(event_link);
	div_event_picture.appendChild(event_picture);
	div.appendChild(div_event_info);
	div.appendChild(div_event_picture);

	event_container[i].appendChild(div);
}

events.forEach(function(place){
	place.pin.parentNode.addEventListener('mouseover', function(){
		displayPopUp(place);
	})

	place.pin.parentNode.addEventListener('mouseout', function(){
		removePopUp(place);
	})
});

var pop_up = document.querySelectorAll('.pop-up');

function displayPopUp(p){
	pop_up[p.id-1].style.zIndex = '100';
	pop_up[p.id-1].style.opacity = '1';
	pop_up[p.id-1].style.transform = 'translateY(-2%)';
}

function removePopUp(p){
	pop_up[p.id-1].style.zIndex = '-10';
	pop_up[p.id-1].style.opacity = '0';
	pop_up[p.id-1].style.transform = 'translateY(2%)';
}

/******************

SLIDER

******************/

var imgs = document.querySelectorAll('.slider-container>img');
var index = 0;
var z_index = 10;

setInterval(function(){
	imgs[index].style.zIndex = z_index;
	index++;
	z_index++;
	if(index >= imgs.length){
		index = 0;
	}
}, 2000)

