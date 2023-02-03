"use strict";

export class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(deviceContext) {
        deviceContext.strokeStyle = this.color;
        deviceContext.beginPath();
        deviceContext.arc(this.x, this.y, this.radius, 0, 6.28, false);
        deviceContext.stroke();
    }

    setDirection(dirX, dirY) {
        this.dirX = dirX;
        this.dirY = dirY;
    }

    move() {
        this.x += this.dirX;
        this.y += this.dirY;
    }

    bounds(minX, minY, maxX, maxY) {
        if (this.x < minX) {
            this.x = minX;
            this.dirX *= -1;
        } else if (this.x > maxX) {
            this.x = maxX;
            this.dirX *= -1;
        }

        if (this.y < minY) {
            this.y = minY;
            this.dirY *= -1;
        } else if (this.y > maxY) {
            this.y = maxY;
            this.dirY *= -1;
        }
    }
}
