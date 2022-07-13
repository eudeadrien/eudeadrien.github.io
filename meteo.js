var callback = function(data) {
	console.log("données api", data)
	var element = document.getElementById("zone_meteo");
	//var img =  document.getElementById("icon_meteo");
	//img.src = data.forecast.weather_icons
	element.innerHTML = "Il annonce entre " + data.forecast.tmax + " °C et " + data.forecast.tmin + " °C à " + data.city.name + " aujoud'hui " ;
	//img.innerHTMl = img ;
}


function buttonClickGET() {
	var queryLoc = document.getElementById("queryLoc").value;
	var url ="https://api.meteo-concept.com/api/forecast/daily/0?token=6dfdb2eb41259173263c8ecdf0910467b361773d3ae9ce4f091d10ee2334a3cb&insee="+queryLoc;
/*http://api.weatherstack.com/current?access_key=d6d0044e3a1d345592e6ed9c4a27b331&query="+queryLoc;*/
	$.get(url, callback).done(function() {
	})
	.fail(function() {
		alert( "error" );
	})
	.always(function() {
		//alert( "finished" );
	});
}