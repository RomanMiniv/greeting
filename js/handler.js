$(document).ready(function () {

	// -- message --

	var attention = "!";

	var timerId = setInterval(function () {

		$(".attentionText").html(attention);
		attention += "!";

		if (($("#leftPart").width() < $(".attentionText").width()) && (($("#rightPart").width() < $(".attentionText").width()))) {
			
			attention = attention.substr(0, attention.length - 2);
			$(".attentionText").html(attention);

			$("#centerPart").html("Peoly");

			clearInterval(timerId);

		}	
	}, 100);

	// -- salut --

	var colorCounter = 0;

	function fAnimSalut () {

		var bangArea = 100;

		$("<div></div>").appendTo($("body")).addClass("salut");

		// styles

		var arrColors = ["aqua", "yellow", "maroon", "lime", "red", "blue", "olive", "gray", "orange"];
		
		var minRightPosition = bangArea + parseInt($(".salut:last").css("width"));
		var maxRightPosition = $("body").width() - bangArea - parseInt($(".salut:last").css("width"));
		var horizontalPosition = Math.floor(Math.random() * (maxRightPosition - minRightPosition)) + minRightPosition;

		$(".salut:last").css({
			"background-color" : arrColors[colorCounter],
			"left" : horizontalPosition
		});

		colorCounter < 8 ? colorCounter++ : colorCounter = 0;

		// movement

		var minTopBang = parseInt($(".salut:last").css("height")) + bangArea;
		var maxTopBang = $(document).height() - bangArea - parseInt($(".salut:last").css("height"));
		var topBang =  Math.floor(Math.random() * (maxTopBang - minTopBang)) + minTopBang;
		
		$(".salut:last").animate({
			top: topBang
		}, 1000, "linear", function () {
			
			// bang

			var topPos = parseInt($(this).css("top"));
			var leftPos = parseInt($(this).css("left"));
			var bgColorSalut = $(this).css("background-color");
			$(this).remove();

			// parts salut

			for ($i = 0; $i < 50; $i++) {
				var widthPartSolut = Math.floor(Math.random() * (18 - 5)) + 5;
				var heightPartSolut = widthPartSolut;

				$("<div></div>").appendTo($("body")).addClass("partSalut");
				$(".partSalut:last").css({
					"top" : topPos + "px",
					"left" : leftPos + "px",
					"width" : widthPartSolut + "px",
					"height" : heightPartSolut + "px",
					"background-color" : bgColorSalut
				});

				$(".partSalut:last").animate({
					top: Math.floor(Math.random() * ((topPos + bangArea) - (topPos - bangArea))) + (topPos - bangArea),
					left: Math.floor(Math.random() * ((leftPos + bangArea) - (leftPos - bangArea))) + (leftPos - bangArea),
				}, 2000, "linear", function () {
					$(this).remove();
				});	
			}

		});

	}
	
	setInterval(function () {
		fAnimSalut();
	}, 1000);

});