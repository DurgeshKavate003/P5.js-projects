class Bubble {
  constructor() {
    this.r = random(60, 80);
    this.x = random(this.r, width - this.r);
    this.y = random(this.r, height - this.r);
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.color = color(random(255),random(255),random(255),100)
  }

  show() {
    source.noFill();
    source.stroke(255);
    source.fill(this.color);
    source.strokeWeight(2);
    source.circle(this.x, this.y, this.r * 2);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x > width - this.r || this.x < this.r) {
      this.vx *= -1;
    }
    if (this.y > height - this.r || this.y < this.r) {
      this.vy *= -1;
    }
  }
}