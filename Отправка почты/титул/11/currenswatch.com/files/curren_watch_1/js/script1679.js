/*Мягкий скролинг до якоря */

$(function(){
  var scrollTo = function() {

  var anchor = $(this).attr("href");
  //положение элемента
  var hAnchor = $(anchor).offset().top;

  //скролим
  $('body,html').animate( { scrollTop: hAnchor }, 700 );
    return false;
  };

  $(function(){
    $('.js-scrollto').on('click', scrollTo);
  });


});


// Order CountDown
Number.prototype.pad = function(size) {
    var s = String(this);
    if(typeof(size) !== "number"){size = 2;}

    while (s.length < size) {s = "0" + s;}
    return s;
}

function countDown(second,endMinute,endHour,endDay,endMonth,endYear) {
    var now = new Date();
    second = second || now.getSeconds();
    second = second + now.getSeconds();
    endYear =  endYear || now.getFullYear();
    endMonth = endMonth ? month - 1 : now.getMonth();   //номер месяца начинается с 0
    endDay = endDay || now.getDate();
    endHour = endHour || now.getHours() ;
    endMinute = endMinute || now.getMinutes();
    var endDate = new Date(endYear,endMonth,endDay,endHour,endMinute,second);
    var interval = setInterval(function() { //запускаем таймер с интервалом 1 секунду
        var time = endDate.getTime() - now.getTime();
        if (time < 0) {                      //если конечная дата меньше текущей
            clearInterval(interval);
        } else {
            var hours = Math.floor(time / 36e5) % 24;
            var minutes = Math.floor(time / 6e4) % 60;
            var seconds = Math.floor(time / 1e3) % 60;
            var digit='<div class="digit"><div class="numbers">';
            var end='</div><div class="text">';
            var end2='</div></div>';
            document.getElementById('timer1').innerHTML=digit+hours.pad(2)+end+'Часов'+end2+digit+minutes.pad(2)+end+'Минут'+end2+digit+seconds.pad(2)+end+'Секунд'+end2;
            document.getElementById('timer2').innerHTML=digit+hours.pad(2)+end+'Часов'+end2+digit+minutes.pad(2)+end+'Минут'+end2+digit+seconds.pad(2)+end+'Секунд'+end2;
            if (!seconds && !minutes && !hours) {
                clearInterval(interval);
            }
        }
        now.setSeconds(now.getSeconds() + 1); //увеличиваем текущее время на 1 секунду
    }, 1000);
}
countDown(2701); //устанавливаем таймер на прмерно 1 день
