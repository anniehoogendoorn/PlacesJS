$(document).ready(function(event) {
    $("#add-landmark").click(function() {
        $("#new-landmarks").append(
                                    '<div class="form-group">' +
                                        '<label for="new-landmarks">Landmark</label>' +
                                        '<input type="text" class="form-control new-landmark">' +
                                        '</div>');
    });



    $("form#new-place").submit(function(event) {
        event.preventDefault();

        var inputPlaceName = $("input#new-place-name").val();
        var inputLocation = $("input#new-location").val();
        var inputDate = $("input#new-date").val();
        var inputNotes = $("textarea#new-notes").val();

        var newPlace = { placeName: inputPlaceName, placeLocation: inputLocation, landmarks: [], date: inputDate, notes: inputNotes };

        $(".new-landmark").each(function() {
            var inputLandmark = $(this).val();
            newPlace.landmarks.push(inputLandmark);
            console.log(newPlace.landmarks);
        });


        $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></p>");

        $(".place").last().click(function() {
            $("#show-place").show();

            $("#show-place h2").text(newPlace.placeName);
            $(".location").text(newPlace.placeLocation);
            $(".landmarks").text(newPlace.landmarks.join(", "));
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);

            $("input#new-place-name").val("");
            $("input#new-location").val("");
            $("input#new-landmark").val("");
            $("input#new-date").val("");
            $("textarea#new-notes").val("");
        });
    });
        // debugger;
});
