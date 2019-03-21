//global SpriteVar 
var turn = 1;
var selectedPerso;
var animate = false;
var movingTime = 1000;

function gamePage() {
	
	//Outil de génération de la map

	$("#container").css("background-image", "url('img/battlefield.png')");

	var taille = ($("#container").width() - 960)/2 ;
	$(".sideBox").css("width", taille);
	
	var hauteur = ($("#container").height() - 640)/1.8;
	$("#titleBox").css("height", hauteur);
	
	var hauteur2 = ($("#container").height() - 640) - hauteur;
	
	function mapGenerator(x, y) {
		var map = "";
		for(i=0; i<y; i++) {
			map += "<tr>";
			for(j=0; j<x; j++) {
				map += "<td id=c"+ j +"_" + i + "></td>";
			}
			map += "</tr>";
		} console.log(map);
		document.getElementById("tableauMap").innerHTML = map;
		$("tr").css("width", 100/x +"%"); 
		$("tr").css("height", 100/y +"%");
		
		$("td").css("width", 100/x +"%");
		$("td").css("height", 100/y +"%");
	}
	
	//mapGenerator(20,20);

	function mapGeneratorSquare() {
		var map = "";
		var caseSquare = 64;
		
		for(i=0; i<10; i++) {
			map += "<tr>";
			for(j=0; j<15; j++) {
				map += "<td id='c"+ j +"_" + i + "' class='case'></td>";
			}
			map += "</tr>";
		} console.log(map);
		document.getElementById("tableauMap").innerHTML = map;
		/*$("tr").css("width", caseSquare +"px"); 
		$("tr").css("height", 100 +"%");
		
		$("td").css("width", caseSquare +"px");
		$("td").css("height", caseSquare +"px");0*/
	}
	
	mapGeneratorSquare();

	console.log($("#cardBox1").html());

	//Spawn des différents personnages
	$("table").css("background-image", map.texture);
	
	function spawn() {
		if(map.horizontal==false) {
			$("#c" + map.spawnOneX + "_" + (map.spawnOneY - 1)).html('<div id="perso1" class="perso"></div>');
			$("#perso1").css("background-image", Perso1.sprite);
			Perso1.posX = map.spawnOneX;
			Perso1.posY = map.spawnOneY - 1;
			Perso1.perso = "#perso1";
			Perso1.team = 3;
			map.carte[Perso1.posY][Perso1.posX] = 3;
			
			$("#c" + map.spawnOneX + "_" + (map.spawnOneY - 0)).html('<div id="perso2" class="perso"></div>');
			$("#perso2").css("background-image", Perso2.sprite);                                                                                                                             
			Perso2.posX = map.spawnOneX;
			Perso2.posY = map.spawnOneY;
			Perso2.perso = "#perso2";
			Perso2.team = 3;
			map.carte[Perso2.posY][Perso2.posX] = 3;
			
			$("#c" + map.spawnOneX + "_" + (map.spawnOneY + 1)).html('<div id="perso3" class="perso"></div>');
			$("#perso3").css("background-image", Perso3.sprite);
			Perso3.posX = map.spawnOneX;
			Perso3.posY = map.spawnOneY + 1;
			Perso3.perso = "#perso3";
			Perso3.team = 3;
			map.carte[Perso3.posY][Perso3.posX] = 3;
			
			$("#c" + map.spawnTwoX + "_" + (map.spawnTwoY - 1)).html('<div id="perso4" class="perso"></div>');
			$("#perso4").css("background-image", Perso4.sprite);
			Perso4.posX = map.spawnTwoX;
			Perso4.posY = map.spawnTwoY - 1;
			Perso4.perso = "#perso4";
			Perso4.team = 4;
			map.carte[Perso4.posY][Perso4.posX] = 4;
			
			$("#c" + map.spawnTwoX + "_" + (map.spawnTwoY - 0)).html('<div id="perso5" class="perso"></div>');
			$("#perso5").css("background-image", Perso5.sprite);
			Perso5.posX = map.spawnTwoX;
			Perso5.posY = map.spawnTwoY;
			Perso5.perso = "#perso5";
			Perso5.team = 4;
			map.carte[Perso5.posY][Perso5.posX] = 4;
			
			$("#c" + map.spawnTwoX + "_" + (map.spawnTwoY + 1)).html('<div id="perso6" class="perso"></div>');
			$("#perso6").css("background-image", Perso6.sprite);
			Perso6.posX = map.spawnTwoX;
			Perso6.posY = map.spawnTwoY + 1;
			Perso6.perso = "#perso6";
			Perso6.team = 4;
			map.carte[Perso6.posY][Perso6.posX] = 4;
		} else if(map.horizontal==true) {
			$("#c" + (map.spawnOneX - 1) + "_" + map.spawnOneY).html('<div id="perso1" class="perso"></div>');
			$("#perso1").css("background-image", Perso1.sprite);
			Perso1.posX = map.spawnOneX - 1;
			Perso1.posY = map.spawnOneY ;
			Perso1.perso = "#perso1";
			Perso1.team = 3;
			map.carte[Perso1.posY][Perso1.posX] = 3;
			
			$("#c" + map.spawnOneX  + "_" + map.spawnOneY).html('<div id="perso2" class="perso"></div>');
			$("#perso2").css("background-image", Perso2.sprite);                                                                                                                             
			Perso2.posX = map.spawnOneX;
			Perso2.posY = map.spawnOneY;
			Perso2.perso = "#perso2";
			Perso2.team = 3;
			map.carte[Perso2.posY][Perso2.posX] = 3;
			
			$("#c" + (map.spawnOneX + 1) + "_" + map.spawnOneY).html('<div id="perso3" class="perso"></div>');
			$("#perso3").css("background-image", Perso3.sprite);
			Perso3.posX = map.spawnOneX + 1;
			Perso3.posY = map.spawnOneY;
			Perso3.perso = "#perso3";
			Perso3.team = 3;
			map.carte[Perso3.posY][Perso3.posX] = 3;
			
			$("#c" + (map.spawnTwoX - 1) + "_" + map.spawnTwoY).html('<div id="perso4" class="perso"></div>');
			$("#perso4").css("background-image", Perso4.sprite);
			Perso4.posX = map.spawnTwoX - 1;
			Perso4.posY = map.spawnTwoY;
			Perso4.perso = "#perso4";
			Perso4.team = 4;
			map.carte[Perso4.posY][Perso4.posX] = 4;
			
			$("#c" + map.spawnTwoX + "_" + (map.spawnTwoY - 0)).html('<div id="perso5" class="perso"></div>');
			$("#perso5").css("background-image", Perso5.sprite);
			Perso5.posX = map.spawnTwoX;
			Perso5.posY = map.spawnTwoY;
			Perso5.perso = "#perso5";
			Perso5.team = 4;
			map.carte[Perso5.posY][Perso5.posX] = 4;
			
			$("#c" + (map.spawnTwoX +1) + "_" + map.spawnTwoY).html('<div id="perso6" class="perso"></div>');
			$("#perso6").css("background-image", Perso6.sprite);
			Perso6.posX = map.spawnTwoX + 1;
			Perso6.posY = map.spawnTwoY;
			Perso6.perso = "#perso6";
			Perso6.team = 4;
			map.carte[Perso6.posY][Perso6.posX] = 4;
		}
	}
	spawn();
	
	sprite();
	
	//Permet de définir les images et noms des persos pour les cartes d'identités sur les côtés droit et gauche de l'écran
	function identitySettings() {
		$("#identityName1").html(Perso1.nom);
		$("#identityName2").html(Perso2.nom);
		$("#identityName3").html(Perso3.nom);
		$("#identityName4").html(Perso4.nom);
		$("#identityName5").html(Perso5.nom);
		$("#identityName6").html(Perso6.nom);
		
		$("#identityImg1").css("background-image", Perso1.icon);
		$("#identityImg2").css("background-image", Perso2.icon);
		$("#identityImg3").css("background-image", Perso3.icon);
		$("#identityImg4").css("background-image", Perso4.icon);
		$("#identityImg5").css("background-image", Perso5.icon);
		$("#identityImg6").css("background-image", Perso6.icon);

	}
	identitySettings();
	
	function identityBarReload() {
		var width = (Perso1.vie*100)/Perso1.vieMax;
		$("#lifeBar1").css("width", width + "%");
		
		width = (Perso2.vie*100)/Perso2.vieMax;
		$("#lifeBar2").css("width", width + "%");
		
		width = (Perso3.vie*100)/Perso3.vieMax;
		$("#lifeBar3").css("width", width + "%");
		
		width = (Perso4.vie*100)/Perso4.vieMax;
		$("#lifeBar4").css("width", width + "%");
		
		width = (Perso5.vie*100)/Perso5.vieMax;
		$("#lifeBar5").css("width", width + "%");
		
		width = (Perso6.vie*100)/Perso6.vieMax;
		$("#lifeBar6").css("width", width + "%");
		
		width = (Perso1.restants*100)/Perso1.speed;
		$("#staminaBar1").css("width", width + "%");
		
		width = (Perso2.restants*100)/Perso2.speed;
		$("#staminaBar2").css("width", width + "%");
		
		width = (Perso3.restants*100)/Perso3.speed;
		$("#staminaBar3").css("width", width + "%");
		
		width = (Perso4.restants*100)/Perso4.speed;
		$("#staminaBar4").css("width", width + "%");
		
		width = (Perso5.restants*100)/Perso5.speed;
		$("#staminaBar5").css("width", width + "%");
		
		width = (Perso6.restants*100)/Perso6.speed;
		$("#staminaBar6").css("width", width + "%");
	}
	identityBarReload();
	
	$('#perso1').data('JSMovieclip').loopBetween(1, 10).play(true);
	$('#perso2').data('JSMovieclip').loopBetween(1, 10).play(true);
	$('#perso3').data('JSMovieclip').loopBetween(1, 10).play(true);
	$('#perso4').data('JSMovieclip').loopBetween(11, 20).play(true);
	$('#perso5').data('JSMovieclip').loopBetween(11, 20).play(true);
	$('#perso6').data('JSMovieclip').loopBetween(11, 20).play(true);
	
	//Effet lors du survol d'une case
	/*$(".case").hover( function () {
		if(animate==false) {
			if($(this).css("background-color")=="rgba(0, 0, 0, 0)") {
				$(this).css("background-color", "rgba(173, 216, 230, 0.75)");
			} else if($(this).css("background-color")=="rgba(173, 216, 230, 0.75)") {
				$(this).css("background-color", "transparent");
			} else {
				console.log($(td).css("background-color"));
			}
		}
	});*/
	
	$("#turnButton").on("click", turnChange);
	function turnChange() {
		victoryCheck();
		if(animate!=true) {
		
			$("td").css("background-color", "initial");
			if(turn==1) {
				turn = 2
				if(Perso1.isAlive==true) $('#perso1').data('JSMovieclip').loopBetween(11, 20).play(true);
				if(Perso2.isAlive==true) $('#perso2').data('JSMovieclip').loopBetween(11, 20).play(true);
				if(Perso3.isAlive==true) $('#perso3').data('JSMovieclip').loopBetween(11, 20).play(true);
				if(Perso4.isAlive==true) $('#perso4').data('JSMovieclip').loopBetween(1, 10).play(true);
				if(Perso5.isAlive==true) $('#perso5').data('JSMovieclip').loopBetween(1, 10).play(true);
				if(Perso6.isAlive==true) $('#perso6').data('JSMovieclip').loopBetween(1, 10).play(true);
				
				Perso4.restants = Perso4.speed;
				Perso5.restants = Perso5.speed;
				Perso6.restants = Perso6.speed;
			} else if (turn==2) {
				turn = 1
				if(Perso1.isAlive==true) $('#perso1').data('JSMovieclip').loopBetween(1, 10).play(true);
				if(Perso2.isAlive==true) $('#perso2').data('JSMovieclip').loopBetween(1, 10).play(true);
				if(Perso3.isAlive==true) $('#perso3').data('JSMovieclip').loopBetween(1, 10).play(true);
				if(Perso4.isAlive==true) $('#perso4').data('JSMovieclip').loopBetween(11, 20).play(true);
				if(Perso5.isAlive==true) $('#perso5').data('JSMovieclip').loopBetween(11, 20).play(true);
				if(Perso6.isAlive==true) $('#perso6').data('JSMovieclip').loopBetween(11, 20).play(true);
				
				Perso1.restants = Perso1.speed;
				Perso2.restants = Perso2.speed;
				Perso3.restants = Perso3.speed;
			}
			animate=true;
			$("#bandContainer").html("<div id='band'>TOUR SUIVANT</div>");
			$("#band").css("color", "red");
			
			setTimeout(function(){
				animate=false;
				$("#bandContainer").html("");
			}, 1000);
		}
		identityBarReload();
	}
	
	$('.perso').on("click", function () {
		if(animate!=true) {
			if (turn==1) {
				var selected = this.id;
				if ($(this).parent().css("background-color")=="rgba(0, 0, 255, 0.5)") return;
				switch (selected) {
					case 'perso1':
						if(Perso1.restants>0) {
							$("td").css("background-color", "initial");
							$("#perso1").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso1;
							
							if(Perso1.posY-1>=0) {
								if(map.carte[Perso1.posY-1][Perso1.posX]==0) {
									$("#c" + (Perso1.posX) + "_" + (Perso1.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso1.posX+1<15) {
								if(map.carte[Perso1.posY][Perso1.posX+1]==0) {
									$("#c" + (Perso1.posX+1) + "_" + (Perso1.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso1.posY +1<10){ 
								if(map.carte[Perso1.posY+1][Perso1.posX]==0) {
									$("#c" + (Perso1.posX) + "_" + (Perso1.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso1.posX-1>=0){ 
								if(map.carte[Perso1.posY][Perso1.posX-1]==0) {
									$("#c" + (Perso1.posX-1) + "_" + (Perso1.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso1.posY-1>=0) {
								if(map.carte[Perso1.posY-1][Perso1.posX]==4) {
									$("#c" + (Perso1.posX) + "_" + (Perso1.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso1.posX+1<=15) {
								if(map.carte[Perso1.posY][Perso1.posX+1]==4) {
									$("#c" + (Perso1.posX+1) + "_" + (Perso1.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso1.posY +1<=10){ 
								if(map.carte[Perso1.posY+1][Perso1.posX]==4) {
									$("#c" + (Perso1.posX) + "_" + (Perso1.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso1.posX-1>=0){ 
								if(map.carte[Perso1.posY][Perso1.posX-1]==4) {
									$("#c" + (Perso1.posX-1) + "_" + (Perso1.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso1.posX-Perso4.posX)+Math.abs(Perso1.posY-Perso4.posY))<=Perso1.portee) {
								$(Perso4.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso1.posX-Perso5.posX)+Math.abs(Perso1.posY-Perso5.posY))<=Perso1.portee) {
								$(Perso5.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso1.posX-Perso6.posX)+Math.abs(Perso1.posY-Perso6.posY))<=Perso1.portee) {
								$(Perso6.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso1.nom=="Jack") {
								if((Math.abs(Perso1.posX-Perso2.posX)+Math.abs(Perso1.posY-Perso2.posY))<=Perso1.healPortee) {
									$(Perso2.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso1.posX-Perso3.posX)+Math.abs(Perso1.posY-Perso3.posY))<=Perso1.healPortee) {
									$(Perso3.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					case 'perso2':
						if(Perso2.restants>0) {
							$("td").css("background-color", "initial");
							$("#perso2").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso2;
							
							if(Perso2.posY-1>=0) {
								if(map.carte[Perso2.posY-1][Perso2.posX]==0) {
									$("#c" + (Perso2.posX) + "_" + (Perso2.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso2.posX+1<15) {
								if(map.carte[Perso2.posY][Perso2.posX+1]==0) {
									$("#c" + (Perso2.posX+1) + "_" + (Perso2.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso2.posY+1<10){ 
								if(map.carte[Perso2.posY+1][Perso2.posX]==0) {
									$("#c" + (Perso2.posX) + "_" + (Perso2.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso2.posX-1>=0){ 
								if(map.carte[Perso2.posY][Perso2.posX-1]==0) {
									$("#c" + (Perso2.posX-1) + "_" + (Perso2.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso2.posY-1>=0) {
								if(map.carte[Perso2.posY-1][Perso2.posX]==4) {
									$("#c" + (Perso2.posX) + "_" + (Perso2.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso2.posX+1<=15) {
								if(map.carte[Perso2.posY][Perso2.posX+1]==4) {
									$("#c" + (Perso2.posX+1) + "_" + (Perso2.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso2.posY +1<=10){ 
								if(map.carte[Perso2.posY+1][Perso2.posX]==4) {
									$("#c" + (Perso2.posX) + "_" + (Perso2.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso2.posX-1>=0){ 
								if(map.carte[Perso2.posY][Perso2.posX-1]==4) {
									$("#c" + (Perso2.posX-1) + "_" + (Perso2.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso2.posX-Perso4.posX)+Math.abs(Perso2.posY-Perso4.posY))<=Perso2.portee) {
								$(Perso4.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso2.posX-Perso5.posX)+Math.abs(Perso2.posY-Perso5.posY))<=Perso2.portee) {
								$(Perso5.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso2.posX-Perso6.posX)+Math.abs(Perso2.posY-Perso6.posY))<=Perso2.portee) {
								$(Perso6.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso2.nom=="Jack") {
								if((Math.abs(Perso2.posX-Perso1.posX)+Math.abs(Perso2.posY-Perso1.posY))<=Perso2.healPortee) {
									$(Perso1.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso2.posX-Perso3.posX)+Math.abs(Perso2.posY-Perso3.posY))<=Perso2.healPortee) {
									$(Perso3.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					case 'perso3':
						if(Perso3.restants>0) {
							$("td").css("background-color", "initial");
							$("#perso3").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso3;
							
							console.log(Perso3.posY-1);
							if(Perso3.posY-1>=0) {
								if(map.carte[Perso3.posY-1][Perso3.posX]==0) {
									$("#c" + (Perso3.posX) + "_" + (Perso3.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso3.posX+1<15) {
								if(map.carte[Perso3.posY][Perso3.posX+1]==0) {
									$("#c" + (Perso3.posX+1) + "_" + (Perso3.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							console.log(Perso3.posY+1);
							if(Perso3.posY+1<10){ 
								if(map.carte[Perso3.posY+1][Perso3.posX]==0) {
									$("#c" + (Perso3.posX) + "_" + (Perso3.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso3.posX-1>=0){ 
								if(map.carte[Perso3.posY][Perso3.posX-1]==0) {
									$("#c" + (Perso3.posX-1) + "_" + (Perso3.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso3.posY-1>=0) {
								if(map.carte[Perso3.posY-1][Perso3.posX]==4) {
									$("#c" + (Perso3.posX) + "_" + (Perso3.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso3.posX+1<=15) {
								if(map.carte[Perso3.posY][Perso3.posX+1]==4) {
									$("#c" + (Perso3.posX+1) + "_" + (Perso3.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso3.posY +1<=10){ 
								if(map.carte[Perso3.posY+1][Perso3.posX]==4) {
									$("#c" + (Perso3.posX) + "_" + (Perso3.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso3.posX-1>=0){ 
								if(map.carte[Perso3.posY][Perso3.posX-1]==4) {
									$("#c" + (Perso3.posX-1) + "_" + (Perso3.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso3.posX-Perso4.posX)+Math.abs(Perso3.posY-Perso4.posY))<=Perso3.portee) {
								$(Perso4.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso3.posX-Perso5.posX)+Math.abs(Perso3.posY-Perso5.posY))<=Perso3.portee) {
								$(Perso5.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso3.posX-Perso6.posX)+Math.abs(Perso3.posY-Perso6.posY))<=Perso3.portee) {
								$(Perso6.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso3.nom=="Jack") {
								if((Math.abs(Perso3.posX-Perso1.posX)+Math.abs(Perso3.posY-Perso1.posY))<=Perso3.healPortee) {
									$(Perso1.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso3.posX-Perso2.posX)+Math.abs(Perso3.posY-Perso2.posY))<=Perso3.healPortee) {
									$(Perso2.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					default:
						//$("td").css("background-color", "initial");
						return;
					break;
				}
			} else if (turn==2) {
				var selected = this.id;
				if ($(this).parent().css("background-color")=="rgba(0, 0, 255, 0.5)") return;
				switch (selected) {
					case 'perso4':
						if(Perso4.restants>0) {
							$("td").css("background-color", "transparent");
							$("#perso4").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso4;
												
							if(Perso4.posY-1>=0) {
								if(map.carte[Perso4.posY-1][Perso4.posX]==0) {
									$("#c" + (Perso4.posX) + "_" + (Perso4.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso4.posX+1<15) {
								if(map.carte[Perso4.posY][Perso4.posX+1]==0) {
									$("#c" + (Perso4.posX+1) + "_" + (Perso4.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso4.posY+1<10){ 
								if(map.carte[Perso4.posY+1][Perso4.posX]==0) {
									$("#c" + (Perso4.posX) + "_" + (Perso4.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso4.posX-1>=0){ 
								if(map.carte[Perso4.posY][Perso4.posX-1]==0) {
									$("#c" + (Perso4.posX-1) + "_" + (Perso4.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso4.posY-1>=0) {
								if(map.carte[Perso4.posY-1][Perso4.posX]==3) {
									$("#c" + (Perso4.posX) + "_" + (Perso4.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso4.posX+1<=15) {
								if(map.carte[Perso4.posY][Perso4.posX+1]==3) {
									$("#c" + (Perso4.posX+1) + "_" + (Perso4.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso4.posY +1<=10){ 
								if(map.carte[Perso4.posY+1][Perso4.posX]==3) {
									$("#c" + (Perso4.posX) + "_" + (Perso4.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso4.posX-1>=0){ 
								if(map.carte[Perso4.posY][Perso4.posX-1]==3) {
									$("#c" + (Perso4.posX-1) + "_" + (Perso4.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso4.posX-Perso1.posX)+Math.abs(Perso4.posY-Perso1.posY))<=Perso4.portee) {
								$(Perso1.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso4.posX-Perso2.posX)+Math.abs(Perso4.posY-Perso2.posY))<=Perso4.portee) {
								$(Perso2.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso4.posX-Perso3.posX)+Math.abs(Perso4.posY-Perso3.posY))<=Perso4.portee) {
								$(Perso3.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso4.nom=="Jack") {
								if((Math.abs(Perso4.posX-Perso5.posX)+Math.abs(Perso4.posY-Perso5.posY))<=Perso4.healPortee) {
									$(Perso5.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso4.posX-Perso6.posX)+Math.abs(Perso4.posY-Perso6.posY))<=Perso4.healPortee) {
									$(Perso6.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					case 'perso5':
						if(Perso5.restants>0) {
							$("td").css("background-color", "transparent");
							$("#perso5").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso5;
												
							if(Perso5.posY-1>=0) {
								if(map.carte[Perso5.posY-1][Perso5.posX]==0) {
									$("#c" + (Perso5.posX) + "_" + (Perso5.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso5.posX+1<15) {
								if(map.carte[Perso5.posY][Perso5.posX+1]==0) {
									$("#c" + (Perso5.posX+1) + "_" + (Perso5.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso5.posY+1<10){ 
								if(map.carte[Perso5.posY+1][Perso5.posX]==0) {
									$("#c" + (Perso5.posX) + "_" + (Perso5.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso5.posX-1>=0){ 
								if(map.carte[Perso5.posY][Perso5.posX-1]==0) {
									$("#c" + (Perso5.posX-1) + "_" + (Perso5.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso5.posY-1>=0) {
								if(map.carte[Perso5.posY-1][Perso5.posX]==3) {
									$("#c" + (Perso5.posX) + "_" + (Perso5.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso5.posX+1<=15) {
								if(map.carte[Perso5.posY][Perso5.posX+1]==3) {
									$("#c" + (Perso5.posX+1) + "_" + (Perso5.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso5.posY +1<=10){ 
								if(map.carte[Perso5.posY+1][Perso5.posX]==3) {
									$("#c" + (Perso5.posX) + "_" + (Perso5.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso5.posX-1>=0){ 
								if(map.carte[Perso5.posY][Perso5.posX-1]==3) {
									$("#c" + (Perso5.posX-1) + "_" + (Perso5.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso5.posX-Perso1.posX)+Math.abs(Perso5.posY-Perso1.posY))<=Perso5.portee) {
								$(Perso1.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso5.posX-Perso2.posX)+Math.abs(Perso5.posY-Perso2.posY))<=Perso5.portee) {
								$(Perso2.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso5.posX-Perso3.posX)+Math.abs(Perso5.posY-Perso3.posY))<=Perso5.portee) {
								$(Perso3.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso5.nom=="Jack") {
								if((Math.abs(Perso5.posX-Perso4.posX)+Math.abs(Perso5.posY-Perso4.posY))<=Perso5.healPortee) {
									$(Perso4.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso5.posX-Perso6.posX)+Math.abs(Perso5.posY-Perso6.posY))<=Perso5.healPortee) {
									$(Perso6.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					case 'perso6':
						if(Perso6.restants>0) {
							$("td").css("background-color", "transparent");
							$("#perso6").parent().css( "background-color", "rgba(0, 255, 0, 0.5)");
							selectedPerso = Perso6;
												
							if(Perso6.posY-1>=0) {
								if(map.carte[Perso6.posY-1][Perso6.posX]==0) {
									$("#c" + (Perso6.posX) + "_" + (Perso6.posY -1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso6.posX+1<15) {
								if(map.carte[Perso6.posY][Perso6.posX+1]==0) {
									$("#c" + (Perso6.posX+1) + "_" + (Perso6.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso6.posY+1<10){ 
								if(map.carte[Perso6.posY+1][Perso6.posX]==0) {
									$("#c" + (Perso6.posX) + "_" + (Perso6.posY +1)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							if(Perso6.posX-1>=0){ 
								if(map.carte[Perso6.posY][Perso6.posX-1]==0) {
									$("#c" + (Perso6.posX-1) + "_" + (Perso6.posY)).css( "background-color", "rgba(0, 255, 0, 0.5)");
								}
							}
							//
							//
							/*if(Perso6.posY-1>=0) {
								if(map.carte[Perso6.posY-1][Perso6.posX]==3) {
									$("#c" + (Perso6.posX) + "_" + (Perso6.posY -1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso6.posX+1<=15) {
								if(map.carte[Perso6.posY][Perso6.posX+1]==3) {
									$("#c" + (Perso6.posX+1) + "_" + (Perso6.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso6.posY +1<=10){ 
								if(map.carte[Perso6.posY+1][Perso6.posX]==3) {
									$("#c" + (Perso6.posX) + "_" + (Perso6.posY +1)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}
							if(Perso6.posX-1>=0){ 
								if(map.carte[Perso6.posY][Perso6.posX-1]==3) {
									$("#c" + (Perso6.posX-1) + "_" + (Perso6.posY)).css( "background-color", "rgba(255, 0, 0, 0.5)");
								}
							}*/
							
							if((Math.abs(Perso6.posX-Perso1.posX)+Math.abs(Perso6.posY-Perso1.posY))<=Perso6.portee) {
								$(Perso1.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso6.posX-Perso2.posX)+Math.abs(Perso6.posY-Perso2.posY))<=Perso6.portee) {
								$(Perso2.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if((Math.abs(Perso6.posX-Perso3.posX)+Math.abs(Perso6.posY-Perso3.posY))<=Perso6.portee) {
								$(Perso3.perso).parent().css( "background-color", "rgba(255, 0, 0, 0.5)");
							}
							
							if(Perso6.nom=="Jack") {
								if((Math.abs(Perso6.posX-Perso4.posX)+Math.abs(Perso6.posY-Perso4.posY))<=Perso6.healPortee) {
									$(Perso4.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
								
								if((Math.abs(Perso6.posX-Perso5.posX)+Math.abs(Perso6.posY-Perso5.posY))<=Perso6.healPortee) {
									$(Perso5.perso).parent().css( "background-color", "rgba(0, 0, 255, 0.5)");
								}
							}
						}
					break;
					
					default:
						//$("td").css("background-color", "transparent");
						return;
					break;
				}
			} else {
				return;
			}
		}
	});
	
	$(".case").on("click", function () {
		if(animate!=true) {
			if ($(this).css("background-color")=="rgba(0, 255, 0, 0.5)") {
				console.log("vert");
					
				var tab = this.id.split("_");
				tab[0] = tab[0].replace(/c/i, "");
				console.log(tab);
				if (map.carte[tab[1]][tab[0]]==0) {
					console.log("libre");
					$("td").css("background-color", "transparent");
					
					selectedPerso.restants--;
					console.log(selectedPerso.restants);
					
					animate = true;
					if(selectedPerso.posX<tab[0]) {
						$(selectedPerso.perso).data('JSMovieclip').play(false);
						$(selectedPerso.perso).data('JSMovieclip').loopBetween(21, 30).play(true);
						$(selectedPerso.perso).css("transform", "scaleX(1)");
						
						var distance = 0;
						var moveDistance = 0;
						var deplacement = setInterval(function() {
							if (distance<64) {
								distance++;
								moveDistance = distance + "px";
								$(selectedPerso.perso).css("left", moveDistance);
							} else {
								animate = false;
								$(selectedPerso.perso).css("left", 0);
								$(selectedPerso.perso).css("top", 0);
								map.carte[selectedPerso.posY][selectedPerso.posX] = 0;
									
								$(selectedPerso.perso).appendTo($("#c" + tab[0] + "_" + tab[1]));
									
								map.carte[tab[1]][tab[0]] = selectedPerso.team;
									
								console.log("x=" + tab[0]);
								console.log("y=" + tab[1]);
								selectedPerso.posX = parseInt(tab[0]);
								selectedPerso.posY = parseInt(tab[1]);
								
								if(selectedPerso.restants<=0) {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(11, 20).play(true);
								} else {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(1, 10).play(true);
								}
									
								clearInterval(deplacement);
							}
						}, movingTime/64);
					} else if (selectedPerso.posX>tab[0]) {
						$(selectedPerso.perso).data('JSMovieclip').play(false);
						$(selectedPerso.perso).data('JSMovieclip').loopBetween(21, 30).play(true);
						$(selectedPerso.perso).css("transform", "scaleX(-1)");
						
						var distance = 0;
						var moveDistance = 0;
						var deplacement = setInterval(function() {
							if (distance<64) {
								distance++;
								moveDistance = "-" + distance + "px";
								console.log(moveDistance);
								$(selectedPerso.perso).css("left", moveDistance);
							} else {
								animate = false;
								$(selectedPerso.perso).css("left", 0);
								$(selectedPerso.perso).css("top", 0);
								map.carte[selectedPerso.posY][selectedPerso.posX] = 0;
									
								$(selectedPerso.perso).appendTo($("#c" + tab[0] + "_" + tab[1]));
									
								map.carte[tab[1]][tab[0]] = selectedPerso.team;
									
								console.log("x=" + tab[0]);
								console.log("y=" + tab[1]);
								selectedPerso.posX = parseInt(tab[0]);
								selectedPerso.posY = parseInt(tab[1]);
								
								if(selectedPerso.restants<=0) {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(11, 20).play(true);
								} else {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(1, 10).play(true);
								}
									
								clearInterval(deplacement);
							}
						}, movingTime/64);
							
					} else if (selectedPerso.posY<tab[1]) {
						$(selectedPerso.perso).data('JSMovieclip').play(false);
						$(selectedPerso.perso).data('JSMovieclip').loopBetween(21, 30).play(true);
						
						var distance = 0;
						var moveDistance = 0;
						var deplacement = setInterval(function() {
							if (distance<64) {
								distance++;
								moveDistance = distance + "px";
								$(selectedPerso.perso).css("top", moveDistance);
							} else {
								animate = false;
								$(selectedPerso.perso).css("left", 0);
								$(selectedPerso.perso).css("top", 0);
								map.carte[selectedPerso.posY][selectedPerso.posX] = 0;
									
								$(selectedPerso.perso).appendTo($("#c" + tab[0] + "_" + tab[1]));
									
								map.carte[tab[1]][tab[0]] = selectedPerso.team;
									
								console.log("x=" + tab[0]);
								console.log("y=" + tab[1]);
								selectedPerso.posX = parseInt(tab[0]);
								selectedPerso.posY = parseInt(tab[1]);
								
								if(selectedPerso.restants<=0) {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(11, 20).play(true);
								} else {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(1, 10).play(true);
								}
									
								clearInterval(deplacement);
							}
						}, movingTime/64);
							
					} else if (selectedPerso.posY>tab[1]) {
						$(selectedPerso.perso).data('JSMovieclip').play(false);
						$(selectedPerso.perso).data('JSMovieclip').loopBetween(21, 30).play(true);
						
						var distance = 0;
						var moveDistance = 0;
						var deplacement = setInterval(function() {
							if (distance<64) {
								distance++;
								moveDistance = "-" + distance + "px";
								$(selectedPerso.perso).css("top", moveDistance);
							} else {
								animate = false;
								$(selectedPerso.perso).css("left", 0);
								$(selectedPerso.perso).css("top", 0);
								map.carte[selectedPerso.posY][selectedPerso.posX] = 0;
									
								$(selectedPerso.perso).appendTo($("#c" + tab[0] + "_" + tab[1]));
									
								map.carte[tab[1]][tab[0]] = selectedPerso.team;
									
								console.log("x=" + tab[0]);
								console.log("y=" + tab[1]);
								selectedPerso.posX = parseInt(tab[0]);
								selectedPerso.posY = parseInt(tab[1]);
								
								if(selectedPerso.restants<=0) {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(11, 20).play(true);
								} else {
									$(selectedPerso.perso).data('JSMovieclip').play(false);
									$(selectedPerso.perso).data('JSMovieclip').loopBetween(1, 10).play(true);
								}
								clearInterval(deplacement);
							}
						}, movingTime/64);
					} else {}
						
				} else {
					console.log("occupé");
					return;
				}
					
			} else if ($(this).css("background-color")=="rgba(255, 0, 0, 0.5)") {
				console.log("rouge");
				
				if(selectedPerso.restants>0) {
				
					selectedPerso.restants--;
					
					var cible = $(this).children().attr("id");
					console.log(cible);
									
					
					var random=Math.floor(Math.random() * (100 - 0 +1)) + 0;
					
					$("td").css("background-color", "transparent");
					
						
					switch (cible){
						case "perso1":
							attaqueAnim(Perso1);
						
							console.log("vie: "+ Perso1.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso1.vie = Perso1.vie - (selectedPerso.attack*2);
							} else{
								Perso1.vie = Perso1.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso1.vie<=0){
								animate = true;
								Perso1.vie = 0;
								$('#perso1').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso1').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso1.isAlive=false;
								console.log("isAlive1= " + Perso1.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso1.posY][Perso1.posX] = 0;
									$("#perso1").parent().html("");
								}, 1000);
								
							}
							console.log(Perso1.vie);
						break;
						
						case "perso2":
							attaqueAnim(Perso2);
						
							console.log("vie: "+ Perso2.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso2.vie = Perso2.vie - (selectedPerso.attack*2);
							} else{
								Perso2.vie = Perso2.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso2.vie<=0){
								animate = true;
								Perso2.vie = 0;
								$('#perso2').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso2').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso2.isAlive=false;
								console.log("isAlive2= " + Perso2.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso2.posY][Perso2.posX] = 0;
									$("#perso2").parent().html("");
								}, 1000);
								
							}
							console.log(Perso2.vie);
						break;
						
						case "perso3":
							attaqueAnim(Perso3);
							
							console.log("vie: "+ Perso3.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso3.vie = Perso3.vie - (selectedPerso.attack*2);
							} else{
								Perso3.vie = Perso3.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso3.vie<=0){
								animate = true;
								Perso3.vie = 0;
								$('#perso3').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso3').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso3.isAlive=false;
								console.log("isAlive3= " + Perso3.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso3.posY][Perso3.posX] = 0;
									$("#perso3").parent().html("");
								}, 1000);
								
							}
							console.log(Perso3.vie);
						break;
						
						case "perso4":
							attaqueAnim(Perso4);
						
							console.log("vie: "+ Perso4.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso4.vie = Perso4.vie - (selectedPerso.attack*2);
							} else{
								Perso4.vie = Perso4.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso4.vie<=0){
								animate = true;
								Perso4.vie = 0;
								$('#perso4').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso4').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso4.isAlive=false;
								console.log("isAlive4= " + Perso4.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso4.posY][Perso4.posX] = 0;
									$("#perso4").parent().html("");
								}, 1000);
								
							}
							console.log(Perso4.vie);
						break;
						
						case "perso5":
							attaqueAnim(Perso5);
							
							console.log("vie: "+ Perso5.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso5.vie = Perso5.vie - (selectedPerso.attack*2);
							} else{
								Perso5.vie = Perso5.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso5.vie<=0){
								animate = true;
								Perso5.vie = 0;
								$('#perso5').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso5').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso5.isAlive=false;
								console.log("isAlive5= " + Perso5.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso5.posY][Perso5.posX] = 0;
									$("#perso5").parent().html("");
								}, 1000);
								
							}
							console.log(Perso5.vie);
						break;
						
						case "perso6":
							attaqueAnim(Perso6);
							
							console.log("vie: "+ Perso6.vie);
							console.log("attack "+ selectedPerso.attack);

							
							if(random<=selectedPerso.critics){
								Perso6.vie = Perso6.vie - (selectedPerso.attack*2);
							} else{
								Perso6.vie = Perso6.vie - (selectedPerso.attack*1);
							}
							
							
							if(Perso6.vie<=0){
								animate = true;
								Perso6.vie = 0;
								$('#perso6').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								$('#perso6').data('JSMovieclip').loopBetween(31, 40).toggle(false);
								
								Perso6.isAlive=false;
								console.log("isAlive6= " + Perso6.isAlive);
								
								setTimeout(function(){
									animate=false;
									console.log("mort");
									map.carte[Perso6.posY][Perso6.posX] = 0;
									$("#perso6").parent().html("");
								}, 1000);
								
							}
							console.log(Perso6.vie);
						break;
					}
				}
			console.log("isAlive4= " + Perso1.isAlive);
			console.log("isAlive4= " + Perso2.isAlive);
			console.log("isAlive4= " + Perso3.isAlive);
			console.log("isAlive4= " + Perso4.isAlive);
			console.log("isAlive5= " + Perso5.isAlive);
			console.log("isAlive6= " + Perso6.isAlive);	
			victoryCheck();	
			} else if ($(this).css("background-color")=="rgba(0, 0, 255, 0.5)"){
				console.log("bleu");
				
				if(selectedPerso.restants>0) {
				
					selectedPerso.restants--;
					
					var cible = $(this).children().attr("id");
					console.log(cible);
					
					switch (cible){
						case "perso1":
							attaqueAnim(Perso1);
							
							Perso1.vie = Perso1.vie + selectedPerso.healPower;
							if(Perso1.vie>Perso1.vieMax) Perso1.vie=Perso1.vieMax;
						break;
						
						case "perso2":
							attaqueAnim(Perso2);
							
							Perso2.vie = Perso2.vie + selectedPerso.healPower;
							if(Perso2.vie>Perso2.vieMax) Perso2.vie=Perso2.vieMax;
						break;
						
						case "perso3":
							attaqueAnim(Perso3);
							
							Perso3.vie = Perso3.vie + selectedPerso.healPower;
							if(Perso3.vie>Perso3.vieMax) Perso3.vie=Perso3.vieMax;
						break;
						
						case "perso4":
							attaqueAnim(Perso4);
							
							Perso4.vie = Perso4.vie + selectedPerso.healPower;
							if(Perso4.vie>Perso4.vieMax) Perso4.vie=Perso4.vieMax;
						break;
						
						case "perso5":
							attaqueAnim(Perso5);
							
							Perso5.vie = Perso5.vie + selectedPerso.healPower;
							if(Perso5.vie>Perso5.vieMax) Perso5.vie=Perso5.vieMax;
						break;
						
						case "perso6":
							attaqueAnim(Perso6);
							
							Perso6.vie = Perso6.vie + selectedPerso.healPower;
							if(Perso6.vie>Perso6.vieMax) Perso6.vie=Perso6.vieMax;
						break;
					}
				}
			} else {
				console.log("nothing");
				$("td").css("background-color", "transparent");
				selectedPerso = "";
			}
		}
		identityBarReload();
	});
	
	function attaqueAnim(cible) {
		if(selectedPerso.posX<=cible.posX) {
			$(selectedPerso.perso).data('JSMovieclip').play(false);
			$(selectedPerso.perso).data('JSMovieclip').loopBetween(41, 50).play(true);
			$(selectedPerso.perso).css("transform", "scaleX(1)");
		} else {
			$(selectedPerso.perso).data('JSMovieclip').play(false);
			$(selectedPerso.perso).data('JSMovieclip').loopBetween(41, 50).play(true);
			$(selectedPerso.perso).css("transform", "scaleX(-1)");
		}
		
		setTimeout(function(){
			if(selectedPerso.restants<=0) {
				$(selectedPerso.perso).data('JSMovieclip').play(false);
				$(selectedPerso.perso).data('JSMovieclip').loopBetween(11, 20).play(true);
			} else {
				$(selectedPerso.perso).data('JSMovieclip').play(false);
				$(selectedPerso.perso).data('JSMovieclip').loopBetween(1, 10).play(true);
			}
		}, 1000);
	}
	
	function victoryCheck() {
		console.log("victoryCheck();")
		if(Perso1.isAlive==0&&Perso2.isAlive==0&&Perso3.isAlive==0) {
			console.log("Equipe 2 victoire");
			animate=true;
			$("#bandContainer").html("<div id='band'>EQUIPE 2 A GAGNE</div>");
			
			victory();
			$("#band").css("color", "green");
		}else if(Perso4.isAlive==false&&Perso5.isAlive==false&&Perso6.isAlive==false) {
			console.log("Equipe 1 victoire");
			animate=true;
			$("#bandContainer").html("<div id='band'>EQUIPE 1 A GAGNE</div>");
			$("#band").css("color", "green");
			
			victory();
		} else {
			console.log("Pas de victoire");
		}
	}
	
	function victory() {
		setTimeout(function(){
			$("#container").html("<img id='victoryImg' src='img/victory.png'/>");
		}, 2000);
	}
}
