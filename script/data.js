function saber(number, name, text, price){
	this.number = number;
	this.name = name;
	this.text = text;
	this.price = price;
}

function options(name, number, text, price){
	this.name = name;
	this.number = number;
	this.text = text;
	this.price = price;
}


var blue_1 = new saber(
	1, 
	"Sabre Anakin Skywalker", 
	"Ce sabre est la propriété d’Anakin qu’il a récupéré après son duel avec Obi-Wan. Il sera finalement donné par Obi-Wan à Luke. Il est le premier sabre laser jamais déclenché à l’écran.",
	10000
);

var blue_2 = new saber(
	2, 
	"Sabre Obi-wan Kenobi", 
	"La poignée originale a été créée à partir d'un flash graflex 3 cells, une grenade à fusil de la Première Guerre mondiale, une poignée du robinet Armitage Shanks, la plaque de passage d'une calculatrice et un tuyau d'équilibre du moteur de jet Derwent pour l’émetteur.",
	9999
);
