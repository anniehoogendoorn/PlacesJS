$(document).ready(function(event) {
    $("#add-landmark").click(function() {
        //Add new input field for additional places
        $("#new-landmarks").append(
                                    '<div class="form-group">' +
                                        '<label for="new-landmarks">Landmark</label>' +
                                        '<input type="text" class="form-control new-landmark">' +
                                        '</div>');
    });



    $("form#new-place").submit(function(event) {
        event.preventDefault();

        //Get values from form and use as variables
        var inputPlaceName = $("input#new-place-name").val();
        var inputLocation = $("input#new-location").val();
        var inputDate = $("input#new-date").val();
        var inputNotes = $("textarea#new-notes").val();

        //Creates newPlace object (like PHP constructor)
        var newPlace = { placeName: inputPlaceName, placeLocation: inputLocation, landmarks: [], date: inputDate, notes: inputNotes };

        //Push additional landmarks to be displayed.
        $(".new-landmark").each(function() {
            var inputLandmark = $(this).val();
            newPlace.landmarks.push(inputLandmark);
        });

        //Add to list of places below form
        $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></p>");

        $(".place").last().click(function() {
            $("#show-place").show();

            //Display properties of place object on right side of page
            $("#show-place h2").text(newPlace.placeName);
            $(".location").text(newPlace.placeLocation);
            $(".landmarks").text(newPlace.landmarks.join(", "));
            $(".date").text(newPlace.date);
            $(".notes").text(newPlace.notes);

            // Clear all form values
            $("input#new-place-name").val("");
            $("input#new-location").val("");
            $("input.new-landmark").val("");
            $("input#new-date").val("");
            $("textarea#new-notes").val("");
        });
    });
});
