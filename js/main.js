
var callback = function(){
  let d = document;

  function playSound(e) {

    let audio;
    let key;

    if (e.type == 'keydown') {
      audio = d.querySelector(`audio[data-key="${e.keyCode}"]`);
      key = d.querySelector(`.key[data-key="${e.keyCode}"]`);
    } else {
      let keycode = e.target.dataset.key;
      audio = d.querySelector(`audio[data-key="${keycode}"]`);
      key = d.querySelector(`.key[data-key="${keycode}"]`);
    }

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }

  const keys = d.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  d.querySelector('#drums').addEventListener('click',playSound);
};


document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    callback();
  }
}
