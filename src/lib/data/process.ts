import Search from '@lucide/svelte/icons/search';
import Compass from '@lucide/svelte/icons/compass';
import Palette from '@lucide/svelte/icons/palette';
import CodeXml from '@lucide/svelte/icons/code-xml';
import ShieldCheck from '@lucide/svelte/icons/shield-check';
import ListChecks from '@lucide/svelte/icons/list-checks';
import Cloud from '@lucide/svelte/icons/cloud';
import Rocket from '@lucide/svelte/icons/rocket';
import Gauge from '@lucide/svelte/icons/gauge';
import type { Component } from 'svelte';

export interface ProcessPhase {
	index: string;
	name: string;
	summary: string;
	points: string[];
	visual: string;
	icon: Component;
}

export const processPhases: ProcessPhase[] = [
	{
		index: '01',
		name: 'Discovery',
		summary: 'We start by understanding the business, not just the brief.',
		points: ['Requirements', 'Business objectives', 'User needs', 'Project scope', 'Constraints'],
		visual: 'An abstract idea forms from scattered particles converging into a single core.',
		icon: Search
	},
	{
		index: '02',
		name: 'Planning',
		summary: 'The idea becomes a system: technology, data and security decisions made early.',
		points: [
			'Architecture',
			'Technology selection',
			'Database planning',
			'APIs',
			'Security planning'
		],
		visual: 'The core’s particles connect into the first lines of a system architecture.',
		icon: Compass
	},
	{
		index: '03',
		name: 'UI/UX Design',
		summary: 'Interfaces are designed around real user flows before a line of code is written.',
		points: ['Wireframes', 'Layouts', 'Design system', 'Responsive behavior', 'Design approval'],
		visual: 'Floating interface layers assemble into a coherent design system.',
		icon: Palette
	},
	{
		index: '04',
		name: 'Development',
		summary: 'Frontend, backend and data layers are built in parallel toward one application.',
		points: ['Frontend', 'Backend', 'Database', 'APIs', 'Integrations'],
		visual: 'Separate system layers slide together and connect into a single application.',
		icon: CodeXml
	},
	{
		index: '05',
		name: 'Security',
		summary: 'Authentication, authorization and validation are engineered in, not patched on.',
		points: [
			'Authentication',
			'Authorization',
			'RBAC',
			'Validation',
			'Encryption',
			'Secure configuration',
			'OWASP controls'
		],
		visual: 'A translucent shield forms a secure boundary around the application.',
		icon: ShieldCheck
	},
	{
		index: '06',
		name: 'Testing',
		summary: 'Every module is validated before it ever reaches a user.',
		points: [
			'Functional testing',
			'Responsive testing',
			'Browser testing',
			'Performance testing',
			'Security testing'
		],
		visual: 'Application modules move through a sequence of validation checkpoints.',
		icon: ListChecks
	},
	{
		index: '07',
		name: 'Cloud Deployment',
		summary: 'The finished application moves into resilient, monitored cloud infrastructure.',
		points: ['Load balancer', 'EC2 / compute', 'Database / RDS', 'S3 / storage', 'DNS & SSL/TLS'],
		visual: 'The completed application descends into a live cloud infrastructure environment.',
		icon: Cloud
	},
	{
		index: '08',
		name: 'Go Live',
		summary: 'A verified, backed-up, monitored launch — not a guess.',
		points: [
			'Final deployment',
			'Production verification',
			'Backups',
			'Monitoring',
			'Domain configuration'
		],
		visual: 'The system’s state changes visibly from “building” to “online”.',
		icon: Rocket
	},
	{
		index: '09',
		name: 'Maintenance & Growth',
		summary: 'Launch is the beginning — we keep the system healthy and evolving.',
		points: [
			'Monitoring',
			'Security patches',
			'Backups',
			'Performance optimization',
			'New features',
			'Scaling'
		],
		visual: 'The infrastructure expands outward, surrounded by healthy monitoring signals.',
		icon: Gauge
	}
];
