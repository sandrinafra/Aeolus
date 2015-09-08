$( document ).ready(function() {
	$audio_bar = document.getElementById("audio_bar");
	$retract = document.getElementById("retract");
	$previous= document.getElementById("previous");
	$next = document.getElementById("next");
	$photo = document.getElementById("photo");
	$titre = document.getElementById("titre");
	$menu = document.getElementById("menu");
	$son = document.getElementById("son");
	$time = document.getElementById("time");
	$next = document.getElementById("next");
	$unroll = document.getElementById("unroll");
	$play_h = document.querySelector("#play_h i");


	$retract.addEventListener('click',function(){
		$previous.style.display = "none";
		$next.style.display = "none";
		$titre.style.display = "none";
		$play_h.style.background = "none";
		$play_h.style.display = "block";
		$play_h.style.float = "left";
		$menu.style.display = "none";
		$time.style.display = "none";
		$son.style.display = "none";
		$retract.style.display ="none";
		$unroll.style.display = "";
		
	}, false);


	$unroll.addEventListener('click',function(){
		$previous.style.display = "";
		$next.style.display = "";
		$titre.style.display = "";
		$play_h.style.background = "";
		$play_h.style.display = "";
		$play_h.style.float = "none";
		$menu.style.display = "";
		$time.style.display = "";
		$son.style.display = "";
		$retract.style.display ="";
		$unroll.style.display = "none";
		
	}, false);


	$play_h.addEventListener('click',function()
	{
   		
   		 var player = document.querySelector('#audioPlayer');

	
		    if (player.paused) 
		    {
		        player.play();
		        $play_h.className = "fa fa-pause";
		    } else 
		    {
		        player.pause();	
		        $play_h.className = "fa fa-play";

		    }
	}, false);	

	// function resume(idPlayer) {
 //    var player = document.querySelector('#' + idPlayer);
	
 //    player.currentTime = 0;
 //    player.pause();
	// }
});