var basket_items = []

function item(product, amount, cristal, transmitter, lens){
	this.product = product;
	this.amount = amount;
	this.cristal = cristal;
	this.transmitter = transmitter;
	this.lens = lens;
}


function saber(color, number, name, text, price){
	this.color = color;
	this.number = number;
	this.name = name;
	this.text = text;
	this.price = price;
}


function options(number, text, price, src){
	this.number = number;
	this.text = text;
	this.price = price;
	this.src = src;
}



var blue = [
	
	new saber("blue", 1, "Sabre Anakin Skywalker", "Ce sabre est la propriété d’Anakin qu’il a récupéré après son duel avec Obi-Wan. Il sera finalement donné par Obi-Wan à Luke. Il est le premier sabre laser jamais déclenché à l’écran.", 10000),

	new saber("blue", 2, "Sabre Obi-wan Kenobi", "La poignée originale a été créée à partir d'un flash graflex 3 cells, une grenade à fusil de la Première Guerre mondiale, une poignée du robinet Armitage Shanks, la plaque de passage d'une calculatrice et un tuyau d'équilibre du moteur de jet Derwent pour l’émetteur.", 9999),

	new saber("blue",3, "Sabre Ezra's Blaster", "La forme unique de la poignée est dû au sabre étant à la fois sabre laser et blaster. Erza était pas encore aptes à dévier les tirs de blaster.",8200),

	new saber("blue",4, "Sabre Ki-Adi Mundi", "Le premier sabre laser de Ki-Adi-Mundi était de couleur violette, mais étant un maître Jedi, dans 'The Clone Wars' et 'L'Attaque des clones' il a été montré de couleur bleu.",6400)

];


var green = [
	
	new saber("green", 1, "Sabre Qui-Gon Jinn", "Ce sabre est la propriété d’Anakin qu’il a récupéré après son duel avec Obi-Wan. Il sera finalement donné par Obi-Wan à Luke. Il est le premier sabre laser jamais déclenché à l’écran.", 8200),

	new saber("green", 2, "Sabre Yoda", "Yoda a utilisé ce sabre, de taille plus petite que la normale  mais ayant de grande compétence. Grand Maître Yoda est considéré comme l'un des plus grands épéistes dans l'univers de Star Wars.", 11500),

	new saber("green",3, "Sabre Luke Skywalker", "Luke a finalisé la construction de son sabre dans la cave de tatooine.",12500),

	new saber("green",4, "Sabre Ahsoka Tano", "Ahsoka a d'abord utilisé son sabre court dans l'épisode 'Autel de Mortis'. Ce fut la première apparition canonique d'un sabre de couleur jaune.",8200)

];


var others = [
	
	new saber("others", 1, "Sabre Mace Windu", "Ce sabre a été le premier sabre laser n’étant pas Bleu, Rouge ou Vert. Ce qui faisait de lui un sabre très particulier.", 7300),

	new saber("others",2, "Sabre Ahsoka Tano's", "Les sabres d’Ahsoka servent à refléter sa non-affiliation avec les Jedi.",8200)

];


