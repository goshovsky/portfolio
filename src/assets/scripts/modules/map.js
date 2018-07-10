export const googleMap = function() {
  let map_zoom = 14;
  let center_latitude = 59.945,
    center_longitude = 30.3597;
  //Оформление
  let style = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [{ saturation: "-100" }, { visibility: "on" }]
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 65 }, { visibility: "on" }]
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        { saturation: -100 },
        { lightness: "50" },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: "-100" }]
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road.highway",
      elementType: "labels.text",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [{ lightness: "30" }]
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }]
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [{ lightness: "40" }]
    },
    {
      featureType: "road.local",
      elementType: "labels.text",
      stylers: [{ visibility: "off" }]
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ saturation: -100 }, { visibility: "simplified" }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        { hue: "#ff0000" },
        { lightness: -25 },
        { saturation: -97 },
        { visibility: "off" }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [{ visibility: "on" }, { color: "#4e8839" }]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [{ lightness: -25 }, { saturation: -100 }]
    },
    {
      featureType: "water",
      elementType: "labels.text",
      stylers: [{ color: "#ffffff" }]
    }
  ];
  //set google map options
  let map_options = {
    center: new google.maps.LatLng(center_latitude, center_longitude),
    zoom: map_zoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: style
  };
  //inizialize the map
  console.log(map_options);
  let map = new google.maps.Map(
    document.getElementById("google-map"),
    map_options
  );
};
