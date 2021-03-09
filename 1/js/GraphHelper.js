class GraphHelper {
  padding = 20;
  
  constructor() {
    const canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    
    this.w = canvas.width = window.innerWidth / 2;
    this.cw = this.w / 2;
    this.h = canvas.height = window.innerHeight;
    this.ch = this.h / 2;
    this.context.font = "18px Arial";
  }
  
  changeCoordinateSystem() {
    this.context.transform(1, 0, 0, -1, 0, this.h)
    this.context.translate(this.cw, this.ch);
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
  
  getContext() {
    return this.context;
  }
}

export default GraphHelper;
