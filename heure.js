var heuresDiv = document.querySelector('.heures');
var dateDiv = document.querySelector('.date');

var affichageHeure = function(){
	//toutes les variables
	var today, annee, listeMois, mois, listeJours, jourNUmero, jourNom, heures, minutes, secondes, deuxChiffres;
	
	//récup de la date
	today = new Date();
	
	//récup de l'année
	annee = today.getFullYear();
	
	//récup du mois
	listeMois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Decembre",];
	mois = listeMois[today.getMonth()];
	
	jourNUmero = today.getDate();
	
	listeJours= ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
	jourNom = listeJours[today.getDay()];
	deuxChiffres = function(element){
		if(element < 10){
			return element = "0" + element;
		}
		else{
			return element;
		}
	}
	
	heures = deuxChiffres(today.getHours());
	
	minutes = deuxChiffres(today.getMinutes());
	
	secondes = deuxChiffres(today.getSeconds());
	
	heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
	//dateDiv.textContent = jourNom + "," + jourNUmero + "," + mois + "," + annee;
	
	setTimeout(affichageHeure, 1000);
}
affichageHeure();