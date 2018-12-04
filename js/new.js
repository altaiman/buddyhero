(function() {

  $('.modal').iziModal();

  // modal
  $('.buddy__more').on('click', function() {
    var title = $(this).parent().find('.buddy__name').text(),
        content = $(this).parent().find('.more').html();

    $('.modal_more .modal__title').empty().text(title);
    $('.modal_more .modal__content').empty().html(content);

    $('.modal_more').iziModal('open');
  });

  //slider
  $('.welcome__slider').owlCarousel({
    autoWidth: true,
    loop: true,
    nav: true,
    smartSpeed: 600,
    autoplay: true,
    dots: true
  });
})();
