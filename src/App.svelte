<script>
	import Message from "./Message.svelte";
	export let name;
	export let logo;
	let messages = [];
	
	function addMessage(event) {
		console.log(event.detail);
		messages = [event.detail, ...messages];
	}
</script>

<main>

	<img src="{logo}"  class="logo" alt="{name}">
	<br>

	<Message on:message={addMessage} />

	<div class="swits">
		<h3>Messages</h3>
		{#each messages as message}
		<div class="swit">
		<div class="author">@{message.author}</div>
		<div>{message.text}</div>
		</div>
		{/each}
	</div>


</main>
