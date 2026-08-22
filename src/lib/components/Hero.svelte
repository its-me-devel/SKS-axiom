<script lang="ts">
	import GradientBlobField from './GradientBlobField.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ChevronDown from '@lucide/svelte/icons/chevron-down';
	import { onMount } from 'svelte';
	import { prefersReducedMotion } from '$lib/motion/reducedMotion.svelte';
	import { animate, stagger } from 'animejs';
	import type { Component } from 'svelte';

	let heroEl: HTMLElement;
	let headlineEl: HTMLElement;
	let sceneReady = $state(false);
	let HeroScene = $state<Component | null>(null);

	const words = ['We', 'Build.', 'Secure.', 'Deploy.', 'Scale.'];

	onMount(() => {
		if (!prefersReducedMotion() && window.innerWidth >= 900) {
			import('./three/HeroScene.svelte').then((mod) => {
				HeroScene = mod.default;
				sceneReady = true;
			});
		}

		if (prefersReducedMotion()) return;

		animate('.hero-word', {
			opacity: [0, 1],
			translateY: [26, 0],
			delay: stagger(90, { start: 120 }),
			duration: 900,
			ease: 'outExpo'
		});

		animate('.hero-copy, .hero-actions, .hero-scroll-cue', {
			opacity: [0, 1],
			translateY: [16, 0],
			delay: stagger(120, { start: 620 }),
			duration: 700,
			ease: 'outExpo'
		});
	});
</script>

<section id="home" class="hero" bind:this={heroEl}>
	<GradientBlobField variant="hero" />

	<div class="scene-layer" class:visible={sceneReady} aria-hidden="true">
		{#if HeroScene}
			{@const Scene = HeroScene}
			<Scene />
		{/if}
	</div>

	<div class="container hero-inner">
		<p class="eyebrow">Idea → Discovery → Design → Development → Security → Testing → Deployment</p>

		<h1 class="headline" bind:this={headlineEl}>
			{#each words as word, i (i)}
				<span class="hero-word" class:accent={i > 0}>{word}</span>
			{/each}
		</h1>

		<p class="hero-copy">
			We design, develop, secure, deploy and maintain modern web applications and cloud
			infrastructure — one accountable team from first idea to production system.
		</p>

		<div class="hero-actions">
			<a href="#contact" class="btn btn-primary">
				Start a Project
				<ArrowRight size={18} />
			</a>
			<a href="#services" class="btn btn-ghost">Explore Our Services</a>
		</div>
	</div>

	<a href="#services" class="hero-scroll-cue" aria-label="Scroll to services">
		<ChevronDown size={20} />
	</a>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100dvh;
		display: flex;
		align-items: center;
		overflow: hidden;
		padding-top: 76px;
		background: var(--bg);
	}

	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--grad-bg-wash);
		z-index: 0;
		pointer-events: none;
	}

	.scene-layer {
		position: absolute;
		inset: 0;
		z-index: 1;
		opacity: 0;
		transition: opacity 1200ms var(--ease-out);
		pointer-events: none;
		mask-image: linear-gradient(100deg, transparent 0%, transparent 36%, black 66%);
		-webkit-mask-image: linear-gradient(100deg, transparent 0%, transparent 36%, black 66%);
	}

	@media (max-width: 900px) {
		.scene-layer {
			opacity: 0 !important;
			display: none;
		}
	}

	.scene-layer.visible {
		opacity: 1;
	}

	.hero-inner {
		position: relative;
		z-index: 2;
		max-width: 880px;
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.headline {
		display: flex;
		flex-wrap: wrap;
		column-gap: 0.32em;
		row-gap: 0.05em;
		font-size: var(--fs-5xl);
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.hero-word {
		display: inline-block;
		opacity: 1;
		color: var(--text);
	}

	.hero-word.accent {
		background: var(--grad-primary-vivid);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.hero-copy {
		max-width: 560px;
		font-size: var(--fs-lg);
		color: var(--text-muted);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin-top: var(--space-xs);
	}

	.hero-scroll-cue {
		position: absolute;
		bottom: var(--space-lg);
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
		color: var(--text-dim);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--surface-border);
		background: var(--surface);
		backdrop-filter: blur(8px);
		animation: bob 2.4s ease-in-out infinite;
	}

	@keyframes bob {
		0%,
		100% {
			transform: translateX(-50%) translateY(0);
		}
		50% {
			transform: translateX(-50%) translateY(6px);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-scroll-cue {
			animation: none;
		}
	}

	@media (max-width: 640px) {
		.hero {
			padding-top: 96px;
		}
	}
</style>
