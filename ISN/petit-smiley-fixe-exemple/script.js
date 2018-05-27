/************* déclaration des variables ***********************

 Celles utilisables dans plusieurs fonctions différentes :

           ce sont des variables globales

********************************************************/

var img;
var i;//variable globale
var j;//variable globale
var x;
var y;
var v;


/************* la fonction "preload" ***********************

 permet de mettre une image derrière le smiley

********************************************************/

function preload() {
  img = loadImage('petit-smiley-fixe-exemple/image_fond.jpg');
}



/************* la fonction "smiley" ***********************

 dessine le smiley centré en (i,j) et de largeur maximale 50 px

********************************************************/

function smiley(i,j){

    /*** chapeau *********/

    stroke(6,17,144);//contour de mon chapeau bleu.
    fill(x,y,m);// change de couleur regulirement
    rect(i-17,j-23,35,7);//fonction qui permet de faire un rectangle
	rect(i-7,j-38,10,15);//fonction qui permet de faire un rectangle

    /******* tête ****************/
/* création d'une ellipse ellipse(x,y,a,b) où (x,y) sont les coordonnées du centre de l'ellipse, a la largeur horizontale et b la largeur verticale*/

    stroke(15,236,229);//contour de mon chapeau bleu clair.
    strokeWeight(1);//modifie l'épaisseur du contour de la forme
    fill(x,y,m); //change de couleur regulirement
    ellipse(i,j,30,30);//fonction qui permet de faire un rond


    /****** yeux ***************/
/* création d'une ellipse ellipse(x,y,a,b) où (x,y) sont les coordonnées du centre de l'ellipse, a la largeur horizontale et b la largeur verticale*/
    noStroke();//pas de contour
    fill(0,0,0);//équivalent à la couleur noir
    ellipse(i-4,j-4,5,3);//fonction qui permet de faire un rond
    ellipse(i+4,j-4,5,3);//fonction qui permet de faire un rond


    /*****  la bouche ************/
/* création d'un arc de cercle arc(x,y,a,b,angle_dep,angle_arr)où les 4 1er paramètres sont les mêmes que l'ellipse*/
    stroke(0);
    strokeWeight(1);//modifie l'épaisseur du contour de la forme
    fill(0,0,0);//équivalent à la couleur noir
    arc(i,j,12,12,radians(45),radians(135));//permet de faire un demi cercle

}




/************* la fonction "setup" ***********************

 qui sera exécutée une seule fois au "démarrage" du programme

********************************************************/


function setup() {

/*création d'une surface de dessin (canvas en anglais) de 400 pixels de large et de 400 pixels de haut.*/
    var can=createCanvas(400,600);
    can.parent('canvas');
    y=30; // initialisation de l'ordonnée initiale du smiley
    x=30;// initialisation de l'abscisse initiale du smiley
    v=5;// initialisation de la vitesse à 5
	m=5;//initialisation de la vitesse à 5
}





/****************la fonction "draw" **********************
* sera exécutée à chaque fois qu une nouvelle image sera
affichée par le navigateur
*********************************************************/


function draw() {
/* création de la couleur du fond du canvas*/
    //background(220,220,220);
    image(img,0,0,400,600);//permet d'effacer l'écran à chaque image
	
    smiley(x,y);  // appel de la foncion smiley
	
    x=x+v;  // x prend la valeur x + v
	y=y+m;  //y prend la valeur y + m

/* Test sur l'abscisse x: 	si l'abscisse est plus grand que 385 ou plus petit que 15
	le smiley fait demi-tour*/
	
    if (x+v>385 || x+v<15){ //le smiley se déplace 
        v=-v;
    }
	if (y+m>575 || y+m<15){
        m=-m;  
    }
	
}



