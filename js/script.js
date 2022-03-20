//========= animation walk =======
const playerElmt = document.querySelector('#player');
let distance = 0;
console.log(distance);

document.addEventListener('keydown', (event) => {
    const keyPressed = event.key;

    

    console.log(keyPressed);

    if (keyPressed === 'ArrowRight'){
        distance += 5;
        playerElmt.className = 'player-run';

        playerElmt.style.transform = `translateX(${distance}px)`;
    }

    if (keyPressed === 'ArrowLeft'){

        distance -= 5;
        playerElmt.className = 'player-run';

        playerElmt.style.transform = `translateX(${distance}px) scaleX(-1)`;
    }
});

// Retour au stade iddle
document.addEventListener('keyup', (event) =>{
    playerElmt.className = 'player-idle';
});

// création du sol 

const createGround = function(){
    const groundElmt = document.querySelector('#ground');
    for (let i = 0; i < 8; i++) {
        const tileGroundElmt = document.createElement('div');
        tileGroundElmt.classList.add('midle-ground');

        groundElmt.append(tileGroundElmt);
    }
}

createGround();