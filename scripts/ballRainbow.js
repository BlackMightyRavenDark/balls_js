"use strict";

import { colors } from "./main.js";
import { Ball } from "./ball.js";

export class BallRainbow extends Ball {
    constructor(x, y, radius, color, count) {
        super(x, y, radius, color);
        this.count = count;
        this.ballColors = [];
        for (let i = 0; i < count; ++i) {
            const cororId = Math.floor(Math.random() * (colors.length - 1));
            this.ballColors.push(colors[cororId]);
        }
    }

    draw(deviceContext, fill) {
        const TWO_PI = 6.28;
        const step = TWO_PI / this.count;
        let i = 0;
        for (let a = 0; a < TWO_PI; a += step) {
            deviceContext.beginPath();
            deviceContext.moveTo(this.x, this.y);
            deviceContext.arc(this.x, this.y, 10, a, a + step, false);
            deviceContext.fillStyle = this.ballColors[i];
            deviceContext.fill();
            ++i;
        }
    }

}