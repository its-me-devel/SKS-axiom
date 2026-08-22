import type { Component } from 'svelte';
import Layers from '@lucide/svelte/icons/layers';
import ShieldCheck from '@lucide/svelte/icons/shield-check';
import Gauge from '@lucide/svelte/icons/gauge';
import Cloud from '@lucide/svelte/icons/cloud';
import LifeBuoy from '@lucide/svelte/icons/life-buoy';
import Target from '@lucide/svelte/icons/target';

export interface WhyUsPoint {
	title: string;
	description: string;
	icon: Component;
}

export const whyUsPoints: WhyUsPoint[] = [
	{
		title: 'One team, planning to production',
		description: 'A single accountable team carries the project from first sketch to live system.',
		icon: Layers
	},
	{
		title: 'Security-first approach',
		description: 'Authentication, authorization and data protection are designed in from day one.',
		icon: ShieldCheck
	},
	{
		title: 'Scalable architecture',
		description: 'Systems built to handle real growth, not just the demo.',
		icon: Gauge
	},
	{
		title: 'Cloud deployment capability',
		description: 'Production infrastructure on AWS, configured and owned end to end.',
		icon: Cloud
	},
	{
		title: 'Ongoing support',
		description: 'We stay on after launch — monitoring, patching and improving.',
		icon: LifeBuoy
	},
	{
		title: 'Business-focused development',
		description: 'Every technical decision is weighed against what it does for your business.',
		icon: Target
	}
];
