
$(function() {
  $('.nav-tabs a').click(function(){
    $(this).tab('show');
  });

  $('.search-btn').click(function() {
    $('.btn-sub-menu').removeClass('active');
    $('.custom-sub-dropdown-menu').removeClass('active');
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
  });

  $('.btn-sub-menu').click(function () {
    $('.custom-sub-dropdown-menu').removeClass('active');
    $('.custom-dropdown-menu').removeClass('active');
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.btn-sub-menu').removeClass('active');
      $(this).addClass('active');
      $(this).next().addClass('active');
    }
  })
});