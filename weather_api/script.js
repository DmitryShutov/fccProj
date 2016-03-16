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
        alert( xhr.responseText);
    }
});   
     
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

