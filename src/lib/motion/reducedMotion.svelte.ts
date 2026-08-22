const state = $state({ reduced: false });

if (typeof window !== 'undefined') {
	const query = window.matchMedia('(prefers-reduced-motion: reduce)');
	state.reduced = query.matches;
	query.addEventListener('change', (event) => {
		state.reduced = event.matches;
	});
}

/** Reactive read of the user's `prefers-reduced-motion` preference. */
export function prefersReducedMotion() {
	return state.reduced;
}
