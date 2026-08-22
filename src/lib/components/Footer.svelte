<script lang="ts">
	import Logo from './Logo.svelte';
	import { navLinks } from '$lib/data/nav';

	const year = new Date().getFullYear();
	const contactEmail = 'hello@sksaxiom.com';
</script>

<footer class="footer">
	<div class="container inner">
		<div class="brand-col">
			<Logo size={30} />
			<p class="tagline">We Build. Secure. Deploy. Scale.</p>
		</div>

		<nav aria-label="Footer">
			<ul>
				{#each navLinks as link (link.href)}
					<li><a href={link.href}>{link.label}</a></li>
				{/each}
			</ul>
		</nav>

		<div class="contact-col">
			<a href="mailto:{contactEmail}">{contactEmail}</a>
		</div>
	</div>

	<div class="container bottom">
		<p>© {year} SKS Axiom. All rights reserved.</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--surface-border);
		padding-top: var(--space-2xl);
		background: var(--bg-deep);
	}

	.inner {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: var(--space-xl);
		padding-bottom: var(--space-xl);
	}

	.brand-col {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
		max-width: 320px;
	}

	.tagline {
		font-family: var(--font-display);
		font-size: var(--fs-sm);
		color: var(--text-dim);
	}

	nav ul {
		display: flex;
		flex-direction: column;
		gap: var(--space-2xs);
	}

	nav a,
	.contact-col a {
		text-decoration: none;
		color: var(--text-muted);
		font-size: var(--fs-sm);
		transition: color var(--dur-fast) var(--ease-out);
	}

	nav a:hover,
	.contact-col a:hover {
		color: var(--text);
	}

	.contact-col {
		display: flex;
		align-items: flex-start;
	}

	.bottom {
		padding-block: var(--space-md);
		border-top: 1px solid var(--surface-border);
	}

	.bottom p {
		font-size: var(--fs-2xs);
		color: var(--text-dim);
	}

	@media (max-width: 640px) {
		.inner {
			flex-direction: column;
		}
	}
</style>
