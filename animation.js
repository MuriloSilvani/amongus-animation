const w = 93;
const h = 122;
const playerFrames = 11;

window.onload = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');

    spritesheet = new Image();
    spritesheet.src = 'spritesheet.png';
    frames = 0;
    playerFrame = 0;
    spritesheet.onload = animate;
};

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        spritesheet,
        w * playerFrame, 0,
        w, h,
        0, 0,
        w, h,
    );

    if (frames % 4 === 0) {
        playerFrame = (playerFrame + 1) % playerFrames;
    }

    frames++;
    window.requestAnimationFrame(animate);
};
