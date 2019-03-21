function index() {
	$("#playbutton").on("click", toucher); 

	function toucher() {
	 $("#container").html(page5);
	 tutorial();
	}
 
	//Code des deux personnages se poursuivant n'a pas été fait par le groupe
    /*var time = 0, 
        timeNext = 0, 
            eventStop = function() { //stop callback
                $('#squirrel').stop();
                if(mc.currentFrame() <= 18) {
                    mc.loopBetween(18, 24).play();
                    var date = new Date();
                    time = date.getTime();
                }
            }; 
                    
            $('#squirrel').JSMovieclip({
                width     : 333,
                direction : 'h', 
                frames_number : 26, 
                framerate : 26,
                stopCallback  : eventStop
            });
                    
            var mc = $('#squirrel').data('JSMovieclip');
            mc.loopBetween(1, 17).play(true);
                    
            $('#squirrel').hover(function() {
                mc.loop = false; 
            }, function() {
                mc.loopBetween(1, 17).play(true)
                var le = window.innerWidth + 70;
                anime(timeNext - time, le);
            });
                    
            loop();
                    
            function loop() {
                $('#squirrel').css('left', -350);
                var le = window.innerWidth + 70;
                anime(le*15, le);
            }
                    
            function anime(t, left) {
                var date = new Date();
                timeNext = date.getTime() + t;
                $('#squirrel').animate({'left' : left}, t, 'linear', loop);
            }
        */
		
	$("#personnage1").JSMovieclip({
		framerate: 12,
		frames_number: 30,
		frames: [
			{x:0, y:0}, {x:150, y:0}, {x:300, y:0}, {x:450, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:1050, y:0}, {x:1200, y:0}, {x:1350, y:0},
			{x:0, y:198}, {x:150, y:198}, {x:300, y:198}, {x:450, y:198}, {x:600, y:198}, {x:750, y:198}, {x:900, y:198}, {x:1050, y:198}, {x:1200, y:198}, {x:1350, y:198},
			{x:0, y:396}, {x:150, y:396}, {x:300, y:396}, {x:450, y:396}, {x:600, y:396}, {x:750, y:396}, {x:900, y:396}, {x:1050, y:396}, {x:1200, y:396}, {x:1350, y:396}
		]
	});
	
	$("#personnage2").JSMovieclip({
		framerate: 12,
		frames_number: 30,
		frames: [
			{x:0, y:0}, {x:150, y:0}, {x:300, y:0}, {x:450, y:0}, {x:600, y:0}, {x:750, y:0}, {x:900, y:0}, {x:1050, y:0}, {x:1200, y:0}, {x:1350, y:0},
			{x:0, y:198}, {x:150, y:198}, {x:300, y:198}, {x:450, y:198}, {x:600, y:198}, {x:750, y:198}, {x:900, y:198}, {x:1050, y:198}, {x:1200, y:198}, {x:1350, y:198},
			{x:0, y:396}, {x:150, y:396}, {x:300, y:396}, {x:450, y:396}, {x:600, y:396}, {x:750, y:396}, {x:900, y:396}, {x:1050, y:396}, {x:1200, y:396}, {x:1350, y:396}
		]
	});	
	
	var posPerso1 = -10;
	var posPerso2 = -25;
	
	$("#personnage1").data('JSMovieclip').loopBetween(1, 10).play(true);
	$("#personnage2").data('JSMovieclip').loopBetween(11, 20).play(true);
	
	setInterval(function(){
		posPerso1 += 0.18;
		posPerso2 += 0.18;
		
		if(posPerso2>101) {
			posPerso1= -10
			posPerso2= -25
		}
		
		$("#personnage1").css("left", posPerso1 + "%");
		$("#personnage2").css("left", posPerso2 + "%");
	}, 25);

}