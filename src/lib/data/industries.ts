import type { Component } from 'svelte';
import Rocket from '@lucide/svelte/icons/rocket';
import Store from '@lucide/svelte/icons/store';
import Briefcase from '@lucide/svelte/icons/briefcase';
import GraduationCap from '@lucide/svelte/icons/graduation-cap';
import Truck from '@lucide/svelte/icons/truck';
import Factory from '@lucide/svelte/icons/factory';
import Building2 from '@lucide/svelte/icons/building-2';
import ShoppingCart from '@lucide/svelte/icons/shopping-cart';
import HeartHandshake from '@lucide/svelte/icons/heart-handshake';
import Boxes from '@lucide/svelte/icons/boxes';

export interface Industry {
	name: string;
	icon: Component;
}

export const industries: Industry[] = [
	{ name: 'Startups', icon: Rocket },
	{ name: 'Small Businesses', icon: Store },
	{ name: 'Professional Services', icon: Briefcase },
	{ name: 'Education', icon: GraduationCap },
	{ name: 'Logistics', icon: Truck },
	{ name: 'Manufacturing', icon: Factory },
	{ name: 'Real Estate', icon: Building2 },
	{ name: 'E-commerce', icon: ShoppingCart },
	{ name: 'Nonprofits', icon: HeartHandshake },
	{ name: 'Enterprises', icon: Boxes }
];
