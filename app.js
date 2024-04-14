$(document).ready(function(){
    var apiKey = '0c3b0c1ab5186281fff62d3ab67fd066';
    var cityName = 'Toronto'; // replace with any city name in Canada
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;

    $('#getWeather').click(function(){
        $.getJSON(url, function(data){
            console.log(data);
            $('#geoLoc').html("latitude: " + data.coord.lat + "<br>longitude: " + data.coord.lon);
            var temp = data.main.temp - 273.15; // convert temperature from Kelvin to Celsius
            $('#currTemp').html("current temp: " + temp.toFixed(1) + "°C");
            $('#description').html("description: " + data.weather[0].description);
            $('#humidity').html("humidity: " + data.main.humidity + "%");
            $('#windSpeed').html("wind speed: " + data.wind.speed + " m/s");
        });
    });
});
