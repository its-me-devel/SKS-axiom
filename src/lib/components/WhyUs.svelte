<script lang="ts">
	import { whyUsPoints } from '$lib/data/whyUs';
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
</script>

<section class="why-us">
	<GradientBlobField variant="warm" />

	<div class="container">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">Why work with us</span>
			<h2>A technical partner accountable for the whole system</h2>
		</div>

		<div class="grid" use:reveal={{ selector: '.point', stagger: 60, y: 22 }}>
			{#each whyUsPoints as point (point.title)}
				{@const Icon = point.icon}
				<div class="point">
					<span class="icon"><Icon size={20} strokeWidth={1.75} /></span>
					<h3>{point.title}</h3>
					<p>{point.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.why-us {
		position: relative;
		padding-block: var(--section-pad-block);
		overflow: hidden;
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		max-width: 620px;
		margin-bottom: var(--space-xl);
	}

	.heading h2 {
		font-size: var(--fs-3xl);
	}

	.grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	.point {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
	}

	.icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: var(--radius-md);
		background: var(--grad-surface);
		border: 1px solid var(--surface-border);
		color: var(--magenta);
		margin-bottom: var(--space-2xs);
	}

	.point h3 {
		font-size: var(--fs-base);
		font-weight: 600;
	}

	.point p {
		font-size: var(--fs-sm);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
