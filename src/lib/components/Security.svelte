<script lang="ts">
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
	import KeyRound from '@lucide/svelte/icons/key-round';
	import Lock from '@lucide/svelte/icons/lock';
	import Scan from '@lucide/svelte/icons/scan';
	import Server from '@lucide/svelte/icons/server';
	import Database from '@lucide/svelte/icons/database';
	import Users from '@lucide/svelte/icons/users';
	import ShieldCheck from '@lucide/svelte/icons/shield-check';

	const flow = [
		{ label: 'User', icon: Users },
		{ label: 'Authentication', icon: KeyRound },
		{ label: 'Authorization / RBAC', icon: Lock },
		{ label: 'API Validation', icon: Scan },
		{ label: 'Application', icon: Server },
		{ label: 'Protected Data', icon: Database }
	];

	const topics = [
		'Secure development lifecycle',
		'Least privilege',
		'Secure APIs',
		'Encryption',
		'OWASP-aligned controls',
		'Server hardening',
		'Monitoring'
	];
</script>

<section id="security" class="security">
	<GradientBlobField variant="quiet" />

	<div class="container layout">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">Security-first development</span>
			<h2>Every request is authenticated, authorized and validated</h2>
			<p class="lede">
				Security is designed into the architecture from day one — least-privilege access, encrypted
				data and OWASP-aligned controls throughout the request path.
			</p>

			<ul class="topics">
				{#each topics as topic (topic)}
					<li><ShieldCheck size={14} strokeWidth={2} />{topic}</li>
				{/each}
			</ul>
		</div>

		<div class="flow-panel" use:reveal={{ y: 24, delay: 120 }}>
			<ol class="flow">
				{#each flow as step, i (step.label)}
					{@const Icon = step.icon}
					<li>
						<span class="step-icon"><Icon size={18} strokeWidth={1.75} /></span>
						<span class="step-label">{step.label}</span>
						{#if i < flow.length - 1}
							<span class="step-arrow" aria-hidden="true"></span>
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.security {
		position: relative;
		padding-block: var(--section-pad-block);
		overflow: hidden;
	}

	.layout {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
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

	.topics {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		margin-top: var(--space-sm);
	}

	.topics li {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		font-size: var(--fs-sm);
		color: var(--text-muted);
	}

	.topics li :global(svg) {
		color: var(--teal);
		flex-shrink: 0;
	}

	.flow-panel {
		padding: var(--space-lg);
		border-radius: var(--radius-lg);
		background: var(--surface);
		border: 1px solid var(--surface-border);
		backdrop-filter: blur(14px);
		box-shadow: var(--shadow-card);
	}

	.flow {
		display: flex;
		flex-direction: column;
	}

	.flow li {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--space-sm);
		padding-block: 0.7rem;
	}

	.step-icon {
		width: 40px;
		height: 40px;
		flex-shrink: 0;
		border-radius: var(--radius-sm);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: var(--bg-elevated);
		border: 1px solid var(--surface-border-strong);
		color: var(--teal);
	}

	.step-label {
		font-family: var(--font-display);
		font-size: var(--fs-sm);
		font-weight: 600;
		color: var(--text);
	}

	.step-arrow {
		position: absolute;
		left: 19px;
		top: 100%;
		width: 2px;
		height: 0.7rem;
		background: var(--surface-border-strong);
	}

	@media (max-width: 900px) {
		.layout {
			grid-template-columns: 1fr;
		}
	}
</style>
