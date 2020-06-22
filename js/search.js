$('.loup').on('click', function(){
  var search_form = $('.search_form');
  if(search_form.css('display')==='flex'){
      search_form.css('display', 'none');
  }
  else {
    search_form.css('display', 'flex');
  };
});

$(".slider_two")
    .jcarousel({
      items: '.slides_two',
      wrap: 'circular'
    })
    .jcarouselAutoscroll({
      interval: 4000,
      target: '+=1',
      autostart: true
    });


$('.accordeon_content_item_tab_show').on('click', function(){
  var hiden_content = $('.hiden_content');
  if(hiden_content.css('display')==='block'){
      hiden_content.css('display','none');
  }
  else{
    hiden_content.css('display', 'block');
  };
});
