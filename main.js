{
  window.addEventListener('keydown', e => {
    const keyCode = e.keyCode;
    const keys = document.querySelectorAll('div[data-key]');
    const audios = document.querySelectorAll('audio[data-key]');
    for (key of keys) {
      if (key.dataset.key == keyCode) {
        key.classList.add('playing');
        key.addEventListener('transitionend', event => {
          event.currentTarget.classList.remove('playing');
        });
      }
    }
    for (audio of audios) {
      if (audio.dataset.key == keyCode) {
        audio.play();
      }
    }
  });
}
