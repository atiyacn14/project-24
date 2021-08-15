class Stone{
	constructor(x,y,w,h)
	{
	// assign options to the stone
	 var options ={
		 restitution : 0.8,
		 friction : 0.9,
		 density:12
	 }
		this.x=x;
		this.y=y;
		this.w=w;
        this.h = h;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
            rect(0, 0, this.w, this.h)
			pop()
	}

}