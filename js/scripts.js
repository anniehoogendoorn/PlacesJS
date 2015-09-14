$(document).ready(function(event) {
    event.preventDefault();

    $("form#new-place").submit(function(event) {

        var inputPlaceName = $("input#new-place-name").val();
        var inputLocation = $("input#new-location").val();
        var inputLandmarks = $("input#new-landmarks").val();
        var inputDate = $("input#new-date").val();
        var inputNotes = $("input#new-notes").val();

        var newPlace = { placeName: inputPlaceName, placeLocation: inputLocation, landmarks: inputLandmarks date: inputDate, notes: inputNotes };
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></p>");

    $(".place").last().click(function() {
        $("#show-place").show();

        $("#show-place h2").text(newPlace.placeName);
        $(".location").text(newPlace.placeLocation);
        $(".landmarks").text(newPlace.landmarks);
        $(".date").text(newPlace.date);
        $(".notes").text(newPlace.notes);

        $("input#new-place-name").val("");
        $("input#new-location").val("");
        $("input#new-landmarks").val("");
        $("input#new-date").val("");
        $("input#new-notes").val("");
    });
});
