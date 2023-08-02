
function toggleMusic() {
    const music = document.getElementById("audio-player");
    const musicToggleButton = document.getElementById("toggle-music");
    if (music.paused) {
    music.play();
    musicToggleButton.style.textDecoration = 'none';
  } else {
    music.pause();
    musicToggleButton.style.textDecoration = 'line-through';
}
}


function playJoke() {
    const sentence = document.getElementById('sentence');
    const demHeader = document.getElementById('demotivator-header');
    const words = sentence.innerText.split(' ');
    let currentWordIndex = 0;
  
    const utterance = new SpeechSynthesisUtterance();
  
    utterance.addEventListener('end', () => {
      currentWordIndex++;
  
      if (currentWordIndex < words.length) {
        utterance.text = words[currentWordIndex];
        demHeader.innerHTML = words[currentWordIndex];
        window.speechSynthesis.speak(utterance);
      }
    });
  
    utterance.text = words[currentWordIndex];
    demHeader.innerHTML = words[currentWordIndex];
    window.speechSynthesis.speak(utterance);
  }