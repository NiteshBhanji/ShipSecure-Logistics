/*AIzaSyBrk4rnZbZP_hA_OUinaxh6_K_eMzHu54M*/

function loadmap(){
	
	var legame = {lat: 20.002227, lng: 73.775898};
	var map = new google.maps.Map(document.getElementById('map'), {zoom: 15, center: legame});
	var marker = new google.maps.Marker({position: legame, map: map});
}


