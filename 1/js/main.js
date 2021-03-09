import GraphHelper from "./GraphHelper.js";
import FigureHelper from "./FigureHelper.js";

const graphHelper = new GraphHelper();

graphHelper.labelAxes();
graphHelper.changeCoordinateSystem();
graphHelper.drawAxes();

const figureHelper = new FigureHelper(graphHelper.getContext());
const drawBtn = document.getElementById('draw-btn');
drawBtn.addEventListener('click', figureHelper.drawFigure.bind(figureHelper));

const rotateBtn = document.getElementById('rotate-btn');
rotateBtn.addEventListener('click', figureHelper.rotateFigure.bind(figureHelper));

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => window.location.refresh());
