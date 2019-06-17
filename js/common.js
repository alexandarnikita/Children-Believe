
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

$(function() {
  $('.nav-tabs a').click(function(){
    $(this).tab('show');
  });
  
  $('.fa-search').click(function() {
    if ($('.custom-dropdown-menu').hasClass('active')) {
      $('.custom-dropdown-menu').removeClass('active');
    } else {
      $('.custom-dropdown-menu').addClass('active');
    }
  });
  
  $('.btn-select').click(function () {
    $('.btn-select').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  })
});