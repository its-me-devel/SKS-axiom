<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { onMount } from 'svelte';
	import type { PerspectiveCamera } from 'three';

	let camera: PerspectiveCamera | undefined = $state();
	let pointerX = 0;
	let pointerY = 0;
	let scrollProgress = 0;
	let smoothX = 0;
	let smoothY = 0;
	let smoothScroll = 0;

	onMount(() => {
		const onPointerMove = (event: PointerEvent) => {
			pointerX = (event.clientX / window.innerWidth) * 2 - 1;
			pointerY = (event.clientY / window.innerHeight) * 2 - 1;
		};

		const onScroll = () => {
			const max = window.innerHeight * 0.9;
			scrollProgress = Math.min(Math.max(window.scrollY / max, 0), 1);
		};

		window.addEventListener('pointermove', onPointerMove, { passive: true });
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();

		return () => {
			window.removeEventListener('pointermove', onPointerMove);
			window.removeEventListener('scroll', onScroll);
		};
	});

	useTask((delta) => {
		const lerpSpeed = Math.min(delta * 2.4, 1);
		smoothX += (pointerX - smoothX) * lerpSpeed;
		smoothY += (pointerY - smoothY) * lerpSpeed;
		smoothScroll += (scrollProgress - smoothScroll) * lerpSpeed;

		if (camera) {
			camera.position.x = smoothX * 0.4;
			camera.position.y = -smoothY * 0.3 + smoothScroll * 0.9;
			camera.position.z = 6.6 - smoothScroll * 1.4;
			camera.lookAt(2.0, 0, -1.2);
		}
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[0, 0, 6.6]}
	fov={42}
	near={0.1}
	far={30}
	bind:ref={camera}
/>
