function removeTransition(e) {
  //skip it if it's not a transform
  if (e.propertyName !== "transform") return;
  //If it is a transform, then do it...
  e.target.classList.remove("playing");
}

function playMusic(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return; //if not audio, stop the function from running

  key.classList.add("playing");
  audio.currentTime = 0; //Rewind to the start;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playMusic);