var red = [
	
	new saber("red", 1, "Sabre Darth Maul", "Le sabre laser de Maul n’était pas vraiment fait en une seule pièce, à la place il y avait deux sabres ayant une lame des deux cotés conjoint au manche. C’est la raison pour laquelle il fonctionnait encore après avoir été cassé en deux par Owi-Wan.", 10000),

	new saber("red", 2, "Sabre Count Dooku", "Le sabre laser de Dooku était censé représenter un sabre de quelqu’un de plus âgé et donc plus sophistiqué. La poignée incurvée a été conçu pour ressembler à une poignée de lance, jusqu'à la garde en forme de griffe.", 10500),

	new saber("red",3, "Sabre Darth Sidious", "En dépit d'être l'un des meilleurs épéiste dans la galaxie, Darth Sidious préfère utiliser la manipulation et sa maîtrise de la Force pour combattre les ennemis.",11000),

	new saber("red",4, "Sabre Darth Vader", "Le sabre d'origine utilisée dans 'A New Hope & The Empire Strikes Back' a été perdu. La poignée du sabre utilisé dans le Retour du Jedi est considéré comme un sabre «sosie» ou une version modifiée du sabre d’Anakin et et Luke à partir des deux premiers films.",12000),

	new saber("red",5, "Sabre The Inouisitor", "L'émetteur en forme d’anneaux est capable de se détacher partiellement de la poignée cylindrique, permettant aux lames de tourner autour de la poignée.",11000),

	new saber("red",6, "Sabre Asajj Ventress", "Les sabres laser appartenait à l'origine Komari Vosa",9800),

	new saber("red",7, "Sabre Kylo Ren", "C’est un «modèle imparfait», la lame et la garde croix semble être déformées et instable lors de l’activation du sabre laser.",9800),

	new saber("red",8, "Sabre Savage Opress", "Bien que similaire au sabre personnel de Darth Maul dans la forme, l'apparence de sabre Savage se rapproche plus du sabre laser de Dark Tyranu, et plus particulièrement par rapport aux gardes d'émetteur sur les deux extrémités.",7300)

];


var exclu = new saber("exclu", 1, "Véritable sabre d'Obi-wan Kenobi", "Pas de description");

var cristal = [
	
	new options(1, "Cristaux de Luxume : provenant du monde d'Ambria, ce cristal possède un mode de création très particulier. Le monde où il se trouve est contrôlé par le Côté Obscur, et seul un Jedi ou un Sith pourra créer un cristal renfermant une grande puissance.", 700, "../resources/options/cris1.png"),

	new options(2, "Cistaux d’Adégan : Cristal peu commun, apparu depuis l’explosion d’une carrière d’exploitation d’Adégan et d’Ilum mais il reste toutefois très puissant et accessible à tout combattant", 500, "../resources/options/cris2-o.png"),

	new options(3, "Cristaux Ilum : A l’instar du cristal d’Adégan, l’Ilum reste une pierre puissante parfaite pour intensifié la luminosité de sa d’lame.",500, "../resources/options/cris3-o.png"),

	new options(4, "Cristal de Solaris : est un cristal légendaire qui est, paraît-il, le plus puissant de tous les cristaux connus à ce jour. Il est conseillé pour les combattant de niveau expert",800, "../resources/options/cris4-0.png")

];


var transmitter = [
	
	new options(1, "Émetteur de parade 1 : Cet émetteur à été fait dans le but de mieux parer les tirs de blaster il est donc efficace contre les attaques à distance", 500, "../resources/options/trans1.png"),

	new options(2, "Émetteur de parade 2 : Celui-ci contrairement au précèdent, à été optimisé pour les combats au corps à corps", 500, "../resources/options/trans2-o.png"),

	new options(3, "Émetteur de désorde nerveux : Cet émetteur projette un rayon qui perturbe le système nerveux de la victime à chaque contact", 700, "../resources/options/trans3-o.png"),

	new options(4, "Émetteur Phobium : Crée pour les duellistes très agressif, cet émetteur est plus lourd et moins maniable qu’un émetteur de de désordre nerveux mais il perturbe d’avantage le système nerveux",800, "../resources/options/trans4-0.png")

];


var lens = [
	
	new options(1, "Lentille vibratoire : Cette lentille vibre très rapidement, ce qui donne une lame moins stable mais plus meurtière ", 800, "../resources/options/lens1.png"),

	new options(2, "Lentille de duel d’Ossus : C’esdet une lentille de précision expert , elle est utile lorsque le contrôle totale de la lame est requis", 700, "../resources/options/lens2-o.png"),

	new options(3, "Lentille d’Adégan : C’est une lentille de précision de niveau novice, elle est utile pour les combattants débutant", 500, "../resources/options/lens4-o.png"),

	new options(4, "Lentille de rayon à gemme : concentre la puissance énergétique  dans la lame la rendant plus puissante",700, "../resources/options/lens4-o.png")

];