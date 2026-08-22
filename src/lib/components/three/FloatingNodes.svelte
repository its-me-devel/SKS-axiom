<script lang="ts">
	import { T } from '@threlte/core';
	import { Float, HTML } from '@threlte/extras';
	import { sceneNodes } from './nodes';
</script>

{#each sceneNodes as node, i (node.label)}
	<Float speed={1.1 + (i % 3) * 0.2} floatIntensity={0.5} rotationIntensity={0.4} seed={i * 41}>
		<T.Mesh position={node.position}>
			<T.IcosahedronGeometry args={[0.055, 1]} />
			<T.MeshStandardMaterial
				color={node.color}
				emissive={node.color}
				emissiveIntensity={1.6}
				toneMapped={false}
			/>
			<HTML center pointerEvents="none" transform={false} zIndexRange={[1, 0]}>
				<span class="node-label" style:--node-color={node.color}>{node.label}</span>
			</HTML>
		</T.Mesh>
	</Float>
{/each}

<style>
	:global(.node-label) {
		display: inline-flex;
		align-items: center;
		gap: 0.4em;
		font-family: var(--font-display);
		font-size: 11px;
		font-weight: 600;
		letter-spacing: 0.12em;
		color: rgba(246, 244, 253, 0.82);
		background: rgba(10, 8, 20, 0.55);
		border: 1px solid rgba(247, 245, 255, 0.14);
		padding: 0.3em 0.65em;
		border-radius: 999px;
		white-space: nowrap;
		transform: translateY(-22px);
		backdrop-filter: blur(6px);
	}

	:global(.node-label)::before {
		content: '';
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--node-color);
		box-shadow: 0 0 8px var(--node-color);
	}

	@media (max-width: 900px) {
		:global(.node-label) {
			display: none;
		}
	}
</style>
