var fundoTela;

async function setup() {
    createCanvas(464*2, 260*2);
    fundoTela = await loadImage("assets/background.jpg");
    player = new Nave(270,150,"red");
}

function draw() {
    background(fundoTela);
    player.show();
    gameControls();

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
