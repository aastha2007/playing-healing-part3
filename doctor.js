class Doctor{
    constructor(x,y){
        var options={
            friction:0.5,
            density:1,
        }
        this.body=Bodies.rectangle(x,y,50,100,options)
        this.width=50;
        this.height=100
        this.image=loadImage("images/doctor.png");

        World.add(world,this.body)

    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
      //  rectMode(CENTER);
       // fill("blue");
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        //rect(0,0,this.width,this.height)
        pop();

    }
}
