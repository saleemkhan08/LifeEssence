function initMap() {
    // The location of Life Essence 26.3370572,50.1864183
    var lifeEssence = { lat: 26.3370572, lng: 50.1864183 };
    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 9,
        center: lifeEssence
    });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: lifeEssence, map: map });
}