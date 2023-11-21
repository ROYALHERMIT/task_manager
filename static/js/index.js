$('#example').datepicker({
    inline: true
});

// Adding click event listener to the icon button
$('#datePickerIcon').click(function () {
    $('#example').datepicker('show');
});

// Adding changeDate event listener to close the datepicker after selecting a date
$('#example').on('changeDate', function () {
    $('#example').datepicker('hide');
});