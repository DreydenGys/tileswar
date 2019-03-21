function tutorial() {
	$("#button1").on("click", regleGenerales);
	$("#button2").on("click", deplacements);
	$("#button3").on("click", attaques);
	
	$("#jouerBouton").on("click", jouer)
	
	function regleGenerales() {
		$("#regleContient").html("<img id='imgRegles' src='img/imgBase1.png'  class='imgRegle'/>");
		$(".imgRegle").on("click", resetRegles);
	}
	
	function deplacements() {
		$("#regleContient").html("<img id='imgRegles' src='img/imgBase2.png'  class='imgRegle'/>");
		$(".imgRegle").on("click", resetRegles);
	}
	
	function attaques() {
		$("#regleContient").html("<img id='imgRegles' src='img/imgBase3.png'  class='imgRegle'/>");
		$(".imgRegle").on("click", resetRegles);
	}
	
	function resetRegles() {
		$(".imgRegle").off();
		$("#regleContient").html("");
	}
	
	function jouer() {
		$("#container").html(page2);
		characterPage();
	}
}
