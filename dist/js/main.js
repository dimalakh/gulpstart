$(document).ready(function(){
  /*Slider*/
  slider = $('.bxslider').bxSlider({
    controls: false,
    mode: 'fade'
  });

  $('.all').html(slider.getSlideCount());

  $('.bx-pager-link').click(function(){
    $('.current').html((slider.getCurrentSlide()+1));
  });

  /*dynamic form titles*/
  $('a').click(function(){
    $('#dynamic-field').val($(this).attr('data-title'));
    console.log($(this).attr('data-title'));
  });

  /*gallery*/
  $('.gallery-item').hover(function(){
    $('.gallery-hover').width($(this).width() - 20);
    $('.gallery-hover').height($(this).height() - 20);
  });


  /*scrollTop*/
  $('.toTop').click(function() {
    $("html, body").animate({ scrollTop: 0 }, 600);
   return false;
  });

  /*utm*/
  var urlParams = new URLSearchParams(window.location.search);
  $('.utm_source').val(urlParams.get('utm_source'));
  $('.utm_region').val(urlParams.get('utm_region'));
  $('.utm_term').val(urlParams.get('utm_term'));
});



/*send mail*/
$("button.form-btn").click(function(e){
    e.preventDefault();

    var phone = $(this).parent().find('.req').val();

    if( phone <= 4){
      var inst = $('[data-remodal-id=modal4]').remodal();
      inst.open();
    }else{
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).parent().serialize(),
        success: function(msg){
          console.log('ok');
          var inst = $('[data-remodal-id=modal]').remodal();
          inst.open();
        },
        error: function(){
           alert("failure");
        }
      });
    }
 });
