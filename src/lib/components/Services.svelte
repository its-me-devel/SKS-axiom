<script lang="ts">
	import { services } from '$lib/data/services';
	import GradientBlobField from './GradientBlobField.svelte';
	import ServiceCard from './ServiceCard.svelte';
	import { reveal } from '$lib/motion/reveal';
</script>

<section id="services" class="services">
	<GradientBlobField variant="warm" />

	<div class="container">
		<div class="heading" use:reveal={{ y: 20 }}>
			<span class="eyebrow">What we do</span>
			<h2>Everything a modern product needs, under one roof</h2>
			<p class="lede">
				From first line of code to production infrastructure — full-stack delivery, security and
				cloud operations handled by one team.
			</p>
		</div>

		<div class="grid" use:reveal={{ selector: '.card-wrap', stagger: 60, y: 24 }}>
			{#each services as service (service.title)}
				<div class="card-wrap">
					<ServiceCard {service} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.services {
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

	.lede {
		font-size: var(--fs-base);
	}

	.grid {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-md);
	}

	@media (max-width: 1080px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
