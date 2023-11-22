// datepicker
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

// ClockPicker
$('.clockpicker').clockpicker({
    donetext: 'Done',
    autoclose: true
  });

  $(document).ready(function () {
    $(".cartItem").click(function () {
      $(".cartItem").removeClass("active");
      $(this).addClass("active").addClass("redBackground");
      $(".textContainer").hide();
      var index = $(this).data("item-index");
      $("#textContainer" + index).toggle();
    });
  });