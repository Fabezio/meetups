import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        // name: 'world',
        mainTitle: 'MeetUps'
    }
});

export default app;