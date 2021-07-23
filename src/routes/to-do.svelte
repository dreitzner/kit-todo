<script>
    import TodoEntry from '$lib/TodoEntry/index.svelte';
    
    let priorities = ["High Priority", "Medium Priority", "Low Priority"];
</script>

<div class="row my-2">
    <div class="col-lg col-12 card prio darkgrey mr-3">
        <div class="card-body">        
            <h2 class="text-center mb-3 visibleLg">High Priority</h2>
            <select class="custom-select my-3 dropdown visibleSm">
                {#each priorities as priotity}
                    <option value={priotity}>
                        {priotity}
                    </option>
                {/each}
            </select>
            <button class="btn btn-white">+</button>
            <TodoEntry />
            <TodoEntry />
        </div>
    </div>
    <div class="col card prio darkgrey mr-3 visibleLg">
        <div class="card-body">        
            <h2 class="text-center mb-3">Medium Priority</h2>
            <button class="btn btn-white">+</button>
        </div>
    </div>
    <div class="col card prio darkgrey visibleLg">
        <div class="card-body">        
            <h2 class="text-center mb-3">Low Priority</h2>
            <button class="btn btn-white">+</button>
        </div>
    </div>
</div>

<style>

    .dropdown {
        text-align-last:center;
        font-size: 16pt;
    }
    .prio{
        height: 90vh;
    }

    .visibleSm {
        display: none;
    }


    @media (max-width: 991.98px) { 
		.visibleLg {
            display: none;
        }

        .visibleSm {
            display: unset;
        }
	}  

</style>