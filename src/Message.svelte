<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let message = "";
	let author ="";
	let maxLength = 30;
	$: nbCaracters = message.length;
	$: disabled = message.length > maxLength ? true : false;
    
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
<span class="counter" class:counter-alert={nbCaracters > maxLength}>{nbCaracters}</span>
<button on:click={saveMessage} disabled={disabled}>Passe ton message</button>
<div class="separator"></div>
