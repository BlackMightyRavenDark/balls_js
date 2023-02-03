"use strict";
import { Ball } from "./ball.js";

const canvasWidth = 700;
const canvasHeight = 500;

const cubeSize = 50;

let balls = [];
let colors = [];

function init() {
    const canvas = document.getElementById("canvas");

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    return canvas.getContext("2d");
}

function clearCanvas(dc) {
    dc.fillStyle = "#000000";
    dc.fillRect(0, 0, canvasWidth, canvasHeight);

    dc.strokeStyle = "#ffffff";
    for (let x = 0; x <= canvasWidth; x += cubeSize) {
        dc.beginPath();
        dc.moveTo(x, 0);
        dc.lineTo(x, canvasHeight);
        dc.stroke();
    }

    for (let y = 0; y <= canvasHeight; y += cubeSize) {
        dc.beginPath();
        dc.moveTo(0, y);
        dc.lineTo(canvasWidth, y);
        dc.stroke();
    }
}

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function setBalls(count) {
    for (let i = 0; i < count; ++i) {
        let xPos = randomRange(0, canvasWidth);
        let yPos = randomRange(0, canvasHeight);
        let xDir;
        let yDir;
        do {
            xDir = randomRange(-5, 5);
            yDir = randomRange(-5, 5);
        } while (xDir < 0.1 && yDir < 0.1);

        let colorId = Math.round(randomRange(0, colors.length - 1));

        let ball = new Ball(xPos, yPos, 10, colors[colorId]);
        ball.setDirection(xDir, yDir);
        balls.push(ball);
    }
}

const deviceContext = init();

colors.push("#000000");
colors.push("#ff0000");
colors.push("#00ff00");
colors.push("#0000ff");
colors.push("#00ffff");
colors.push("#ff00ff");
colors.push("#ffff00");
colors.push("#ffffff");

setBalls(10);

setInterval(function () {
    clearCanvas(deviceContext);
    for (let i = 0; i < balls.length; ++i)
    {
        balls[i].move();
        balls[i].bounds(0, 0, canvasWidth, canvasHeight);
        balls[i].draw(deviceContext, true);
    }
}, 50);
