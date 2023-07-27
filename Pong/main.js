 const canvas = document.getElementById('gameCanvas');
 const ctx = canvas.getContext('2d');

 // Game state variables
 let paddle1Y = canvas.height / 2 - 60;
 let paddle2Y = canvas.height / 2 - 60;
 let ballX = canvas.width / 2;
 let ballY = canvas.height / 2;
 let ballSpeedX = 5;
 let ballSpeedY = 5;
 let score1 = 0;
 let score2 = 0;
 let scored = 0
 let countdown = 0

 document.addEventListener('keydown', handleKeyDown);
 document.addEventListener('keyup', handleKeyUp);

 function handleKeyDown(e) {
   if (e.key === 'w') {
     paddle1Y -= 10;
   } else if (e.key === 's') {
     paddle1Y += 10;
   } else if (e.key === 'ArrowUp') {
     paddle2Y -= 10;
   } else if (e.key === 'ArrowDown') {
     paddle2Y += 10;
   }
 }

 function handleKeyUp(e) {
   if (e.key === 'w' || e.key === 's') {
     paddle1Y += 0;
   } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
     paddle2Y += 0;
   }
 }




  function resetBall(score)
  {     
    if (score == "p1")
    {
      countdown = 3
      scored = 1
      ballSpeedX = 0;
      ballSpeedY = 0;
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
      setTimeout(() => {
      ballSpeedX = 5;
      ballSpeedY = 5;
      }, 3000);
    }

    if (score == "p2")
    {
      countdown = 3
      scored = 2
      ballSpeedX = 0;
      ballSpeedY = 0;
      ballX = canvas.width / 2;
      ballY = canvas.height / 2;
      setTimeout(() => {
      ballSpeedX = -5;
      ballSpeedY = 5;
      }, 3000);
    }
    return;
  }

 function update() {

   ballX += ballSpeedX;
   ballY += ballSpeedY;

   // Ball collision with paddles
   if (
     ballY > paddle1Y &&
     ballY < paddle1Y + 200 &&
     ballX < 10
   ) {
     ballSpeedX *= -1;
   }

   if (
     ballY > paddle2Y &&
     ballY < paddle2Y + 200 &&
     ballX > canvas.width - 10
   ) {
     ballSpeedX *= -1;
   }

   // Ball collision with walls
   if (ballY > canvas.height || ballY < 0) {
     ballSpeedY *= -1;
   }

   if (ballX > canvas.width)
   {
    let i = 10
    score1++
    resetBall("p1")
   }
   if (ballX < 0)
   {
    score2++
    resetBall("p2")
   }
        // Draw game elements
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   // Draw paddles
   ctx.fillRect(0, paddle1Y, 10, 200);
   ctx.fillRect(canvas.width - 10, paddle2Y, 10, 200);

   // Draw ball
   ctx.beginPath();
   ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
   ctx.closePath();
   ctx.fill();
   
   ctx.font = '28px Times New Roman Bold';
   ctx.fillStyle = '#000000';
   ctx.fillText('P1: ' + score1, 50, 50);
   ctx.fillText('P2: ' + score2, canvas.width - 150, 50);

   if (scored == 1)
   {
     ctx.fillText("P1 SCORED!", canvas.width/2-70, canvas.height/2 - 275)
     countdown = 3
     setTimeout(() => {
          countdown--
        }, 1000);
        setTimeout(() => {
          countdown--
        }, 1000);
        setTimeout(() => {
          countdown--
        }, 1000);
        scored = 0

    }
   
   if (scored == 2)
   {
     ctx.fillText("P2 SCORED!", canvas.width/2-70, canvas.height/2 - 275)
   }

   if (1)
   {

    ctx.fillText(countdown, canvas.width/2-30, canvas.height/2 - 250)
   }

   requestAnimationFrame(update);
 }

 // Start the game loop
 update();
