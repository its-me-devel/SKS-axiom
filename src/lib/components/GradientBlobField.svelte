<script lang="ts">
	interface Props {
		variant?: 'hero' | 'warm' | 'cool' | 'quiet';
	}

	let { variant = 'quiet' }: Props = $props();
</script>

<div class="field field-{variant}" aria-hidden="true">
	<span class="blob blob-a"></span>
	<span class="blob blob-b"></span>
	<span class="blob blob-c"></span>
	<span class="grain"></span>
</div>

<style>
	.field {
		position: absolute;
		inset: 0;
		overflow: hidden;
		z-index: var(--z-bg);
		pointer-events: none;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(70px);
		opacity: 0.55;
		will-change: transform;
	}

	.grain {
		position: absolute;
		inset: 0;
		opacity: 0.035;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		mix-blend-mode: overlay;
	}

	/* hero: rich, saturated, large */
	.field-hero .blob-a {
		width: 52vw;
		height: 52vw;
		top: -14%;
		left: -8%;
		background: radial-gradient(circle, var(--violet), transparent 70%);
	}
	.field-hero .blob-b {
		width: 46vw;
		height: 46vw;
		top: 4%;
		right: -12%;
		background: radial-gradient(circle, var(--cyan), transparent 70%);
		opacity: 0.4;
	}
	.field-hero .blob-c {
		width: 40vw;
		height: 40vw;
		bottom: -20%;
		left: 22%;
		background: radial-gradient(circle, var(--magenta), transparent 72%);
		opacity: 0.4;
	}

	/* warm: magenta / violet leaning, for services + cta */
	.field-warm .blob-a {
		width: 42vw;
		height: 42vw;
		top: -10%;
		right: -10%;
		background: radial-gradient(circle, var(--magenta), transparent 70%);
		opacity: 0.28;
	}
	.field-warm .blob-b {
		width: 36vw;
		height: 36vw;
		bottom: -14%;
		left: -8%;
		background: radial-gradient(circle, var(--violet), transparent 70%);
		opacity: 0.26;
	}
	.field-warm .blob-c {
		width: 24vw;
		height: 24vw;
		top: 40%;
		left: 40%;
		background: radial-gradient(circle, var(--purple), transparent 72%);
		opacity: 0.16;
	}

	/* cool: cyan / blue leaning, for process + cloud + architecture */
	.field-cool .blob-a {
		width: 44vw;
		height: 44vw;
		top: -12%;
		left: -10%;
		background: radial-gradient(circle, var(--cyan), transparent 70%);
		opacity: 0.24;
	}
	.field-cool .blob-b {
		width: 38vw;
		height: 38vw;
		bottom: -16%;
		right: -8%;
		background: radial-gradient(circle, var(--blue), transparent 70%);
		opacity: 0.24;
	}
	.field-cool .blob-c {
		width: 20vw;
		height: 20vw;
		top: 50%;
		right: 30%;
		background: radial-gradient(circle, var(--teal), transparent 72%);
		opacity: 0.18;
	}

	/* quiet: minimal, for text-heavy or dense sections */
	.field-quiet .blob-a {
		width: 34vw;
		height: 34vw;
		top: -10%;
		left: 10%;
		background: radial-gradient(circle, var(--violet), transparent 72%);
		opacity: 0.14;
	}
	.field-quiet .blob-b {
		width: 30vw;
		height: 30vw;
		bottom: -12%;
		right: 5%;
		background: radial-gradient(circle, var(--cyan), transparent 72%);
		opacity: 0.12;
	}
	.field-quiet .blob-c {
		display: none;
	}

	@media (max-width: 640px) {
		.blob {
			filter: blur(46px);
		}
	}
</style>
