google.maps.event.addDomListener(window, 'load', initMap);

function initMap() {
    var mapOptions = {
        zoom: 5,
        scrollwheel: false,
        center: new google.maps.LatLng(-12.0026836, -75.0504551),

        //-------------------Estilo de Mapa!
        styles: [{
            "stylers": [{
                "visibility": "on"
            }, {
                "saturation": -100
            }, {
                "gamma": 0.54
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "stylers": [{
                "color": "#4d4946"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [{
                "gamma": 0.48
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "gamma": 7.18
            }]
        }]
    };



    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    //-----------------------------------------JSON!
    var json = '{"position1":{"lat":-15.133125,"lng":-72.867645, "text":{"tittle":"ubicación 1","message":"dirección 1"}},"position2":{"lat":-16.189825,"lng":-70.777242, "text":{"tittle":"ubicación 2","message":"dirección 2"}},"position3":{"lat":-13.004176,"lng":-70.777242, "text":{"tittle":"ubicación 3","message":"dirección 3"}},"position4":{"lat":-10.394528,"lng":-73.337986, "text":{"tittle":"ubicación 4","message":"dirección 4"}},"position5":{"lat":-8.797188,"lng":-77.257491, "text":{"tittle":"ubicación 5","message":"dirección 5"}},"position6":{"lat":-6.726053,"lng":-78.982074, "text":{"tittle":"ubicación 6","message":"dirección 6"}},"position7":{"lat":-4.124983,"lng":-76.943931, "text":{"tittle":"ubicación 7","message":"dirección 7"}},"position8":{"lat":-3.655728,"lng":-73.337986, "text":{"tittle":"ubicación 8","message":"dirección 8"}},"image":"img/punto.png"}';
    var obj = JSON.parse(json);
    var geocoder = new google.maps.Geocoder;
    //-----------------------------------------Distribuidor de Makers!
    for (var i = 0; i < ((Object.keys(obj).length) - 1); i++) {
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading" style="text-align: center">' + obj["position" + (i + 1)].text.tittle + '</h1>' +
            '<div id="bodyContent" style="text-align: center">' +
            '<p>' + obj["position" + (i + 1)].text.message + '</p>' +
            '<img src="img/logo-map-pin.png" alt="">'+
            '</div>' +
            '</div>';
        var mapMarker = new google.maps.Marker({
            position: {
                lat: obj["position" + (i + 1)].lat,
                lng: obj["position" + (i + 1)].lng
            },
            map: map,
            icon: obj.image,
            title: obj["position" + (i + 1)].text.tittle
        });

        (function (i, mapMarker) {
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            google.maps.event.addListener(mapMarker, "mouseover", function () {
                infowindow.open(map, mapMarker);
                geocoder.geocode({
                    location: {
                        lat: obj["position" + (i + 1)].lat,
                        lng: obj["position" + (i + 1)].lng
                    }
                }, function (results, status) {
                    if (status === 'OK') {
                        if (results[1]) {
                            document.getElementById('cajaDireccion').innerHTML = '<p id="direccionMapa">' + results[1].formatted_address + '</p>';
                        } else {
                            console.log('No results found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                });
            });
            google.maps.event.addListener(mapMarker, 'mouseout', function () {
                infowindow.close();
            });

        })(i, mapMarker);
    }
}

