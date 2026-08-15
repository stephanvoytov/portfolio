(function(){
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (!burger || !nav) return;

  burger.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      nav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();

(function(){
  document.querySelectorAll('[data-slider]').forEach(function(slider){
    var track = slider.querySelector('.slider-track');
    var slides = slider.querySelectorAll('.slider-slide');
    var prev = slider.querySelector('[data-slider-prev]');
    var next = slider.querySelector('[data-slider-next]');
    var count = slider.querySelector('[data-slider-count]');
    var i = 0;
    var startX = null;

    function pad(n){ return ('0' + n).slice(-2); }

    function update(){
      track.style.transform = 'translateX(-' + (i * 100) + '%)';
      count.textContent = pad(i + 1) + ' / ' + pad(slides.length);
    }

    prev.addEventListener('click', function(){
      i = (i - 1 + slides.length) % slides.length;
      update();
    });
    next.addEventListener('click', function(){
      i = (i + 1) % slides.length;
      update();
    });

    track.addEventListener('touchstart', function(e){
      startX = e.touches[0].clientX;
    }, { passive: true });
    track.addEventListener('touchend', function(e){
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next.click(); else prev.click();
      }
      startX = null;
    }, { passive: true });

    update();
  });
})();