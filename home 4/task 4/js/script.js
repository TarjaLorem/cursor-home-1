
window.onload = function(){

var map =  new google.maps.Map(document.getElementById('maps'),{
	zoom: 15,
	mapTypeId: google.maps.MapTypeId.ROADMAP
});
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess,geoDefault);
}
function geoSuccess (position){
	var location = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        map.setCenter(location);
        addMarker(location);
}
function geoDefault (position){
	 var position = {
		lat:12.97,
		lng:77.59
	}
	map.setCenter(position);
	addMarker(position);
}

function addMarker(location){
	var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });
}
}