import { expoOut } from 'svelte/easing';

export function grow(_: HTMLElement, {delay = 0, duration = 400}: any) {
	return {
		delay: delay,
		duration: duration,
		css: (t: number) => {
			const ease = expoOut(t);
			
			return `
				opacity: ${(t) * 1};
				transform: scaleY(${(ease) * 100}%);
				transform-origin: center bottom;
			`
		}
	}
}
