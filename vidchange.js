function switchVideo(index) {
    const videos = document.querySelectorAll('.background-video');
    videos.forEach((video, i) => {
        video.style.display = i === index ? 'block' : 'none';
    });
}
