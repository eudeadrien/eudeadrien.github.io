var callback = function(data) {
	console.log("données api", data)
	var element = document.getElementById("zone_meteo");
	var icon = document.getElementById("icon_meteo");
	let img = new Image();
	img.src = 
	element.innerHTML = "Il faisait " + data.current.temperature + " °C à " + data.location.name + " vers " + data.current.observation_time ;
}


function buttonClickGET() {
	var queryLoc = document.getElementById("queryLoc").value;
	var url ="http://api.weatherstack.com/current?access_key=d6d0044e3a1d345592e6ed9c4a27b331&query="+queryLoc;

	$.get(url, callback).done(function() {
	})
	.fail(function() {
		alert( "error" );
	})
	.always(function() {
		//alert( "finished" );
	});
}