(function($){


  var landing          = $('#banner');
  var landLi					 = landing.find('li');
  landLi.addClass('ani')

	$(window).animate({scrollTop:0}, 300);
  $('html, body').animate({scrollTop:0}, 300);

  var box = $('.pageBox');
  var boxList = [];
  var boxLen  = box.length;
  var j = 0;

  // 하나씩 찾아서 넣기 
  // boxList[0] = box.eq(0).offset().top;
  // boxList[1] = box.eq(1).offset().top;
  // boxList[2] = box.eq(2).offset().top;
  // boxList[3] = box.eq(3).offset().top;


  // each각각 알아서
  $.each(box, function(i,v){
    // 각각 상단에서 얼마나 떨어졌는지?
    boxList[i] = $(this).offset().top;
  });

    // console.log(box);

  var go = true;
  // ff에서는 DOMMouseScroll만 먹는다
  $('html, body').on('mousewheel DOMMuseScroll',function(e){
    // {originalEvent:{ wheelDelta:-120 } }
    // 휠에 관한 이벤트 = e.originalEvent
    var originE  = e.originalEvent;
    var foxevt   = originE.detail;
    var evt      = originE.wheelDelta;
    var delta;
    // ff에서는 어떠한 이벤트를 받아들이는가?---------------
    if(foxevt){
      console.log('ff에는 detail이라는 속성이 존재한다');
      foxevt *= -40;
      delta = foxevt;
    } else {
      console.log('wheelDelta 속성이 존재한다.')
      delta = evt;
    }
    // ------------------------------------------------

		// 이벤트 처리값의 양수/음수의 판단 여부로 동작
    // 단, 반복수행되는 터치마우스의 기능을 한 번이 동작으로 처리하기 위해 강제로 조건문을 막도록 처리(변수 go기능)
    if(delta < 0 && go){
      go = false;
      // if문이 반복되면 가독성이 떨어지니까 3항 연산자로 바꿔서 사용함
      (j >= boxLen - 1) ? j = boxLen - 1 : j += 1;
      // console.log('마우스를 내렸습니다.', j);
    } else if(delta> 0 && go) {
      go = false;
      (j <= 0) ?          j = 0          : j -= 1;
      // console.log('마우스를 올렸습니다.', j);
    };


    $('html').stop().animate({scrollTop:boxList[j]}, 1000 , function(){
      go = true;
    });

  });


	$('body').css({overflow:'hidden'});
  $(window).on('keyup', function(e){
    var mykey = e.key.toLowerCase();

    if(mykey == 'home'){
      j = 0 ;
      $('html,body').stop().animate({scrollTop:boxList[j]});
    } else if(mykey == 'end') {
      j = boxList.length-1;
      $('html,body').stop().animate({scrollTop:boxList[j]});
    } else if (mykey == 'pageup'){
      j -= 1;
      $('html,body').stop().animate({scrollTop:boxList[j]});
    } else if (mykey == 'pagedown'){
      j += 1;
      $('html,body').stop().animate({scrollTop:boxList[j]});
    };

  });


	var gnb           = $('#globalNavigation');
  var gnbLi         = gnb.find('li');
  var timed         = 1000;
  $('html, body').animate({scrollTop:0}, timed/10);
  gnbLi.eq(0).addClass('select');

  // sideLi를 클릭시 순서값을 파악해서 스크롤이 이동하게 한다
  gnbLi.on('click', function(e){
    e.preventDefault();

    var i   = $(this).index();
    var ot  = box.eq(i+1).offset().top;

    $('html, body').animate({scrollTop:ot}, timed)


  });

  var h1					= $('h1');

  h1.on('click', function(e){
    e.preventDefault();

    $('html, body').animate({scrollTop:0}, timed)
  });



})(jQuery);