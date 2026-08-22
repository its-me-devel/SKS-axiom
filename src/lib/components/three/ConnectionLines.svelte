<script lang="ts">
	import { T } from '@threlte/core';
	import { MeshLineGeometry, MeshLineMaterial } from '@threlte/extras';
	import { Vector3 } from 'three';
	import { sceneNodes, sceneOrigin } from './nodes';

	const origin = new Vector3(...sceneOrigin);
</script>

{#each sceneNodes as node (node.label)}
	<T.Mesh dispose={false}>
		<MeshLineGeometry points={[origin, new Vector3(...node.position)]} />
		<MeshLineMaterial width={0.012} color={node.color} opacity={0.32} transparent />
	</T.Mesh>
{/each}
