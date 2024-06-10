const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

const point = document.querySelector('.current-score');
const bestPoint = document.querySelector('.best-score');

let isGameOver = false;

let pointAtual = 0;
let recorde = localStorage.getItem('record') || 0;

const UpdatePoint = () => {
    if (!isGameOver) {
        pointAtual++;
        point.textContent = pointAtual;
    }
}

const UpdateRecord = () => {
    if(pointAtual > recorde){
        recorde = pointAtual;
        localStorage.setItem('recorde', recorde);
        bestPoint.textContent = recorde;
    }
}

const resetPoint = () => {
    pointAtual = 0;
    point.textContent = pointAtual;
}

const pointTimer = setInterval(() => {
    UpdatePoint();
}, 500);


const restartPoint = () => {
    UpdateRecord();
    resetPoint();
    clearInterval(pointTimer);
    pointTimer = setInterval(() => {
        UpdatePoint();
    }, 500);
}

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/imgs/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '35px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        isGameOver = true;

        clearInterval(loop);
    }
}, 10);

const restart = () => {

    isGameOver = false;

    gameOver.style.visibility = 'hidden';

    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    
        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = 'assets/imgs/game-over.png';
            mario.style.width = '70px';
            mario.style.marginLeft = '35px';
    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';

            isGameOver = true;
    
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);
document.addEventListener('click', jump);

restartButton.addEventListener('click', restart);
restartButton.addEventListener('click', restartPoint);