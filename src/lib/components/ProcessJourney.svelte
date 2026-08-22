<script lang="ts">
	import { processPhases } from '$lib/data/process';
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
	import { onMount } from 'svelte';
	import { prefersReducedMotion } from '$lib/motion/reducedMotion.svelte';
	import { animate, onScroll } from 'animejs';

	let trackEl: HTMLElement;
	let spineFillEl: HTMLElement;

	const flowLabels = [
		'Idea',
		'Discovery',
		'Planning',
		'Design',
		'Development',
		'Security',
		'Testing',
		'Deployment',
		'Go Live',
		'Monitoring',
		'Scale'
	];

	onMount(() => {
		if (prefersReducedMotion()) return;

		animate(spineFillEl, {
			scaleY: [0, 1],
			ease: 'linear',
			autoplay: onScroll({
				target: trackEl,
				enter: 'top 65%',
				leave: 'bottom 40%',
				sync: true
			})
		});
	});
</script>

<section id="process" class="process">
	<GradientBlobField variant="cool" />

	<div class="container">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">How we build</span>
			<h2>One continuous journey from idea to scale</h2>
			<p class="lede">
				Every engagement follows the same disciplined path — nothing skipped, nothing bolted on
				after the fact.
			</p>
			<ol class="flow" aria-hidden="true">
				{#each flowLabels as label, i (label)}
					<li>
						{label}{#if i < flowLabels.length - 1}<span class="sep">→</span>{/if}
					</li>
				{/each}
			</ol>
		</div>

		<div class="track" bind:this={trackEl}>
			<div class="spine">
				<div class="spine-fill" bind:this={spineFillEl}></div>
			</div>

			<ol class="phases">
				{#each processPhases as phase (phase.index)}
					{@const Icon = phase.icon}
					<li class="phase" use:reveal={{ y: 26 }}>
						<div class="phase-marker">
							<span class="phase-dot"><Icon size={16} strokeWidth={2} /></span>
						</div>
						<div class="phase-card">
							<span class="phase-index">{phase.index}</span>
							<h3>{phase.name}</h3>
							<p class="phase-summary">{phase.summary}</p>
							<ul class="phase-points">
								{#each phase.points as point (point)}
									<li>{point}</li>
								{/each}
							</ul>
							<p class="visual-idea"><em>{phase.visual}</em></p>
						</div>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.process {
		position: relative;
		padding-block: var(--section-pad-block);
		overflow: hidden;
	}

	.heading {
		max-width: 700px;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-2xl);
	}

	.heading h2 {
		font-size: var(--fs-3xl);
	}

	.flow {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem 0;
		margin-top: var(--space-sm);
		font-family: var(--font-display);
		font-size: var(--fs-xs);
		font-weight: 600;
		letter-spacing: 0.04em;
		color: var(--text-dim);
	}

	.flow li {
		display: inline-flex;
		align-items: center;
	}

	.sep {
		margin-inline: 0.4rem;
		color: var(--cyan);
		opacity: 0.6;
	}

	.track {
		position: relative;
		z-index: 1;
	}

	.spine {
		position: absolute;
		top: 6px;
		bottom: 6px;
		left: 23px;
		width: 2px;
		background: var(--surface-border);
		border-radius: var(--radius-pill);
	}

	.spine-fill {
		width: 100%;
		height: 100%;
		transform-origin: top;
		transform: scaleY(0);
		background: linear-gradient(180deg, var(--magenta), var(--violet) 45%, var(--cyan));
		border-radius: var(--radius-pill);
	}

	.phases {
		display: flex;
		flex-direction: column;
		gap: var(--space-xl);
	}

	.phase {
		position: relative;
		display: grid;
		grid-template-columns: 48px 1fr;
		gap: var(--space-md);
	}

	.phase-marker {
		display: flex;
		justify-content: center;
	}

	.phase-dot {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-elevated);
		border: 1px solid var(--surface-border-strong);
		color: var(--cyan);
		box-shadow: var(--glow-cyan);
		z-index: 1;
	}

	.phase-card {
		position: relative;
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
		box-shadow: var(--shadow-card);
	}

	.phase-index {
		font-family: var(--font-display);
		font-size: var(--fs-xs);
		font-weight: 700;
		letter-spacing: 0.1em;
		color: var(--text-dim);
	}

	.phase-card h3 {
		margin-top: 0.25rem;
		font-size: var(--fs-xl);
	}

	.phase-summary {
		margin-top: var(--space-2xs);
		font-size: var(--fs-sm);
	}

	.phase-points {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: var(--space-sm);
	}

	.phase-points li {
		font-size: var(--fs-2xs);
		color: var(--text-dim);
		background: rgba(247, 245, 255, 0.05);
		border: 1px solid var(--surface-border);
		padding: 0.28rem 0.6rem;
		border-radius: var(--radius-pill);
	}

	.visual-idea {
		margin-top: var(--space-sm);
		font-size: var(--fs-xs);
		color: var(--text-dim);
	}

	@media (max-width: 640px) {
		.spine {
			left: 19px;
		}

		.phase {
			grid-template-columns: 40px 1fr;
		}

		.phase-dot {
			width: 40px;
			height: 40px;
		}

		.phase-card {
			padding: var(--space-md);
		}
	}
</style>
