<script>
	import Message from "./Message.svelte";
	export let name;
	export let logo;
	let messages = [];
	let isVisible = true;
	
	function addMessage(event) {
		console.log(event.detail);
		messages = [event.detail, ...messages];
	}

	const options = {
		// weekday: "long",
		year: "numeric",
		month: "2-digit",
		day: "numeric",
		// hour12: true,
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	};
	const formatter = new Intl.DateTimeFormat("fr-FR", options);

	function toggle() {
		isVisible = !isVisible;
	}
	

</script>

<main>

	<img src="{logo}"  class="logo" alt="{name}">
	<br>
	<Message on:message={addMessage} />
	<br>
	<button class="hide" on:click={toggle}>{isVisible ? 'Masquer les messages' : 'Afficher les messages'}</button>
	{#if isVisible}
	<div class="swits">
		<h3>Messages</h3>
		{#each messages as message}
		<div class="swit">
		<div class="author">{message.author}</div>
		<div class="date">{formatter.format(message.date)}</div>
		<div class="message">{message.text}</div>
		</div>
		{/each}
	</div>
	{/if}

</main>
