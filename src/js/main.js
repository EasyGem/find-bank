//= libs/jquery.min.js

$('#showMenu').click(function() {
  $('.l-header .header__menu.mobile').addClass('active')
  event.stopPropagation()

  $(document).click(function() {
    $('.l-header .header__menu.mobile').removeClass('active')
  })

  $('.l-header .header__menu.mobile .menu-wrapper').click(function(event) {
    event.stopPropagation()
  })
})
