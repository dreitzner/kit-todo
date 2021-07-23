<script lang="ts">
	let todoTitle = "Title";
	let todoBody = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati eum excepturi ullam animi alias ducimus, saepe accusantium! Consequuntur asperiores quidem, a excepturi, doloremque dolor tenetur omnis, et blanditiis quia odit!";
	let date = "Due: 12.03.22";

	//for self destruction
	let nodeRef;

	let isDone = false;

	function Taskdone() {
		isDone = true;
	}

	function deleteTask() {
		let elem = this.closest('.card');
		elem.style.animation = 'fading 0.5s forwards';
		setTimeout(() => {
			nodeRef.parentNode.removeChild(nodeRef);
		}, 350);
	}
</script>

<!-- <link href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" rel="stylesheet"> -->

<div class="{isDone ? 'card done' : 'card'}" bind:this={nodeRef}>
	<div class="card-header">
		{todoTitle}
	</div>
	<div class="card-body">
		{todoBody}
	</div>
	<div class="card-footer vcenter-item">
		<p class="date">{date}</p>
		<div class="options vcenter-item">
			{#if isDone}
				<p class="doneInfo">Task Done</p>
			{:else}
				<button on:click={Taskdone} class="btn">
					<img src="/check_light.svg" alt="Check">
				</button>
			{/if}
			<button on:click={deleteTask} class="btn btn-del">				
				<img src="{isDone ? '/trashcan_light.svg' : '/trashcan.svg'}" alt="Trashcan">
			</button>
		</div>
	</div>
</div>


<!-- <i class="fas fa-check"></i>
<i class="fas fa-trash"></i> -->

<style>
	.card {
		color: black;
		margin: 10px 0px;
		border: none;
	}

	.card.done::before {
		content: '';
		background-color: rgba(0, 0, 0, 0.5);
		border-radius: 10px;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.card-header {
		border: none;
		border-radius: 10px 10px 0px 0px;
		background-color: rgb(221, 221, 221);
		font-weight: bold;
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
		filter: brightness(-10);
	}

	.btn {
		border-radius: 50px;
		width: 40px;
		height: 40px; 
		padding: 0;
	}

	.btn-del {
		border: solid grey 1px;
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

	@keyframes fading {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
</style>