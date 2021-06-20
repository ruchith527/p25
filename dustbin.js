class Dustbin {
	constructor(x, y, width, height) {
		var options = {
			isStatic: true,
			density: 1.0
		}

		this.w = width;
		this.h = height;
		this.body = Bodies.rectangle(x, y, width, height, options);

		World.add(world, this.body);



	}
	display() {
		var pos = this.body.position;
		push();
		rectMode(CENTER);

		fill("green");


		imageMode(CENTER);
		image(dustbinimg, 650, 280, 260, 200);
		pop();

	}
}