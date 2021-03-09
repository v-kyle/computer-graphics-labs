import GraphHelper from "./GraphHelper.js";

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const w = canvas.width = window.innerWidth / 2;
const cw = w / 2;
const h = canvas.height = window.innerHeight;
const ch = h / 2;

context.font = "18px Arial";

const graphHelper = new GraphHelper(context, w, h);

graphHelper.labelAxes();
graphHelper.changeCoordinateSystem();
graphHelper.drawAxes();


// context.fillStyle = "#0000ff";
// context.fillRect(0 - 75, 0 - 75, 150, 150);
