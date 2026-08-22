<script lang="ts">
	import { Canvas } from '@threlte/core';
	import AmbientEnvironment from './AmbientEnvironment.svelte';
	import FluidShapes from './FluidShapes.svelte';
	import FloatingNodes from './FloatingNodes.svelte';
	import ConnectionLines from './ConnectionLines.svelte';
	import CameraRig from './CameraRig.svelte';

	const dpr = typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1;
</script>

<Canvas {dpr}>
	<CameraRig />
	<AmbientEnvironment />
	<FluidShapes />
	<FloatingNodes />
	<ConnectionLines />
</Canvas>
