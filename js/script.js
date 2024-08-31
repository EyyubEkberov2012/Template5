document.getElementById('playPauseBtn').addEventListener('click', () => {
    const audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
        this.textContent = 'Pause';
    } else {
        audio.pause();
        this.textContent = 'Play';
    }
});

document.getElementById('audio').addEventListener('timeupdate', () => {
    const audio = document.getElementById('audio');
    const progressBar = document.getElementById('progressBar');
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

document.getElementById('progressBar').addEventListener('input', (event) => {
    const audio = document.getElementById('audio');
    audio.currentTime = (event.target.value / 100) * audio.duration;
});

