$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  if (wScroll > 200)
  {
      $("#myBtn").fadeIn(500)
  }
  else
  {
      $("#myBtn").fadeOut(500)
  }
});


$("#myBtn").click(function(){
    $("body").animate({scrollTop:'0'},1500)
})



$(document).ready(function()
{
  $("#loading").fadeOut(4000,function(){
    $("body").css("overflow","auto")
  })
})


$(window).scroll(function(){
  var wScroll = $(window).scrollTop();
  if (wScroll > 500)
  {
      $(".messi").css("backgroundColor","black")
  }
  else
  {
      $(".messi").css("backgroundColor","transparent")  
  }
});


$(window).scroll(function(){
    var wScroll = $(window).scrollTop();
    if (wScroll > 200)
    {
        $(".messsi").css("backgroundColor","black")
    }
    else
    {
        $(".messsi").css("backgroundColor","transparent")  
    }
  });
  
 
 



jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 500
    });
});




        $(".messsi").css("backgroundColor","red")  





function getTimeRemaining(endtime) {
    var t = new Date(2018,11,8,12,12,12) - Date.now();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  // count down timer:
  var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000);
  initializeClock('clockdiv', deadline);












 