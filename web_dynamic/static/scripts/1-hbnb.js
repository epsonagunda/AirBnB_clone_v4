$(document).ready(function() {
    // Create a set to store the selected amenity IDs
    var selectedAmenities = new Set();

    // Function to update the list of selected amenities
    function updateAmenitiesList() {
        var amenitiesList = Array.from(selectedAmenities).join(', ');
        $('.Amenities h4').text('Amenities: ' + amenitiesList);
    }

    // Listen for changes on each checkbox
    $('input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            // Add the amenity ID to the set
            selectedAmenities.add(amenityName);
        } else {
            // Remove the amenity ID from the set
            selectedAmenities.delete(amenityName);
        }

        // Update the amenities list display
        updateAmenitiesList();
    });
});

