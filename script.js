document.addEventListener("DOMContentLoaded", function() {
    const videoPlayer = document.getElementById("videoPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const videoInput = document.getElementById("videoInput");

    playPauseBtn.addEventListener("click", function() {
        if (videoPlayer.paused || videoPlayer.ended) {
            videoPlayer.play();
            playPauseBtn.textContent = "Pause";
        } else {
            videoPlayer.pause();
            playPauseBtn.textContent = "Play";
        }
    });

    videoInput.addEventListener("change", function(event) {
        const file = event.target.files[0];
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        playPauseBtn.textContent = "Play";
    });
});
