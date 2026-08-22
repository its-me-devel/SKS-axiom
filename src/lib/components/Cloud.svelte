<script lang="ts">
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
	import Route from '@lucide/svelte/icons/route';
	import Network from '@lucide/svelte/icons/network';
	import Server from '@lucide/svelte/icons/server';
	import Database from '@lucide/svelte/icons/database';
	import HardDrive from '@lucide/svelte/icons/hard-drive';
	import Lock from '@lucide/svelte/icons/lock';
	import Activity from '@lucide/svelte/icons/activity';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';

	const stack = [
		{ label: 'Route 53 / DNS', icon: Route },
		{ label: 'Load Balancer', icon: Network },
		{ label: 'EC2 Compute', icon: Server }
	];

	const dataLayer = [
		{ label: 'RDS Database', icon: Database },
		{ label: 'S3 Storage', icon: HardDrive }
	];

	const features = [
		{ label: 'SSL / TLS everywhere', icon: Lock },
		{ label: 'Uptime monitoring', icon: Activity },
		{ label: 'Automated backups', icon: ClipboardCheck }
	];
</script>

<section id="cloud" class="cloud">
	<GradientBlobField variant="cool" />

	<div class="container layout">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">Cloud &amp; AWS</span>
			<h2>Infrastructure your business can rely on</h2>
			<p class="lede">
				We design, deploy and operate AWS infrastructure that stays online, stays fast, and stays
				within budget — explained in plain language, not just diagrams.
			</p>
			<ul class="features">
				{#each features as feature (feature.label)}
					{@const Icon = feature.icon}
					<li><Icon size={15} strokeWidth={1.75} />{feature.label}</li>
				{/each}
			</ul>
		</div>

		<div class="stack-panel" use:reveal={{ y: 24, delay: 120 }}>
			{#each stack as layer, i (layer.label)}
				{@const Icon = layer.icon}
				<div class="layer">
					<span class="layer-icon"><Icon size={20} strokeWidth={1.75} /></span>
					<span>{layer.label}</span>
				</div>
				{#if i < stack.length - 1}
					<div class="down-arrow" aria-hidden="true"></div>
				{/if}
			{/each}

			<div class="down-arrow" aria-hidden="true"></div>

			<div class="data-row">
				{#each dataLayer as layer (layer.label)}
					{@const Icon = layer.icon}
					<div class="layer data">
						<span class="layer-icon"><Icon size={20} strokeWidth={1.75} /></span>
						<span>{layer.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.cloud {
		position: relative;
		padding-block: var(--section-pad-block);
		overflow: hidden;
	}

	.layout {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr 0.85fr;
		gap: var(--space-2xl);
		align-items: center;
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.heading h2 {
		font-size: var(--fs-3xl);
	}

	.features {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		margin-top: var(--space-sm);
	}

	.features li {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: var(--fs-sm);
		color: var(--text-muted);
	}

	.features li :global(svg) {
		color: var(--cyan);
		flex-shrink: 0;
	}

	.stack-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
		box-shadow: var(--shadow-card);
	}

	.layer {
		display: flex;
		align-items: center;
		gap: 0.65rem;
		width: 100%;
		max-width: 260px;
		padding: 0.75rem 1.1rem;
		border-radius: var(--radius-md);
		background: var(--bg-elevated);
		border: 1px solid var(--surface-border-strong);
		font-family: var(--font-display);
		font-size: var(--fs-sm);
		font-weight: 600;
		color: var(--text);
	}

	.layer-icon {
		color: var(--cyan);
		display: inline-flex;
	}

	.down-arrow {
		width: 2px;
		height: var(--space-md);
		background: var(--surface-border-strong);
	}

	.data-row {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
		justify-content: center;
	}

	.layer.data {
		max-width: 200px;
	}

	.layer.data .layer-icon {
		color: var(--magenta);
	}

	@media (max-width: 900px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
