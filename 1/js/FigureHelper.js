class FigureHelper {
  constructor(ctx) {
    this.context = ctx;
  }
  
  drawFigure(e) {
    e.preventDefault();
    this.context.strokeStyle = 'black';
    this.p1x = +document.getElementById('p1x').value;
    this.p1y = +document.getElementById('p1y').value;
    this.p2x = +document.getElementById('p2x').value;
    this.p2y = +document.getElementById('p2y').value;
    this.p3x = +document.getElementById('p3x').value;
    this.p3y = +document.getElementById('p3y').value;
    
    this.context.beginPath();
    this.context.moveTo(this.p1x, this.p1y);
    this.context.lineTo(this.p2x, this.p2y);
    this.context.lineTo(this.p3x, this.p3y);
    this.context.lineTo(this.p1x, this.p1y);
    this.context.closePath();
    this.context.stroke();
  }
  
  rotateFigure(e) {
    e.preventDefault();
    const px = +document.getElementById('px').value;
    const py = +document.getElementById('py').value;
    const angle = +document.getElementById('angle').value * Math.PI / 180;
    
    const p1x = px + (this.p1x - px) * Math.cos(angle) - (this.p1y - py) * Math.sin(angle);
    const p1y = py + (this.p1x - px) * Math.sin(angle) + (this.p1y - py) * Math.cos(angle);
    const p2x = px + (this.p2x - px) * Math.cos(angle) - (this.p2y - py) * Math.sin(angle);
    const p2y = py + (this.p2x - px)* Math.sin(angle) + (this.p2y - py) * Math.cos(angle);
    const p3x = px + (this.p3x - px) * Math.cos(angle) - (this.p3y - py) * Math.sin(angle);
    const p3y = py + (this.p3x - px)* Math.sin(angle) + (this.p3y - py) * Math.cos(angle);
  
    this.context.strokeStyle = 'red';
    this.context.beginPath();
    this.context.arc(px, py, 3, 0, 2 * Math.PI);
    this.context.stroke()
    this.context.beginPath();
    this.context.moveTo(p1x, p1y);
    this.context.lineTo(p2x, p2y);
    this.context.lineTo(p3x, p3y);
    this.context.lineTo(p1x, p1y);
    this.context.closePath();
    this.context.stroke();
  }
}

export default FigureHelper;
