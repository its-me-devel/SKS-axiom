<script lang="ts">
	import { navLinks } from '$lib/data/nav';
	import Logo from './Logo.svelte';
	import Menu from '@lucide/svelte/icons/menu';
	import X from '@lucide/svelte/icons/x';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);
	let activeHref = $state('#home');

	function closeMobile() {
		mobileOpen = false;
	}

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		const sections = navLinks
			.map((link) => document.querySelector(link.href))
			.filter((el): el is Element => el !== null);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeHref = `#${entry.target.id}`;
					}
				}
			},
			{ rootMargin: '-40% 0px -50% 0px', threshold: 0 }
		);

		for (const section of sections) observer.observe(section);

		return () => {
			window.removeEventListener('scroll', onScroll);
			observer.disconnect();
		};
	});
</script>

<header class="nav" class:scrolled>
	<div class="container bar">
		<a href="#home" class="brand" onclick={closeMobile}>
			<Logo size={32} />
		</a>

		<nav class="links" aria-label="Primary">
			<ul>
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href} class:active={activeHref === link.href}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="actions">
			<a href="#contact" class="btn btn-primary cta">Start a Project</a>
			<button
				class="menu-toggle"
				aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileOpen}
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>
	</div>

	{#if mobileOpen}
		<div class="mobile-panel" role="dialog" aria-label="Menu">
			<ul>
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href} onclick={closeMobile} class:active={activeHref === link.href}
							>{link.label}</a
						>
					</li>
				{/each}
			</ul>
			<a href="#contact" class="btn btn-primary" onclick={closeMobile}>Start a Project</a>
		</div>
	{/if}
</header>

<style>
	.nav {
		position: fixed;
		inset-inline: 0;
		top: 0;
		z-index: var(--z-nav);
		background: transparent;
		border-bottom: 1px solid transparent;
		transition:
			background var(--dur-base) var(--ease-out),
			border-color var(--dur-base) var(--ease-out),
			box-shadow var(--dur-base) var(--ease-out);
	}

	.nav.scrolled {
		background: rgba(7, 5, 15, 0.72);
		backdrop-filter: blur(18px) saturate(140%);
		-webkit-backdrop-filter: blur(18px) saturate(140%);
		border-bottom-color: var(--surface-border);
		box-shadow: 0 12px 40px -20px rgba(0, 0, 0, 0.6);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		height: 76px;
	}

	.brand {
		text-decoration: none;
		display: inline-flex;
	}

	.links ul {
		display: flex;
		align-items: center;
		gap: var(--space-lg);
	}

	.links a {
		text-decoration: none;
		font-size: var(--fs-sm);
		font-weight: 500;
		color: var(--text-muted);
		position: relative;
		padding-block: 0.35rem;
		transition: color var(--dur-fast) var(--ease-out);
	}

	.links a::after {
		content: '';
		position: absolute;
		left: 0;
		right: 100%;
		bottom: -2px;
		height: 2px;
		border-radius: var(--radius-pill);
		background: var(--grad-primary-vivid);
		transition: right var(--dur-base) var(--ease-out);
	}

	.links a:hover {
		color: var(--text);
	}

	.links a.active {
		color: var(--text);
	}

	.links a.active::after {
		right: 0;
	}

	@media (max-width: 900px) {
		.links {
			display: none;
		}
	}

	.actions {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}

	.cta {
		padding: 0.65rem 1.3rem;
		font-size: var(--fs-xs);
	}

	@media (max-width: 720px) {
		.cta {
			display: none;
		}
	}

	.menu-toggle {
		display: none;
		align-items: center;
		justify-content: center;
		width: 42px;
		height: 42px;
		border-radius: var(--radius-sm);
		border: 1px solid var(--surface-border);
		background: var(--surface);
		color: var(--text);
	}

	@media (max-width: 900px) {
		.menu-toggle {
			display: inline-flex;
		}
	}

	.mobile-panel {
		background: rgba(7, 5, 15, 0.96);
		backdrop-filter: blur(18px);
		border-bottom: 1px solid var(--surface-border);
		padding: var(--space-md) var(--container-pad) var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
	}

	.mobile-panel ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.mobile-panel a {
		text-decoration: none;
		color: var(--text-muted);
		font-size: var(--fs-lg);
		font-family: var(--font-display);
	}

	.mobile-panel a.active {
		color: var(--text);
	}

	.mobile-panel .btn {
		width: 100%;
	}
</style>
