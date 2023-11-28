// datepicker
// $('#example_date').datepicker({
//     inline: true
// });

// // Adding click event listener to the icon button
// $('#datePickerIcon').click(function () {
//     $('#example_date').datepicker('show');
// });

// // Adding changeDate event listener to close the datepicker after selecting a date
// $('#example_date').on('changeDate', function () {
//     $('#example_date').datepicker('hide');
// });


// ClockPicker
// $('.clockpicker').clockpicker({
//     donetext: 'Done',
//     autoclose: true
//   });

$(document).ready(function () {
  var activeItemIndex = localStorage.getItem('activeItemIndex');

  if (activeItemIndex) {
    $(".cartItem[data-item-index='" + activeItemIndex + "']").addClass("active");
    $("#textContainer" + activeItemIndex).show();
  }

  $(".cartItem").click(function () {
    $(".cartItem").removeClass("active");
    $(this).addClass("active");
    $(".textContainer").hide();

    var index = $(this).data("item-index");
    $("#textContainer" + index).toggle();

    localStorage.setItem('activeItemIndex', index);
  });
});

$(document).ready(function () {

  var el = $('#pop_people');

  const popoverContent =
    `<div class="card bg-dark" style="width: 18rem;">
    <a href="#" class="pop_crt">
        <img src="https://png.pngtree.com/background/20230313/original/pngtree-red-abstract-grunge-texture-background-vector-picture-image_2130165.jpg"
            class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-truncate pb-3 ">samimbokachoda@gmail.com</h5>
          <div class="pb-2 pop_stext">
              <i class="fa-regular fa-envelope d-inline"></i>
              <p class="card-text d-inline pop_mail">samimbokachoda@gmail.com</p>
          </div>
          <div class="pop_stext">
              <i class="fa-regular fa-clock d-inline"></i>
              <p class="card-text d-inline">7:36pm local time</p>
          </div>
        </div>
        <div class="card-body popbt_collection">
          <a href="#" class="btn btn-primary d-flex justify-content-center pop_btn mb-2"><span>View profile</span></a>
          <a href="#" class="btn btn-primary d-flex justify-content-center pop_bt"><span>Create 1:1 project</span></a>
        </div>
    </a>
  </div>`;

  el.popover({
    html: true,
    content: popoverContent,
    trigger: 'hover',
    placement: 'right',
    container: 'body'
  });
});
