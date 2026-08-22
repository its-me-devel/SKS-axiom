import type { Component } from 'svelte';
import Users from '@lucide/svelte/icons/users';
import LayoutTemplate from '@lucide/svelte/icons/layout-template';
import Plug from '@lucide/svelte/icons/plug';
import Server from '@lucide/svelte/icons/server';
import Database from '@lucide/svelte/icons/database';
import KeyRound from '@lucide/svelte/icons/key-round';
import Mail from '@lucide/svelte/icons/mail';
import MessageSquare from '@lucide/svelte/icons/message-square';
import CreditCard from '@lucide/svelte/icons/credit-card';
import HardDrive from '@lucide/svelte/icons/hard-drive';
import Activity from '@lucide/svelte/icons/activity';

export interface ArchNode {
	label: string;
	icon: Component;
}

export const primaryFlow: ArchNode[] = [
	{ label: 'User', icon: Users },
	{ label: 'Frontend', icon: LayoutTemplate },
	{ label: 'API', icon: Plug },
	{ label: 'Backend', icon: Server },
	{ label: 'Database', icon: Database }
];

export const branchServices: ArchNode[] = [
	{ label: 'Auth', icon: KeyRound },
	{ label: 'Email', icon: Mail },
	{ label: 'SMS', icon: MessageSquare },
	{ label: 'Payments', icon: CreditCard },
	{ label: 'Storage', icon: HardDrive },
	{ label: 'Analytics', icon: Activity }
];
