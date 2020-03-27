import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Switter',
		logo: 'img/logo-horizontal.svg'
	}
});

export default app;