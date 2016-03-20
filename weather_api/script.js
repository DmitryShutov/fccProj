var long, lat;
window.onload = function() {
 coords(function (arr) {
    var xhr = new XMLHttpRequest();
    var key = '6e7e0a9ed33f6ac9067b4121d1f6b1d9';
    var request = 'http://api.openweathermap.org/data/2.5/weather?lat=' + arr[0] + '&lon=' + arr[1] + '&APPID=' + key;  
    xhr.open('GET', request, false);
    xhr.send();
    
    if(xhr.status != 200) {
         alert( xhr.status + ': ' + xhr.statusText );
    } else {
         var response = JSON.parse(xhr.responseText);
         document.querySelector('.loc').innerHTML = response.name;
         var tempInCelsius = response.main.temp - 273;
         document.querySelector('.forecast').innerHTML = (tempInCelsius)&ordm + "C";
    }
});   
var temp = 'celsius';
var scale = document.getElementsByClassName('forecast');
scale.addEventListener('click', function () {
    if(temp == 'celsius') {
        temp = 'phar';
        var tempInPhar = (response.main.temp + 459.67)/1.8;
        scale.innerHTML = tempInPhar + '&ordm; P';
    } else {
        temp = 'celsius';
        scale.innerHTML = 
    }
})    
};



function coords(callback) {
    if("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(function(position){
           long = position.coords.longitude;
           lat = position.coords.latitude;
           var curLocation = [lat, long];
           callback(curLocation); 
       }); 
    } else {
        document.querySelector('.loc').innerHTML = "Sorry, we can't locate you";        
    }
};

