let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");

let isVideoPlaying = false;


function playOrpauseVideo(){
    if(!isVideoPlaying){
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace("fa-play", "fa-pause");
    }else{
        video.pause();
        isVideoPlaying =false;
        playBtn.classList.replace("fa-pause", "fa-play");
    }
}

function updateprogressbar (event){
    let currentTime = event.target.currentTime;
    let duration = event.target.duration;

    progressBar.style.cssText = `
        width: ${(currentTime / duration) * 100}%
    `;
    
     
}

function updateseekbar (event) {
    let calculateWidth = progressRange.getBoundingClientRect();
    console.log(calculateWidth);
    
    let currentPoint = event.offsetX;
    let progressbarWidth = this.clientWidth;
    let currentRange = (currentPoint / progressbarWidth) * video.duration;
    video.currentTime = currentRange;
}



playBtn.addEventListener('click',playOrpauseVideo);
video.addEventListener('click',playOrpauseVideo);
video.addEventListener('timeupdate',updateprogressbar);
progressRange.addEventListener('click', updateseekbar);