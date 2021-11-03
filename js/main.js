$(function () {
  $(".slider").slick({
    arrows: false,
    fade: true,
    autoplay: 3000,
    dots: true,
    adaptiveHeight:false,
    mobileFirst:true
  });

  $('.burger-menu').on('click', function () {
    $('.menu').addClass('active');

  });
  $('.close-btn').on('click', function () {
    $('.menu').removeClass('active');

  });
  $('.btn').on('click', function () {
    $('.test__drive').addClass('active');

  });
  $('.close-btn').on('click', function () {
    $('.test__drive').removeClass('active');

  });
  $('.menu__list').on('click', function () {
    $('.menu').removeClass('active');

  });
  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 0.1);
    return false;
  });

  let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.1 // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
  for (let i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      let w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
      t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
        start = null;
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash // URL с хэшем
        }
      }
    }, false);
  }
});