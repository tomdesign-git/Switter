<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let message = "";
    let author ="";

    
	function saveMessage() {
		const newMessage = {
			id: Date.now(),
			text: message,
			author: author,
			date: new Date()
		};
        console.log('newMessage', newMessage);
        dispatch('message', newMessage);
		message = "";
		author= "";
	}
</script>

<input type="text" bind:value={author} placeholder="Ton pseudo" required>
<br>
<textarea cols="50" rows="6" bind:value={message} placeholder="Ton message..."/>
<br>
<button on:click={saveMessage}>Passe ton message</button>
<div class="separator"></div>
