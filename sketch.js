  //variaveis
var path, path_sprite;
var runner, runner_sprite;
var invisible_wall;
function preload(){
  //imagens pré-carregadas
path_sprite = loadImage("path.png");
runner_sprite = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  //crie sprite aqui
  path = createSprite(200,200);
  path.addAnimation("caminho", path_sprite);
  path.scale = 1.2;

  runner = createSprite(100,300);
  runner.addAnimation("corredor", runner_sprite);
  runner.scale = 0.1;
  

  invisible_wall = createSprite(175,200,1,300);
  invisible_wall.visible = true;
}

function draw() {
  background(0);
  
  //estrada
  path.velocityY = 5;
  if(path.y > 500){
    path.y = height/2;
  }
  //colisões
  runner.collide(invisible_wall);

  drawSprites();
}
