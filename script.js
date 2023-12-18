$(".close-btn-box").mouseenter(function(){
  $('.left-box').append('<div class="after-element"></div>');
});
$(".close-btn-box").mouseleave(function(){
  $('.left-box .after-element').remove();
});

$('.close-btn-box').click(function () { 
  var leftBox = $('.left-box');
  var currentWidth = leftBox.width();
  var line1 = $('.close-btn-box .close-btn .line-1');
  var line2 = $('.close-btn-box .close-btn .line-2');

  if (currentWidth === 0) {
    leftBox.css('width', '100%');
    line1.css('transform', 'translate(0px, 4px) rotate(0deg)');
    line2.css('transform', 'translate(0px, 0px) rotate(0deg)');
    $(".close-btn-box").mouseenter(function(){
      $('.close-btn-box .close-btn .line-1').css('transform', 'translate(0px, 4px) rotate(15deg)');
      $('.close-btn-box .close-btn .line-2').css('transform', 'translate(0px, 0px) rotate(-15deg)');
    });
    $(".close-btn-box").mouseleave(function(){
      $('.close-btn-box .close-btn .line-1').css('transform', 'translate(0px, 4px) rotate(0deg)');
      $('.close-btn-box .close-btn .line-2').css('transform', 'translate(0px, 0px) rotate(0deg)');
    });
  } else {
    leftBox.css('width', '0%');
    line1.css('transform', 'translate(0px, 4px) rotate(-15deg)');
    line2.css('transform', 'translate(0px, 0px) rotate(15deg)');
    $(".close-btn-box").mouseenter(function(){
      $('.close-btn-box .close-btn .line-1').css('transform', 'translate(0px, 4px) rotate(-15deg)');
      $('.close-btn-box .close-btn .line-2').css('transform', 'translate(0px, 0px) rotate(15deg)');
    });
    $(".close-btn-box").mouseleave(function(){
      $('.close-btn-box .close-btn .line-1').css('transform', 'translate(0px, 4px) rotate(-15deg)');
      $('.close-btn-box .close-btn .line-2').css('transform', 'translate(0px, 0px) rotate(15deg)');
    });
  }
});

