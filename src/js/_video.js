const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#video-story-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function () {

  function toggleOverlay(event) {
    if (event.type === 'mouseleave') {
      videoOverlay.classList.add('hidden');
    } else {
      videoOverlay.classList.remove('hidden');
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = './img/story/pause-white.svg';

    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;

  } else {
    videoFile.pause();
    videoBtnIcon.src = './img/story/play-white.svg';
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;

  }

})
