class GraphHelper {
  context = document.getElementById('canvas').getContext('2d');
  
  w = window.innerWidth;
  cw = this.w / 2;
  h = window.innerHeight;
  ch = this.h / 2;
  
  padding = 20;
  
  constructor(ctx, w, h, padding = 20) {
    if (ctx) {
      this.context = ctx
    }
    this.w = w;
    this.cw = w / 2;
    this.h = h;
    this.ch = h / 2;
  }
  
  changeCoordinateSystem() {
    this.context.transform(1, 0, 0, -1, 0, this.h)
    this.context.translate(this.w / 2, this.h / 2);
  }
  
  labelAxes() {
    this.context.fillText("Y", this.cw, this.padding);
    this.context.fillText("X", this.w - this.padding, this.ch);
    this.context.fillText("0", this.cw + 5, this.ch - 5);
  }
  
  drawAxes() {
    this.context.beginPath();
    this.context.moveTo(0, this.ch - this.padding);
    this.context.lineTo(0, -this.ch + this.padding);
    this.context.closePath();
    this.context.stroke();
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.moveTo(0, this.ch - this.padding);
    this.context.lineTo(5, this.ch - 25);
    this.context.lineTo(-5, this.ch - 25);
    this.context.closePath();
    this.context.fill();
  
    this.context.beginPath();
    this.context.moveTo(this.cw - this.padding, 0);
    this.context.lineTo(- this.cw + this.padding, 0);
    this.context.closePath();
    this.context.stroke();
    this.context.fillStyle = 'black';
    this.context.beginPath();
    this.context.moveTo(this.cw - this.padding, 0);
    this.context.lineTo(this.cw - 25, 5);
    this.context.lineTo(this.cw - 25, -5);
    this.context.closePath();
    this.context.fill();
  }
}

export default GraphHelper;
