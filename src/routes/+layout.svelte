<script lang="ts">
	import '$lib/styles/global.css';
	import iconSquare from '$lib/assets/logo/icon-square.png';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>SKS Axiom — We Build. Secure. Deploy. Scale.</title>
	<meta
		name="description"
		content="SKS Axiom designs, develops, secures, deploys and maintains modern web applications and cloud infrastructure — from first idea to production system."
	/>
	<link rel="icon" type="image/png" href={iconSquare} />
	<meta property="og:title" content="SKS Axiom — We Build. Secure. Deploy. Scale." />
	<meta
		property="og:description"
		content="Full-stack web development, security-first engineering and AWS cloud infrastructure, delivered by one accountable team."
	/>
	<meta property="og:type" content="website" />
	<meta name="theme-color" content="#07050f" />
</svelte:head>

<a href="#main" class="skip-link">Skip to content</a>

<Nav />

<main id="main">
	{@render children()}
</main>

<Footer />
