// const mainBtn = document.querySelector('.start-stop');
// const videoFrame = document.querySelector('.cameraFrame');

// const startBtn = document.querySelector('.startBtn');
// const stopBtn = document.querySelector('.stopBtn');

// let videoSrc = videoFrame.src;
// console.log(videoSrc);

// mainBtn.addEventListener('click', () => {
//     mainBtn.classList.toggle('active');

//     if (mainBtn.classList.contains('active')) {

//         videoFrame.style.border = '2px solid green';
//         videoFrame.style.boxShadow = '0 0 10px green';

//         videoFrame.src = videoSrc;

//         startBtn.style.animation = 'FadeOut 0.2s forwards';
//         stopBtn.style.animation = 'FadeIn 0.2s forwards';

//     } else {

//         videoFrame.style.border = '2px solid red';
//         videoFrame.style.boxShadow = '0 0 10px red';
        
//         videoFrame.src = 'https://placehold.co/288x162/28282B/whitesmoke?text=Camera+Off';

//         startBtn.style.animation = 'FadeIn 0.2s forwards';
//         stopBtn.style.animation = 'FadeOut 0.2s forwards';

//     }
// });

// const aboutBtn = document.querySelector('.abt-btn');
// const aboutDev = document.querySelector('.aboutDev');
// const closeBtn = document.querySelector('.closeBtn');
// const cards = document.querySelectorAll('.card');

// aboutBtn.addEventListener('click', () => {
//     aboutDev.style.display = 'flex';
//     aboutDev.style.animation = 'openAnim 0.5s forwards';
//     cards.forEach(card => {
//         card.style.display = 'flex';
//     });
// });

// closeBtn.addEventListener('click', () => {
//     aboutDev.style.animation = 'closeAnim 0.5s forwards';
//     aboutDev.addEventListener('animationend', () => {
//         if (aboutDev.style.animation === 'closeAnim 0.5s forwards') {
//             aboutDev.style.display = 'none';
//             cards.forEach(card => {
//                 card.style.display = 'none';
//             });
//         }
//     });
// });

const mainBtn = document.querySelector('.start-stop');
const videoFrame = document.querySelector('.cameraFrame');
const loading = document.querySelector('.loading');

const startBtn = document.querySelector('.startBtn');
const stopBtn = document.querySelector('.stopBtn');

let videoSrc = videoFrame.src;

mainBtn.addEventListener('click', () => {
    mainBtn.classList.toggle('active');

    if (mainBtn.classList.contains('active')) {
        startCamera();
    } else {
        stopCamera();
    }
});

function startCamera() {
    videoFrame.style.border = '2px solid green';
    videoFrame.style.boxShadow = '0 0 10px green';
    videoFrame.src = videoSrc;

    loading.style.display = 'block';

    setInterval(() => {
        loading.style.display = 'none';
    }, 8000);

    startBtn.style.animation = 'FadeOut 0.2s forwards';
    stopBtn.style.animation = 'FadeIn 0.2s forwards';
}

function stopCamera() {
    videoFrame.style.border = '2px solid red';
    videoFrame.style.boxShadow = '0 0 10px red';
    videoFrame.src = 'https://placehold.co/288x162/28282B/whitesmoke?text=Camera+Off';

    startBtn.style.animation = 'FadeIn 0.2s forwards';
    stopBtn.style.animation = 'FadeOut 0.2s forwards';
}