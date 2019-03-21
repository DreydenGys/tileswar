function mapPage() {
	$("#leftMidBoite").css("background-image", map1.texture);
	$("#midBoite").css("background-image", map2.texture);
	$("#rightMidBoite").css("background-image", map3.texture);
	
	var chooseMap=2;
	
	$("#leftBoite").on("click",leftDefil);
	$("#rightBoite").on("click",rightDefil);
	
	borderBox();
	function borderBox(){
		if(chooseMap==1){
			$("#leftMidBoite").css("border", "dashed red 5px");
			$("#midBoite").css("border", "dashed red 0px");
			$("#rightMidBoite").css("border", "dashed red 0px");
			
			$("#leftMidBoite").css("height", "110%");
			$("#midBoite").css("height","100%");
			$("#rightMidBoite").css("height","100%");
			
			$("#leftMidBoite").css("width", "28%");
			$("#midBoite").css("width", "25%");
			$("#rightMidBoite").css("width", "25%");
			
			$("#topBoite").css("background-image", map1.texture);
		}
		else if (chooseMap==2){
			$("#leftMidBoite").css("border", "dashed red 0px");
			$("#midBoite").css("border", "dashed red 5px");
			$("#rightMidBoite").css("border", "dashed red 0px");
			
			$("#leftMidBoite").css("height", "100%");
			$("#midBoite").css("height","110%");
			$("#rightMidBoite").css("height","100%");
			
			$("#leftMidBoite").css("width", "25%");
			$("#midBoite").css("width", "28%");
			$("#rightMidBoite").css("width", "25%");
			
			$("#topBoite").css("background-image", map2.texture);
		}
		else if (chooseMap==3){
			$("#leftMidBoite").css("border", "dashed red 0px");
			$("#midBoite").css("border", "dashed red 0px");
			$("#rightMidBoite").css("border", "dashed red 5px");
			
			$("#leftMidBoite").css("height", "100%");
			$("#midBoite").css("height","100%");
			$("#rightMidBoite").css("height","110%");
			
			$("#leftMidBoite").css("width", "25%");
			$("#midBoite").css("width", "25%");
			$("#rightMidBoite").css("width", "28%");
			
			$("#topBoite").css("background-image", map3.texture);
		}
		else {
			
		}
	}
	
	
	function leftDefil(){
		if (chooseMap==1){
			chooseMap=3;
		}
		else{
			chooseMap--; //chooseMap-- = décrémentation de 1 
		}
		borderBox();
	}
	
	function rightDefil(){
		if (chooseMap==3){
			chooseMap=1;
		}
		else{
			chooseMap++; //chooseMap++ = incrémenter de 1 
		}
		borderBox();
	}
	
	$("#boutonJouer").on("click", mapSelect);
	
	function mapSelect() {
		if(chooseMap==1){
			map = Object.create(map1);
		} else if (chooseMap==2) {
			map = Object.create(map2);
		} else if (chooseMap==3) {
			map = Object.create(map3);
		} else {
			
		}
		$("#container").html(page4);
		gamePage();
	}
	
}
