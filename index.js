    document.addEventListener("DOMContentLoaded", function() {
        const video = document.getElementById('bg-video');
        const playBtn = document.getElementById('play-trigger');
        const playIcon = document.getElementById('play-icon');

        if (playBtn) {
            playBtn.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    playIcon.className = 'fas fa-pause';
                } else {
                    video.pause();
                    playIcon.className = 'fas fa-play';
                }
            });
        }
    });
