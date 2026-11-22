class Bullet{

    constructor(x,y){
        this.x = x;
        
        this.y=y
    }

    show(){

        circle(this.x,this.y,5);
    }

    automove(speed){
        this.x = this.x - speed;
    }

}