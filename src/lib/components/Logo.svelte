<script lang="ts">
	import iconSquare from '$lib/assets/logo/icon-square.svg';

	interface Props {
		size?: number;
	}

	let { size = 34 }: Props = $props();
</script>

<span class="logo">
	<img
		src={iconSquare}
		alt="SKS Axiom"
		width={size}
		height={size}
		style:width="{size}px"
		style:height="{size}px"
	/>
	<span class="wordmark">
		<span class="prefix">SKS</span>
		<span class="name">Axiom</span>
	</span>
</span>

<style>
	.logo {
		display: inline-flex;
		align-items: center;
		gap: 0.65rem;
		font-family: var(--font-display);
		line-height: 1;
		user-select: none;
	}

	img {
		border-radius: 22%;
		flex-shrink: 0;
	}

	.wordmark {
		display: inline-flex;
		align-items: baseline;
		gap: 0.4rem;
	}

	.prefix {
		font-size: 0.7em;
		font-weight: 600;
		letter-spacing: 0.22em;
		color: var(--text-muted);
	}

	.name {
		font-size: 1.15em;
		font-weight: 700;
		letter-spacing: -0.01em;
		color: var(--text);
	}
</style>
