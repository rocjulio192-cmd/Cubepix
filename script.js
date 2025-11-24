const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let x=300, y=200, speed=6;
let left=false, right=false, up=false, down=false;

document.addEventListener("keydown", e=>{
  if(e.key==="q" || e.key==="Q") left=true;
  if(e.key==="d" || e.key==="D") right=true;
  if(e.key==="z" || e.key==="Z") up=true;
  if(e.key==="s" || e.key==="S") down=true;
});

document.addEventListener("keyup", e=>{
  if(e.key==="q" || e.key==="Q") left=false;
  if(e.key==="d" || e.key==="D") right=false;
  if(e.key==="z" || e.key==="Z") up=false;
  if(e.key==="s" || e.key==="S") down=false;
});

function update(){
  if(left) x-=speed;
  if(right) x+=speed;
  if(up) y-=speed;
  if(down) y+=speed;
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="white";
  ctx.fillRect(x,y,30,30);
}

function loop(){ update(); draw(); requestAnimationFrame(loop); }
loop();
