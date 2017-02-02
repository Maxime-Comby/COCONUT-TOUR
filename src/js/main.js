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
  },
  {
  	"id": 2,
    "name": "Gym Suédoise",
    "url": "https://gymsuedoise.com/",
    "date": "29 Mai - 12 Juin - 26 Juin - 10 Juillet",
    "place": "Buttes Chaumont"
  },
  {
  	"id": 3,
    "name": "Gym Suédoise",
    "url": "https://gymsuedoise.com/",
    "date": "23 Mai - 30 Mai - 6 Juin - 20 Juin",
    "place": "Jardin du Luxembourg"
  },
  {
  	"id": 4,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "17 Mai",
    "place": "Pigalle"
  },
  {
  	"id": 5,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "24 Mai - 5 Juillet",
    "place": "République"
  },
  {
  	"id": 6,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "31 Mai",
    "place": "Sentier"
  },
  {
  	"id": 7,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "7 Juin",
    "place": "Champs-Élysés"
  },
  {
  	"id": 8,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "14 Juin",
    "place": "Bastille"
  },
  {
  	"id": 9,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "21 Juin",
    "place": "Belleville"
  },
  {
  	"id": 10,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "28 Juin",
    "place": "Odéon"
  },
  {
  	"id": 11,
    "name": "Adidas Runners",
    "url": "https://facebook.com/adidasRunnersParis/",
    "date": "12 Juillet",
    "place": "Jaurès"
  },
  {
  	"id": 12,
    "name": "Fnac Live Festival",
    "url": "http://www.fnac.com/fnacl1ve/",
    "date": "6 - 7 - 8 Juillet",
    "place": "Hôtel de Ville"
  },
  {
  	"id": 13,
    "name": "We Love Green",
    "url": "http://www.welovegreen.fr/",
    "date": "10 - 11 Juin",
    "place": "Vincennes" 
  }
];

for(var i in events)
{
	events[i]["pin"] = pins[i];
}

events.forEach(function(place){
	place.pin.addEventListener('click', function(){
		console.log(place);
	})
});