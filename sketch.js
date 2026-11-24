var fundoTela;
var player;
var munic;

var mx;
var my;
var value;


async function setup() {
    createCanvas(464*2, 260*2);
    fundoTela = await loadImage("assets/background.jpg");
    //fazer o jogador
    player = new Nave(270,150,"red");

    mx = mouseX;
    my = mouseY;
   
    munic =[];
}

function draw() {


    background(fundoTela);
    //jogador aparecer na tela
    player.show();
    //controles
    gameControls();
    //disparos
    drawBullets();
    removeBullets();
    text('x:'+int(mouseX),100,100);
    
     // Style the square.
    fill(value);

  // Draw the square.
    square(25, 25, 50);

    pew();
}


function pew(){
    if(keyIsPressed===true){
        if(keyCode===32){
            let b= new Bullet(player.xNave, player.yNave);
        munic.push[b];
        return false;

        }
    }

}


/*function keyPressed(){
    if(keyCode===32){

        let b= new Bullet(player.xNave, player.yNave);
        munic.push[b];
        return false;
    }    

    if (value === 0) {
        value = 255;
    } else {
        value = 0;
    }
    
} */

function drawBullets(){
    //disparos
    for(let i=0;i<munic.length;i++){
        munic[i].show();
        munic[i].automove(4);
    }

}

function removeBullets(){
    //disparos
    for(let i=0;i<munic.length;i++){
       if(munic[i].x<-5){
            munic.splice(i,20);
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
