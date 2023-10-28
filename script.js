score = 0;
cross = true;

audio = new Audio('Source/short-8-bit-background-music-for-video-mobile-game-old-school-164704.mp3')
audiogo = new Audio('Source/mixkit-arcade-retro-game-over-213 (1).wav')
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function(e){
    console.log("Key Code is: " , e.key);
    if(e.key == 'ArrowUp'){
        player = document.querySelector('.player');
        player.classList.add('animatePlayer');
        setTimeout(() => {
        player.classList.remove('animatePlayer');
        }, 700);
    }
    if(e.key == 'ArrowRight'){
        player = document.querySelector('.player');
        playerX =  parseInt(window.getComputedStyle(player , null).getPropertyValue('left'));
        player.style.left = playerX + 120 + "px";
    }
    if(e.key == 'ArrowLeft'){
        player = document.querySelector('.player');
        playerX =  parseInt(window.getComputedStyle(player , null).getPropertyValue('left'));
        player.style.left = (playerX - 120) + "px";
    }
}
setInterval(() => {
    player = document.querySelector('.player');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(player , null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(player , null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle , null).getPropertyValue('top'));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    // console.log(offsetX , offsetY)
    if(offsetX<100 && offsetY<50)
    {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play(); 
        setTimeout(() => { 
            audio.pause();
        }, 100);
        setTimeout(() => {
            audiogo.pause(); 
            audio.pause();
        }, 1000);
    }
    else if(offsetX<100 && cross){
        score+=10;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }
    setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(player , null).getPropertyValue('animation-duration'));
    newDur = aniDur - 0.1;
    obstacle.style.animationDuration = newdur + 's';
    console.log('animation duration: ',newDur);
    }, 500);
}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}