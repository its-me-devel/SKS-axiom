import { animate, onScroll, stagger as animeStagger } from 'animejs';
import { prefersReducedMotion } from './reducedMotion.svelte';

export interface RevealOptions {
	/** Selector for child elements to animate individually; omit to animate the node itself. */
	selector?: string;
	/** Starting vertical offset in px. */
	y?: number;
	/** Starting scale. */
	scale?: number;
	duration?: number;
	/** Extra delay before the animation starts, in ms. */
	delay?: number;
	/** Stagger between matched targets, in ms. Only used with `selector`. */
	stagger?: number;
}

/**
 * Scroll-triggered entrance reveal built on Anime.js `onScroll`.
 * Falls back to an instant, static final state when the user prefers reduced motion.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	const { selector, y = 28, scale = 1, duration = 900, delay = 0, stagger = 70 } = options;

	const targets = selector ? node.querySelectorAll<HTMLElement>(selector) : node;

	if (prefersReducedMotion()) {
		return {};
	}

	const animation = animate(targets, {
		opacity: [0, 1],
		translateY: [y, 0],
		...(scale !== 1 ? { scale: [scale, 1] } : {}),
		duration,
		delay: selector ? animeStagger(stagger, { start: delay }) : delay,
		ease: 'outExpo',
		autoplay: onScroll({
			target: node,
			enter: 'bottom-=8% top',
			repeat: false
		})
	});

	return {
		destroy() {
			animation.revert();
		}
	};
}
