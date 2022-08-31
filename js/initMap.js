
var myMap = L.map('mapid').setView([24, 16], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiNTVhYmhpbGFzaCIsImEiOiJjazg0a2t2bW8xMnE0M25vd3FwNXQzZ3BwIn0.3dbqJ8xSkjN9lrstWlPM5g', 
{
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1IjoiNTVhYmhpbGFzaCIsImEiOiJjazg0a2t2bW8xMnE0M25vd3FwNXQzZ3BwIn0.3dbqJ8xSkjN9lrstWlPM5g'
}).addTo(myMap);

myMap.on('click', (e) => {
	console.log(e);
	console.log("URL is");
	url = "http://api.geonames.org/countryCodeJSON?" + "lat=" + e.latlng['lat'] + "&" + "lng=" + e.latlng['lng'] + "&" + "username=55_abhilash";
	console.log(url);
	$.ajax({
		url: url,
		success: function(resp) {
			console.log(resp);
			url_news = "https://newsapi.org/v2/top-headlines?"  + "country=" + resp.countryCode.toLowerCase() + "&apiKey=5987de4b2a9849aab49d8c2180a4ea60" + "&pageSize=5";
			$.ajax({
				url: url_news,
				success: function(resp2) {
					console.log(resp2);
					console.log("Type is ");
					console.log(typeof resp2);	
					//var result2 = JSON.parse(resp2);
					var circle = L.circleMarker([e.latlng['lat'], e.latlng['lng']], {
						color: 'red',
						fillColor: '#f03',
						fillOpacity: 0,
						radius: 4
						 }).addTo(myMap).bindPopup("<b>" + "Headlines for " + resp.countryName + "</b>" +  	
						 "<hr>" + 
						 "<br><a href = " + resp2['articles'][0]['url'] + ">" + "1. " + resp2['articles'][0]['title'] + "</a>" +   
						 "<br><a href = " + resp2['articles'][1]['url'] + ">" + "2. " + resp2['articles'][1]['title'] + "</a>" +  
						 "<br><a href = " + resp2['articles'][2]['url'] + ">" + "3. " + resp2['articles'][2]['title'] + "</a>" + 
						 "<br><a href = " + resp2['articles'][3]['url'] + ">" + "4. " + resp2['articles'][3]['title'] + "</a>" + 
						 "<br><a href = " + resp2['articles'][4]['url'] + ">" + "5. " + resp2['articles'][4]['title'] + "</a>");

					circle.openPopup();
				}
			});
		}
	});
});