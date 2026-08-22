import CodeXml from '@lucide/svelte/icons/code-xml';
import Globe from '@lucide/svelte/icons/globe';
import Workflow from '@lucide/svelte/icons/workflow';
import Cloud from '@lucide/svelte/icons/cloud';
import ServerCog from '@lucide/svelte/icons/server-cog';
import ShieldCheck from '@lucide/svelte/icons/shield-check';
import Server from '@lucide/svelte/icons/server';
import Plug from '@lucide/svelte/icons/plug';
import GitBranch from '@lucide/svelte/icons/git-branch';
import RefreshCw from '@lucide/svelte/icons/refresh-cw';
import Store from '@lucide/svelte/icons/store';
import LifeBuoy from '@lucide/svelte/icons/life-buoy';
import type { Component } from 'svelte';

export interface Service {
	title: string;
	summary: string;
	icon: Component;
	items: string[];
}

export const services: Service[] = [
	{
		title: 'Full-Stack Web Application Development',
		summary: 'Custom applications engineered end to end, from data model to interface.',
		icon: CodeXml,
		items: [
			'Custom web applications',
			'Frontend development',
			'Backend development',
			'Database architecture',
			'API integration',
			'Scalable application architecture'
		]
	},
	{
		title: 'Custom Website Development',
		summary: 'Marketing and corporate sites built for speed, clarity and conversion.',
		icon: Globe,
		items: [
			'Business websites',
			'Corporate websites',
			'Portfolio websites',
			'Landing pages',
			'Marketing websites',
			'Responsive design',
			'CMS integration'
		]
	},
	{
		title: 'Workflow Automation',
		summary: 'Internal tooling that removes repetitive work from your team’s day.',
		icon: Workflow,
		items: [
			'Business process automation',
			'Internal applications',
			'Employee portals',
			'Customer portals',
			'Approval workflows',
			'Repetitive-task automation'
		]
	},
	{
		title: 'Cloud & AWS',
		summary: 'Infrastructure designed for reliability, security and predictable cost.',
		icon: Cloud,
		items: [
			'AWS infrastructure',
			'EC2',
			'RDS',
			'S3',
			'Load balancers',
			'DNS',
			'SSL/TLS',
			'Cloud architecture',
			'Deployment',
			'Cost optimization'
		]
	},
	{
		title: 'Hosting & Maintenance',
		summary: 'Managed operations that keep production healthy after launch.',
		icon: ServerCog,
		items: [
			'Managed hosting',
			'Application deployment',
			'Monitoring',
			'Updates',
			'Backups',
			'Bug fixes',
			'Patching',
			'Uptime monitoring',
			'Technical support'
		]
	},
	{
		title: 'Secure Web Development',
		summary: 'Security built into the architecture, not bolted on afterward.',
		icon: ShieldCheck,
		items: [
			'Secure architecture',
			'Authentication',
			'Authorization',
			'RBAC',
			'Encryption',
			'Secure API design',
			'Input validation',
			'OWASP-aligned controls',
			'Security review'
		]
	},
	{
		title: 'Server & Infrastructure',
		summary: 'Hardened Linux environments tuned for performance and uptime.',
		icon: Server,
		items: [
			'Linux server setup',
			'Nginx / Apache',
			'Reverse proxy',
			'Firewall configuration',
			'TLS',
			'Server hardening',
			'Logging',
			'Performance tuning'
		]
	},
	{
		title: 'API Development & Integration',
		summary: 'Well-documented APIs that connect your systems and your partners.',
		icon: Plug,
		items: [
			'REST APIs',
			'Third-party integrations',
			'Payment integrations',
			'Email integrations',
			'SMS integrations',
			'CRM / ERP integrations',
			'Authentication services'
		]
	},
	{
		title: 'DevOps & Deployment',
		summary: 'Automated pipelines that ship changes safely and often.',
		icon: GitBranch,
		items: [
			'CI/CD',
			'Automated deployments',
			'Docker',
			'Environment management',
			'Monitoring',
			'Logging',
			'Production deployment'
		]
	},
	{
		title: 'Application Modernization',
		summary: 'Legacy systems upgraded into fast, maintainable, cloud-ready software.',
		icon: RefreshCw,
		items: [
			'Legacy upgrades',
			'Redesign',
			'Migration',
			'Performance optimization',
			'Cloud migration',
			'Feature enhancement'
		]
	},
	{
		title: 'Small Business Solutions',
		summary: 'Affordable, professional software for growing local businesses.',
		icon: Store,
		items: [
			'Affordable business websites',
			'Booking systems',
			'Service websites',
			'Local-business websites',
			'Lead forms',
			'Maps integration',
			'Social integration',
			'SEO-friendly development'
		]
	},
	{
		title: 'Ongoing Support',
		summary: 'A long-term technical partner, not a one-time vendor.',
		icon: LifeBuoy,
		items: [
			'Maintenance',
			'Feature development',
			'Scaling',
			'Optimization',
			'Security review',
			'Long-term support'
		]
	}
];
