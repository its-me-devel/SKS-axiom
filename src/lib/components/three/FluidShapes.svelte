<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { AdditiveBlending, DoubleSide, Color, type Mesh, type ShaderMaterial } from 'three';
	import { fluidVertexShader, fluidFragmentShader } from './fluidBlobShader';

	interface Blob {
		position: [number, number, number];
		radius: number;
		detail: number;
		colors: [string, string, string];
		amp: number;
		freq: number;
		speed: number;
		opacity: number;
	}

	const blobs: Blob[] = [
		{
			position: [2.3, 0.3, -0.6],
			radius: 1.3,
			detail: 4,
			colors: ['#8b5cf6', '#ff3ec4', '#22d3ee'],
			amp: 0.11,
			freq: 0.5,
			speed: 0.05,
			opacity: 0.42
		},
		{
			position: [3.2, -0.9, -2.2],
			radius: 0.85,
			detail: 3,
			colors: ['#22d3ee', '#4f6bff', '#8b5cf6'],
			amp: 0.09,
			freq: 0.6,
			speed: -0.07,
			opacity: 0.32
		},
		{
			position: [1.3, 1.3, -3.4],
			radius: 0.6,
			detail: 3,
			colors: ['#ff3ec4', '#a855f7', '#22d3ee'],
			amp: 0.12,
			freq: 0.65,
			speed: 0.08,
			opacity: 0.28
		}
	];

	const meshes: (Mesh | undefined)[] = [];
	const materials: (ShaderMaterial | undefined)[] = [];

	useTask((delta) => {
		for (let i = 0; i < blobs.length; i++) {
			const mesh = meshes[i];
			const material = materials[i];
			if (mesh) {
				mesh.rotation.y += delta * blobs[i].speed;
				mesh.rotation.x += delta * blobs[i].speed * 0.4;
			}
			if (material) {
				(material.uniforms.uTime.value as number) += delta;
			}
		}
	});
</script>

{#each blobs as blob, i (i)}
	<T.Mesh position={blob.position} bind:ref={meshes[i]} dispose={false}>
		<T.IcosahedronGeometry args={[blob.radius, blob.detail]} />
		<T.ShaderMaterial
			bind:ref={materials[i]}
			vertexShader={fluidVertexShader}
			fragmentShader={fluidFragmentShader}
			transparent
			blending={AdditiveBlending}
			depthWrite={false}
			side={DoubleSide}
			uniforms={{
				uTime: { value: 0 },
				uAmp: { value: blob.amp },
				uFreq: { value: blob.freq },
				uOpacity: { value: blob.opacity },
				uColorA: { value: new Color(blob.colors[0]) },
				uColorB: { value: new Color(blob.colors[1]) },
				uColorC: { value: new Color(blob.colors[2]) }
			}}
		/>
	</T.Mesh>
{/each}
