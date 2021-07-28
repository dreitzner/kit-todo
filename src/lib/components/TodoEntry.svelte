<script lang="ts">
	export let id;
	export let title = "Title";
	export let description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
	export let dueDate = "12.12.2012";
	export let dueTime = "00:00";
	export let removeFunction;
	export let updateEntry;

	//for self destruction
	let nodeRef;
	let deleteAnim;
	export let completed = false;

	function Taskdone() {
		completed = true;
	}

	function deleteTask() {
		deleteAnim = true;
		setTimeout(() => {
			removeFunction(id);
		}, 600);
	}
</script>

<div class="card" class:completed class:deleteAnim bind:this={nodeRef}>
	<div class="card-header" on:click={updateEntry(id, title, description, dueDate, dueTime)}>
		<h2>{title}</h2>
	</div>
	<div class="card-body" on:click={updateEntry(id, title, description, dueDate, dueTime)}>
		{description}
	</div>
	<div class="card-footer vcenter-item">
		<p class="date">Due till: {dueDate.split('-').reverse().join('.') + " " + dueTime.slice(0, 5)}</p>
		<div class="options vcenter-item">
			{#if completed}
				<p class="doneInfo">Task Done</p>
			{:else}
				<button on:click={Taskdone} class="btn">
					<img src="/check_light.svg" alt="Check">
				</button>
			{/if}
			<button on:click={deleteTask} class="btn btn-del">				
				<img src="{completed ? '/trashcan_light.svg' : '/trashcan.svg'}" alt="Trashcan">
			</button>
		</div>
	</div>
</div>

<style>
	.card {
		color: black;
		margin: 10px 0px;
		border: none;
	}

	.card.completed::before {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		position: absolute;
		width: 100%;
		height: 100%;
		transition: all 0.4s;
	}

	.card-header {
		cursor: pointer;
		border: none;
		border-radius: 10px 10px 0px 0px;
		background-color: rgb(221, 221, 221);
		font-weight: bold;
	}

	.card-body {
		cursor: pointer;
	}

	.card-header h2 {
		color: var(--darkblue);
	}

	.card-footer {
		padding-top: 0px;
		border: none;
		background-color: transparent;
	}

	button img {
		width: 100%;
	}

	button img:hover {
		filter: brightness(0.9);
	}

	.btn {
		border-radius: 50px;
		width: 40px;
		height: 40px; 
		padding: 0;
	}

	.btn-del {
		background-color: transparent;
		margin-left: 10px;
		transition: border-color 0.4s;
		z-index: 10;
	}

	.date {
		float: left;
		margin: 0px;
		font-size: 0.85rem;
		color: rgb(131, 131, 131);
	}

	.options {
		float: right;
		display: flex;
		flex-direction: row;
	}

	.vcenter-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.doneInfo {
		color: white;
		z-index: 10;
		margin-bottom: 0px;
	}

	.deleteAnim {
		animation: deleteAnim 0.5s forwards;
		transform-origin: top;
	}

	@keyframes deleteAnim {
		0% {
			transform: scale(1);
			max-height: 500px;
			opacity: 1;
		}
		100% {
			transform: scale(0);
			max-height: 0px;
			opacity: 0;
		}
	}
</style>