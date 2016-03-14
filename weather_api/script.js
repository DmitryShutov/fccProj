document.onload = function() {
    
}

function coords() {
    if("geolocation" in navigator) {
       navigator.geolocation.getCurrentPosition(function(position){
           
       });
    } else {
        document.querySelector('.loc').innerHTML = "Sorry, we can't locate you";
        
    }
}