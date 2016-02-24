$(document).ready(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    var zipCode = $('form input').val();
    if(zipCode.length === 5 && Number(zipCode)){
        //we know the zipcode is valid
        //we make a GET request
        $.get('http://maps.googleapis.com/maps/api/geocode/json', {address: zipCode}, function(response){
          var lat = responseData.results[0].geometry.location.lat;
          var lng = responseData.results[0].geometry.location.lng;
          console.log(lat, lng)
        });
    } else {
      //we know the zip code isn't valid
      alert('You did\'t enter a zip code!')
    }
  });
});
