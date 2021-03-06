(() => {
  const mobile = document.querySelector('.js-container-mobile');
  const openBtn = document.querySelector('.js-open-Btn');
  const closeBtn = document.querySelector('.js-close-Btn');

  const toggleMenu = () => {
    const isMenuOpen =
      openBtn.getAttribute('aria-expanded') === 'true' || false;
    openBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobile.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobile.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
$( document ).ready(function() {

Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});
$('body').on('click touchstart', function () {
            const videoElement = document.getElementById('merivideo');
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play('merivideo');
            }
    });
});