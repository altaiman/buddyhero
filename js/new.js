(function() {

  $('.modal').iziModal();

  // modal
  $('.buddy__more').on('click', function() {
    var title = $(this).parent().find('.buddy__name').text(),
        content = $(this).parent().find('.more').html(),
        id = $(this).closest('[data-buddy]').data('buddy');


    $('.modal_more').data('buddy', id);
    $('.modal_more .modal__title').empty().text(title);
    $('.modal_more .modal__content').empty().html(content);

    $('.modal_more').iziModal('open');
  });

  $('.buddy__get, .get').on('click', function() {
    $('.modal').iziModal('close');

    var action = ($(this).closest('[data-buddy]').data('buddy')) ? 'sendmail.php' : 'joinmail.php'
    
    $('.modal_get .form').attr('action', action);

    $('.modal_get').iziModal('open');
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

  $('.buddy__link').on('click', function(e) {
    e.preventDefault();

    var img = $(this).find('.buddy__photo img').clone();

    $('.modal_zoom .modal__content').html(img);

    $('.modal_zoom').iziModal('open');

    setTimeout(function() {
      $('.modal_zoom').iziModal('close');
    }, 3000)
  });

  $('.buddy-big').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('buddy');

    $('.buddy[data-buddy='+id+']').find('.buddy__more').trigger('click');
  });
})();
