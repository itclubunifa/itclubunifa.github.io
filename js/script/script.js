// Regular map
function regular_map() {
    var myLatlng = {
        lat: -5.1461548,
        lng: 119.4474392
    };

    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 20,
        center: myLatlng
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Click to zoom'
    });

    map.addListener('center_changed', function () {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function () {
            map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener('click', function () {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}

// Carousel options

$('.carousel').carousel({
    interval: 3000,
})