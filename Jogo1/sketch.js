var fundoTela;
var player;
var ammunition;


async function setup() {
    createCanvas(464*2, 260*2);
    fundoTela = await loadImage("assets/background.jpg");
    //fazer o jogador
    player = new Nave(270,150,"red");

    ammunition =[];
}

function draw() {
    background(fundoTela);
    //jogador aparecer na tela
    player.show();
    //controles
    gameControls();

    //disparos
    drawBullets();
    //removeBullets();
   

}


function keyPressed(){
    if(keyCode===32){
        let b= new Bullet(player.xNave, player.yNave);
        ammunition.push[b];
    }    
    
}

function drawBullets(){
    //disparos
    for(let i=0;i<ammunition.length;i++){
        ammunition[i].show();
        ammunition[i].automove(4);
    }

}

function removeBullets(){
    //disparos
    for(let i=0;i<ammunition.length;i++){
       if(ammunition[i].x<-5){
        ammunition.splice(i,1);
       }
    }

}

function gameControls(){

    if(keyIsDown(UP_ARROW)){
        player.yNave = player.yNave -3;
    }

     if(keyIsDown(DOWN_ARROW)){
        player.yNave = player.yNave +3;
    }

    if(keyIsDown(LEFT_ARROW)){
        player.xNave = player.xNave -3;
    }

    if(keyIsDown(RIGHT_ARROW)){
        player.xNave = player.xNave +3;
    }
    
}
