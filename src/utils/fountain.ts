/**
 * https://codepen.io/hyitypoi/pen/JZyzKx
 */
export class Fountain {
	limit: number;

	particles: {
		element: HTMLSpanElement;
		size: number;
		speedHorz: number;
		speedUp: number;
		spinVal: number;
		spinSpeed: number;
		top: number;
		left: number;
		direction: number;
	}[];

	autoAddParticle: boolean;

	height: number;

	sizes: number[];

	variants: string[];

	x: number | undefined;

	y: number | undefined;

	end: boolean;

	parent: HTMLSpanElement;

	constructor(x: number, y: number, parent: HTMLSpanElement, length: number) {
		this.limit = 21;
		this.particles = [];
		this.autoAddParticle = true;
		this.end = false;
		this.height = document.documentElement.clientHeight;
		this.sizes = [15, 20, 25, 35, 45];
		this.variants = ["❤", "♥"];
		this.x = x;
		this.y = y;
		this.parent = parent;

		setTimeout(() => {
			this.disable();
		}, length);
		setTimeout(() => {
			this.kill();
			this.particles.forEach((p) => {
				p.element.remove();
			});
			this.particles = [];
		}, length + 2000);

		this.loop();
	}

	loop() {
		if (this.autoAddParticle && this.particles.length < this.limit) {
			this.createParticle();
		}

		this.updateParticles();

		if (!this.end) requestAnimationFrame(this.loop.bind(this));
	}

	disable() {
		this.autoAddParticle = false;
	}

	kill() {
		this.end = true;
	}

	createParticle() {
		const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
		const speedHorz = Math.random() * 10;
		const speedUp = Math.random() * 25;
		const spinVal = Math.random() * 360;
		const spinSpeed = Math.random() * 35 * (Math.random() <= 0.5 ? -1 : 1);
		const top = this.y ?? 0 - size / 2;
		const left = this.x ?? 0 - size / 2;
		const direction = Math.random() <= 0.5 ? -1 : 1;

		const particle = document.createElement("span");
		particle.innerHTML =
			this.variants[Math.floor(Math.random() * this.variants.length)];
		particle.classList.add("particle");

		particle.setAttribute(
			"style",
			`
      font-size: ${size}px;
      top: ${top}px;
      left: ${left}px;
      transform: rotate(${spinVal}deg);
    `,
		);

		this.parent.appendChild(particle);

		this.particles.push({
			element: particle,
			size,
			speedHorz,
			speedUp,
			spinVal,
			spinSpeed,
			top,
			left,
			direction,
		});
	}

	updateParticles() {
		this.particles.forEach((p) => {
			/* eslint-disable no-param-reassign */
			p.left -= p.speedHorz * p.direction;
			p.top -= p.speedUp;
			p.speedUp = Math.min(p.size, p.speedUp - 1);
			p.spinVal += p.spinSpeed;
			/* eslint-enable no-param-reassign */

			if (p.top >= this.height + p.size) {
				this.particles = this.particles.filter((o) => o !== p);
				p.element.remove();
			}

			p.element.setAttribute(
				"style",
				`
        top: ${p.top}px;
        left: ${p.left}px;
        font-size: ${p.size}px;
        transform:rotate(${p.spinVal}deg);
      `,
			);
		});
	}
}
