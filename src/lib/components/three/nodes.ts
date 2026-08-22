export interface SceneNode {
	label: string;
	position: [number, number, number];
	color: string;
}

export const sceneOrigin: [number, number, number] = [2.3, 0.35, -0.7];

export const sceneNodes: SceneNode[] = [
	{ label: 'WEB', position: [4.1, 1.7, -1.0], color: '#22d3ee' },
	{ label: 'API', position: [2.9, 2.3, -2.6], color: '#8b5cf6' },
	{ label: 'DATABASE', position: [4.9, 0.1, -1.8], color: '#ff3ec4' },
	{ label: 'SECURITY', position: [5.3, -0.5, -2.6], color: '#22d3ee' },
	{ label: 'AWS', position: [4.6, -1.6, -3.4], color: '#4f6bff' },
	{ label: 'SERVER', position: [1.4, 2.0, -2.2], color: '#8b5cf6' },
	{ label: 'MONITORING', position: [5.2, 1.0, -3.6], color: '#ff3ec4' }
];
