"use strict";

export class Ball {
    constructor(x, y, radius, colors) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rotationAngle = 0;
        this.rotationSpeed = 0;
        this.colors = colors;
    }

    draw(deviceContext, fill) {
        const TWO_PI = 6.28;
        if (this.colors.length > 1) {
            const step = TWO_PI / this.colors.length;
            let angle = this.rotationAngle;
            for (let i = 0; i < this.colors.length; ++i) {
                deviceContext.beginPath();
                deviceContext.moveTo(this.x, this.y);
                deviceContext.arc(this.x, this.y, this.radius, angle, angle + step, false);
                deviceContext.fillStyle = this.colors[i];
                deviceContext.fill();
                angle += step;
            }
        } else {
            deviceContext.beginPath();
            deviceContext.arc(this.x, this.y, this.radius, 0, TWO_PI, false);
            const col = this.colors[0];
            if (fill) {
                deviceContext.fillStyle = col;
                deviceContext.fill();
            } else {
                deviceContext.strokeStyle = col;
                deviceContext.stroke();
            }
        }
    }

    setDirection(dirX, dirY) {
        this.dirX = dirX;
        this.dirY = dirY;
    }

    setRotattionSpeed(speed) {
        this.rotationSpeed = speed;
    }

    move() {
        this.x += this.dirX;
        this.y += this.dirY;
    }

    rotate() {
        if (Math.abs(this.rotationSpeed) > 0.001) {
            this.rotationAngle += this.rotationSpeed;
            if (this.rotationAngle >= 360) {
                this.rotationAngle -= 360;
            } else if (this.rotationAngle < 0) {
                this.rotationAngle += 360;
            }
        }
    }

    bounds(minX, minY, maxX, maxY) {
        if (this.x < minX + this.radius) {
            this.x = minX + this.radius;
            this.dirX *= -1;
        } else if (this.x > maxX - this.radius) {
            this.x = maxX - this.radius;
            this.dirX *= -1;
        }

        if (this.y < minY + this.radius) {
            this.y = minY + this.radius;
            this.dirY *= -1;
        } else if (this.y > maxY - this.radius) {
            this.y = maxY - this.radius;
            this.dirY *= -1;
        }
    }
}
