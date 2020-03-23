
$.get("https://corona.lmao.ninja/countries", function (resp) {
	var coronaData = resp;
	for(var i = 0; i < coronaData.length; i++) {
		/*Get Latitude and Longitude of country*/
		var pos = coronaData[i]["countryInfo"];
		var lat = pos["lat"];
		var lng = pos["long"];

		/*Draw a red circle at that location. Bigger circle means worse hit*/
		var rad = coronaData[i]["cases"];
		var exp = rad.toString().length - 1;
		
		if(exp > 3) {
			/*Max exponential is 3. Otherwise significant difference not seen*/
			exp = 3;
		}

		if(rad < 10) {
			/*Shouldn't be too small*/
			rad = 5;
		}
		else {
			rad = 5 + (rad / Math.pow(10, exp));
			if(rad > 50) {
				/*Significant difference must be seen. But radius > 50 is too big.*/
				rad = 50;
			}
		}
		var circle = L.circleMarker([lat, lng], {
    				color: 'red',
    				fillColor: '#f03',
    				fillOpacity: 0.5,
    				radius: rad
			     }).addTo(myMap).bindPopup("Total Cases: " + coronaData[i]["cases"] + ", Total Deaths: " + coronaData[i]["deaths"]);
		
	}
}, "json");
