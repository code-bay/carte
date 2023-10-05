import { writable } from 'svelte/store';

interface Notification {
	text: string,
	time: number,
	close?: boolean,
	action?: string
}

export const notifications = writable<Array<Notification>>([]);

export function createNotification(params: Notification) {
	notifications.update(queue => {
		queue.push(params)
		return queue
	})
}

export function dismissNotification() {
	notifications.update(queue => {
		queue.shift();
		return queue
	})
}
