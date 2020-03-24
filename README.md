# COVID19 World Map based Tracker

This is a Corona Virus Disease 2019 (COVID19) tracker app based on a World Map.
It will show red markers on the map on the Geo location of every country affected by the virus.
A bigger circle means more number of people have been affected in the particular country.

Click on the marker to get an information popup containing statistics around the virus in that particular country.
The app is compatible in mobile phone browsers (Both Android and iOS).

Data is being fetched from the very well developed: https://corona.lmao.ninja/ (https://github.com/novelcovid/api)

This app is currently in beta stage. I am working to make it more neat.
Any suggestions, feedback is welcome.

### TODO

* Add a 'loading' GIF till the circles are displayed, because sometimes the API becomes slow and takes around 1min to fetch all countries' data.
* The API returns incorrect data for some countries like USA, UK. Notified the developers.
* A certain API endpoint includes data province wise (state/region). It can be included on the map.
* API is available for historical data which is updated everyday to include data till the day before. This can be included with user inputting the date.
