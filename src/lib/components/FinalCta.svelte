<script lang="ts">
	import GradientBlobField from './GradientBlobField.svelte';
	import { reveal } from '$lib/motion/reveal';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Send from '@lucide/svelte/icons/send';

	const contactEmail = 'hello@sksaxiom.com';
</script>

<section id="contact" class="cta">
	<GradientBlobField variant="hero" />

	<div class="container inner" use:reveal={{ y: 24 }}>
		<span class="eyebrow">Let's build</span>
		<h2>Have an idea? Let's turn it into production software.</h2>
		<p class="lede">
			Tell us where you're headed. We'll map the fastest, most secure path to get you there.
		</p>

		<div class="actions">
			<a href="mailto:{contactEmail}?subject=Start%20a%20project" class="btn btn-primary">
				Start a Project
				<ArrowRight size={18} />
			</a>
			<a href="mailto:{contactEmail}" class="btn btn-ghost">
				Contact Us
				<Send size={16} />
			</a>
		</div>
	</div>
</section>

<style>
	.cta {
		position: relative;
		overflow: hidden;
		padding-block: var(--space-3xl);
	}

	.inner {
		position: relative;
		z-index: 1;
		max-width: 720px;
		margin-inline: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
	}

	.inner h2 {
		font-size: var(--fs-3xl);
	}

	.lede {
		font-size: var(--fs-lg);
		max-width: 540px;
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-sm);
		margin-top: var(--space-sm);
	}

	@media (max-width: 640px) {
		.cta {
			padding-block: var(--space-2xl);
		}
	}
</style>
