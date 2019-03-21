function characterPage() {
	$("#container").css("background-image", "url('img/battlefieldBlack.png')");
	
var compteur=parseInt(1);
var peutLancer = false;
		
	$("#case2").on("click", zombie);
	function zombie() {
		if(compteur==1) {
			Perso1 = Object.create(Zombie);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Zombie);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Zombie);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Zombie);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Zombie);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Zombie);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/zombie slect.png'/></div><div id='centreBas1'>Vie: "+ Zombie.vie + "<br><br> Attaque: "+ Zombie.attack + "<br><br> Coups critique: "+ Zombie.critics + "%<br><br> Points d'actions: " + Zombie.speed + "<br><br> Portee: " + Zombie.portee + "<br><br> Description: "+ Zombie.description + "</div>");
	}
	
	$("#case3").on("click", jack);
	function jack() {
		if(compteur==1) {
			Perso1 = Object.create(Jack);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Jack);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Jack);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Jack);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Jack);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Jack);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/jack slect.png'/></div><div id='centreBas1'>Vie: "+ Jack.vie + "<br><br> Attaque: "+ Jack.attack + "<br><br> Coups critique: "+ Jack.critics + "%<br><br> Points d'actions: " + Jack.speed + "<br><br> Portee: " + Jack.portee + "<br><br> Puissance du soin: "+ Jack.healPower+ "<br><br> Portee du soin: "+ Jack.healPortee  +"<br><br> Description: "+ Jack.description + "</div>");
	}
	
	$("#case4").on("click", ninja);
	function ninja() {
		if(compteur==1) {
			Perso1 = Object.create(Ninja);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Ninja);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Ninja);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Ninja);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Ninja);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Ninja);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/ninja slect.png'/></div><div id='centreBas1'>Vie: "+ Ninja.vie + "<br><br> Attaque: "+ Ninja.attack + "<br><br> Coups critique: "+ Ninja.critics + "%<br><br> Points d'actions: " + Ninja.speed + "<br><br> Portee: " + Ninja.portee + "<br><br> Description: "+ Ninja.description + "</div>");
	}
	
	$("#case7").on("click", robot);
	function robot() {
		if(compteur==1) {
			Perso1 = Object.create(Robot);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Robot);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Robot);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Robot);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Robot);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Robot);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/robot slect.png'/></div><div id='centreBas1'>Vie: "+ Robot.vie + "<br><br> Attaque: "+ Robot.attack + "<br><br> Coups critique: "+ Robot.critics + "%<br><br> Points d'actions: " + Robot.speed + "<br><br> Portee: " + Robot.portee +"<br><br> Description: "+ Robot.description + "</div>");
	}
	
	$("#case9").on("click", aventurier);
	function aventurier() {
		if(compteur==1) {
			Perso1 = Object.create(Aventurier);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Aventurier);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Aventurier);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Aventurier);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Aventurier);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Aventurier);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/aventurier slect.png'/></div><div id='centreBas1'>Vie: "+ Aventurier.vie + "<br><br> Attaque: "+ Aventurier.attack + "<br><br> Coups critique: "+ Aventurier.critics + "%<br><br> Points d'actions: " + Aventurier.speed + "<br><br> Portee: " + Aventurier.portee + "<br><br> Description: "+ Aventurier.description + "</div>");
	}
	
	$("#case8").on("click", chevalier);
	function chevalier() {
		if(compteur==1) {
			Perso1 = Object.create(Chevalier);
			$("#persoOne").css("background-image", Perso1.bandImage);
		} else if(compteur==2) {
			Perso2 = Object.create(Chevalier);
			$("#persoTwo").css("background-image", Perso2.bandImage);
		} else if(compteur==3) {
			Perso3 = Object.create(Chevalier);
			$("#persoThree").css("background-image", Perso3.bandImage);
		} else if(compteur==4) {
			Perso4 = Object.create(Chevalier);
			$("#persoFour").css("background-image", Perso4.bandImage);
		} else if(compteur==5) {
			Perso5 = Object.create(Chevalier);
			$("#persoFive").css("background-image", Perso5.bandImage);
		} else if(compteur==6) {
			Perso6 = Object.create(Chevalier);
			$("#persoSix").css("background-image", Perso6.bandImage);
		} else {}
		$("#centre1").html("<div id='centreHaut1'><img id='imgcentre' src='img/chevalier slect.png'/></div><div id='centreBas1'>Vie: "+ Chevalier.vie + "<br><br> Attaque: "+ Chevalier.attack + "<br><br> Coups critique: "+ Chevalier.critics + "%<br><br> Points d'actions: " + Chevalier.speed + "<br><br> Portee: " + Chevalier.portee + "<br><br> Description: "+ Chevalier.description + "</div>");
	}
	
	$("#case6").on("click", random);
	$("#case10").on("click", random);
	function random() {
		var alea = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
		if(alea==1) {
			zombie();
		} else if (alea==2) {
			jack();
		} else if (alea==3) {
			ninja();
		} else if (alea==4) {
			robot();
		} else if (alea==5) {
			chevalier();
		} else if (alea==6) {
			aventurier();
		} else {}
	}
	
	$("#case5").on("click", confirmer);
	function confirmer() {
		if(compteur==1) {
			if (Perso1==undefined) return;
			compteur++;
		} else if(compteur==2) {
			if (Perso2==undefined) return;
			compteur++;
		} else if(compteur==3) {
			if (Perso3==undefined) return;
			compteur++;
		} else if(compteur==4) {
			if (Perso4==undefined) return;
			compteur++;
		} else if(compteur==5) {
			if (Perso5==undefined) return;
			compteur++;
		} else if(compteur==6) {
			if (Perso6==undefined) return;
			$("#boutonDeLancement").css("opacity", "1");
			peutLancer = true;
		} else {}
	}
	
	
	$("#case1").on("click", retour);
	function retour() {
		if(compteur==1) {
			Perso1 = undefined;
			$("#persoOne").css("background-image", "");
		} else if(compteur==2) {
			Perso1 = undefined;
			$("#persoOne").css("background-image", "");
			$("#persoTwo").css("background-image", "");
			compteur--;
		} else if(compteur==3) {
			Perso2 = undefined;
			$("#persoTwo").css("background-image", "");
			$("#persoThree").css("background-image", "");
			compteur--;
		} else if(compteur==4) {
			Perso3 = undefined;
			$("#persoThree").css("background-image", "");
			$("#persoFour").css("background-image", "");
			compteur--;
		} else if(compteur==5) {	
			Perso4 = undefined;
			$("#persoFour").css("background-image", "");
			$("#persoFive").css("background-image", "");
			compteur--;
		} else if(compteur==6&&peutLancer==false) {
			Perso5 = undefined;
			$("#persoFive").css("background-image", "");
			$("#persoSix").css("background-image", "");
			compteur--;
		} else if(compteur==6&&peutLancer==true) {
			Perso6 = undefined;
			$("#persoSix").css("background-image", "");
			compteur--;
			$("#boutonDeLancement").css("opacity", "0.5");
			peutLancer = false
		} else {}
	}
	
	$("#boutonDeLancement").on("click", boutonDeLancement);
	function boutonDeLancement() {
		if(peutLancer==true) {
			$("#container").html(page3);
			mapPage();
		}
	}
}
