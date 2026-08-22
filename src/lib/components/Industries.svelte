<script lang="ts">
	import { industries } from '$lib/data/industries';
	import { reveal } from '$lib/motion/reveal';
</script>

<section class="industries">
	<div class="container">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">Who we work with</span>
			<h2>Built for teams across every industry</h2>
		</div>

		<ul class="grid" use:reveal={{ selector: '.chip', stagger: 40, y: 16 }}>
			{#each industries as industry (industry.name)}
				{@const Icon = industry.icon}
				<li class="chip">
					<Icon size={18} strokeWidth={1.75} />
					<span>{industry.name}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.industries {
		padding-block: var(--section-pad-block);
	}

	.heading {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-xl);
		max-width: 560px;
	}

	.heading h2 {
		font-size: var(--fs-2xl);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--space-sm);
	}

	.chip {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: var(--space-md) var(--space-sm);
		text-align: center;
		border-radius: var(--radius-md);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		color: var(--text-muted);
		font-size: var(--fs-xs);
		font-weight: 500;
		transition:
			transform var(--dur-base) var(--ease-out),
			border-color var(--dur-base) var(--ease-out),
			color var(--dur-base) var(--ease-out);
	}

	.chip:hover {
		transform: translateY(-3px);
		border-color: var(--surface-border-strong);
		color: var(--text);
	}

	.chip :global(svg) {
		color: var(--violet);
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 560px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
