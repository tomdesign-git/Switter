<script>
	export let name;

	let logo = 'img/logo-horizontal.svg';
	let message = "";
	let messages = [];

	// function updateMessage(event) {
	// 	console.log(event.target.value);
	// 	message = event.target.value;
	// }

	function saveMessage() {
		const newMessage = {
			id: Date.now(),
			text: message,
			author: 'Sam'
		};
		messages = [newMessage, ...messages];
		message = "";
	}
</script>

<main>
	<img src="{logo}"  class="logo" alt="{name}">
	<br>
	<textarea cols="50" rows="6" bind:value={message} placeholder="Ecrivez votre message..."/>
	<br>
	<button on:click={saveMessage}>Swit</button>
	<div>
		<h3>Aperçu</h3>
		<div>
		<textarea class="preview" cols="50" rows="5">{message}</textarea>
		</div>
	</div>
	<div>
		<h3>Messages</h3>
		{#each messages as message}
		<div>Par {message.author}</div>
		<div>{message.text}</div>
		<hr>
		{/each}
	</div>


</main>
