<script lang="ts">
	import { primaryFlow, branchServices } from '$lib/data/architecture';
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
</script>

<section class="architecture">
	<GradientBlobField variant="cool" />

	<div class="container">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">System design</span>
			<h2>An architecture that scales with you</h2>
			<p class="lede">
				Every request follows a clear, observable path — with supporting services attached where
				they belong.
			</p>
		</div>

		<div class="diagram" use:reveal={{ y: 24 }}>
			<div
				class="primary-flow"
				role="img"
				aria-label="User connects to frontend, which calls the API, which talks to the backend, which reads and writes the database."
			>
				{#each primaryFlow as node, i (node.label)}
					{@const Icon = node.icon}
					<div class="node">
						<span class="node-icon"><Icon size={20} strokeWidth={1.75} /></span>
						<span class="node-label">{node.label}</span>
					</div>
					{#if i < primaryFlow.length - 1}
						<div class="connector" aria-hidden="true">
							<span class="pulse"></span>
						</div>
					{/if}
				{/each}
			</div>

			<div class="branch-wrap" aria-hidden="true">
				<div class="branch-stem"></div>
			</div>

			<div
				class="branch-services"
				role="img"
				aria-label="Backend connects to authentication, email, SMS, payments, storage and analytics services."
			>
				{#each branchServices as service (service.label)}
					{@const Icon = service.icon}
					<div class="branch-node">
						<span class="branch-icon"><Icon size={16} strokeWidth={1.75} /></span>
						<span>{service.label}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.architecture {
		position: relative;
		padding-block: var(--section-pad-block);
		overflow: hidden;
	}

	.heading {
		max-width: 640px;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		margin-bottom: var(--space-xl);
	}

	.heading h2 {
		font-size: var(--fs-3xl);
	}

	.diagram {
		position: relative;
		z-index: 1;
		padding: var(--space-xl) var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
	}

	.primary-flow {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-2xs);
		flex-wrap: wrap;
	}

	.node {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		min-width: 96px;
	}

	.node-icon {
		width: 56px;
		height: 56px;
		border-radius: var(--radius-md);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-elevated);
		border: 1px solid var(--surface-border-strong);
		color: var(--cyan);
	}

	.node-label {
		font-family: var(--font-display);
		font-size: var(--fs-2xs);
		font-weight: 600;
		letter-spacing: 0.08em;
		color: var(--text-muted);
		text-transform: uppercase;
	}

	.connector {
		position: relative;
		flex: 1 1 40px;
		min-width: 28px;
		height: 2px;
		background: linear-gradient(90deg, var(--surface-border), var(--surface-border-strong));
		border-radius: var(--radius-pill);
		overflow: hidden;
		margin-bottom: 1.75rem;
	}

	.pulse {
		position: absolute;
		top: 50%;
		left: -12px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		transform: translateY(-50%);
		background: radial-gradient(circle, #fff, var(--cyan) 60%, transparent 75%);
		box-shadow: 0 0 12px var(--cyan);
		animation: travel 2.6s var(--ease-in-out) infinite;
	}

	@keyframes travel {
		0% {
			left: -12px;
			opacity: 0;
		}
		12% {
			opacity: 1;
		}
		88% {
			opacity: 1;
		}
		100% {
			left: 100%;
			opacity: 0;
		}
	}

	.branch-wrap {
		display: flex;
		justify-content: center;
	}

	.branch-stem {
		width: 2px;
		height: var(--space-lg);
		background: var(--surface-border-strong);
	}

	.branch-services {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
	}

	.branch-node {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.55rem 1rem;
		border-radius: var(--radius-pill);
		background: var(--bg-elevated);
		border: 1px solid var(--surface-border);
		font-size: var(--fs-xs);
		color: var(--text-muted);
	}

	.branch-icon {
		display: inline-flex;
		color: var(--magenta);
	}

	@media (max-width: 720px) {
		.primary-flow {
			flex-direction: column;
		}

		.connector {
			width: 2px;
			height: 28px;
			flex: none;
			margin-bottom: 0;
		}

		.pulse {
			left: 50%;
			top: -12px;
			transform: translateX(-50%);
			animation-name: travel-vertical;
		}

		@keyframes travel-vertical {
			0% {
				top: -12px;
				opacity: 0;
			}
			12% {
				opacity: 1;
			}
			88% {
				opacity: 1;
			}
			100% {
				top: 100%;
				opacity: 0;
			}
		}
	}
</style>
