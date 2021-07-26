<script>
    import TodoEntry from '$lib/components/TodoEntry.svelte';
    export let priority = "Priority";
    export let todos;
    console.log(priority, todos);
    export let removeFunction;
</script>

<div class="col-lg col-12 card prio darkgrey mr-3">
    <div class="card-body">        
        <h2 class="text-center mb-3 visibleLg">{priority}</h2>
        
        <button class="btn btn-white mb-3" data-toggle="modal" data-target="#entryModal">+</button>
        {#each todos as {id, todoTitle, todoBody, date, isDone} (id)}
            <TodoEntry 
                {id}
                {todoTitle}
                {todoBody}
                {date}
                {removeFunction}
                bind:isDone/>
        {/each}
    </div>
</div>

<style>
    .prio{
        min-height: 90vh;
    }

    @media (max-width: 991.98px) { 
		.visibleLg {
            display: none;
        }

        
	}
</style>