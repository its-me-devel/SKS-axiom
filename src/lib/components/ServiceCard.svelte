<script lang="ts">
	import type { Service } from '$lib/data/services';

	interface Props {
		service: Service;
	}

	let { service }: Props = $props();
	const Icon = $derived(service.icon);
	let expanded = $state(false);
	const visibleItems = $derived(expanded ? service.items : service.items.slice(0, 4));
	const remaining = $derived(service.items.length - service.items.slice(0, 4).length);
</script>

<article class="card">
	<div class="icon-badge">
		<Icon size={22} strokeWidth={1.75} />
	</div>
	<h3>{service.title}</h3>
	<p class="summary">{service.summary}</p>
	<ul class="chips">
		{#each visibleItems as item (item)}
			<li>{item}</li>
		{/each}
		{#if remaining > 0}
			<li>
				<button
					type="button"
					class="more"
					aria-expanded={expanded}
					onclick={() => (expanded = !expanded)}
				>
					{expanded ? 'Show less' : `+${remaining} more`}
				</button>
			</li>
		{/if}
	</ul>
</article>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		height: 100%;
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
		box-shadow: var(--shadow-card);
		transition:
			transform var(--dur-base) var(--ease-out),
			border-color var(--dur-base) var(--ease-out),
			background var(--dur-base) var(--ease-out);
	}

	.card:hover {
		transform: translateY(-6px);
		border-color: var(--surface-border-strong);
		background: var(--surface-strong);
	}

	.icon-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		border-radius: var(--radius-md);
		background: var(--grad-surface);
		border: 1px solid var(--surface-border);
		color: var(--cyan);
	}

	h3 {
		font-size: var(--fs-lg);
		font-weight: 600;
	}

	.summary {
		font-size: var(--fs-sm);
		color: var(--text-muted);
	}

	.chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: auto;
		padding-top: var(--space-xs);
	}

	.chips li {
		font-size: var(--fs-2xs);
		color: var(--text-dim);
		background: rgba(247, 245, 255, 0.05);
		border: 1px solid var(--surface-border);
		padding: 0.3rem 0.65rem;
		border-radius: var(--radius-pill);
	}

	.chips li:has(.more) {
		padding: 0;
		background: none;
		border: none;
	}

	button.more {
		font: inherit;
		font-size: var(--fs-2xs);
		color: var(--cyan);
		background: rgba(247, 245, 255, 0.05);
		border: 1px solid rgba(34, 211, 238, 0.3);
		padding: 0.3rem 0.65rem;
		border-radius: var(--radius-pill);
		cursor: pointer;
		transition: border-color var(--dur-base) var(--ease-out);
	}

	button.more:hover,
	button.more:focus-visible {
		border-color: rgba(34, 211, 238, 0.6);
	}
</style>
