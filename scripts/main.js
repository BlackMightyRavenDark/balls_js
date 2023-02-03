"use strict";
import { Ball } from "./ball.js";

const canvasWidth = 700;
const canvasHeight = 500;

const cubeSize = 50;

let ball = new Ball(60, 60, 10, "#ffff00");

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

const deviceContext = init();

let randomX;
let randomY;
do {
    randomX = randomRange(-5, 5);
    randomY = randomRange(-5, 5);
} while (randomX < 0.1 && randomY < 0.1);

ball.setDirection(randomX, randomY);

setInterval(function () {
    clearCanvas(deviceContext);
    ball.move();
    ball.bounds(0, 0, canvasWidth, canvasHeight);
    ball.draw(deviceContext);
}, 50);
