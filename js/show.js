$('.accordeon_show').on('click', function() {
  let elem = $(this).closest('.accordeon_content').children('.hiden_content');
  let classElements = $('.accordeon_content');

  if(elem.css('display') === 'block') {
    elem.css('display', 'none');
    $(this).closest('.accordeon_content').find('.accordeon_content_item_text p').css('color','#000000');
    $(this).attr('class', 'fas fa-plus accordeon_show');
  } else {

  classElements.children('.hiden_content').each((i, obj) => {
    obj.style.display = 'none';
  });
  classElements.find('.accordeon_content_item_text p').each((i, obj) => {
    obj.style.color = '#000000';
  });
  classElements.find('.accordeon_show').each((i, obj) => {
    obj.className = 'fas fa-plus accordeon_show';
  });

  elem.css('display', 'block');
    $(this).closest('.accordeon_content').find('.accordeon_content_item_text p').css('color','#008fd5');
  $(this).attr('class', 'fas fa-minus accordeon_show')
  }

});

$('.show_menu').on('click', function() {
  let elem = $('.navigation_content');

  if(elem.css('display') === 'none') {
    elem.css('display', 'block');
  } else {
    elem.css('display', 'none');
  }
});
