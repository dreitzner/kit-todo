<script>
    import supabase from "$lib/db"

    let priorities = ["High Priority", "Medium Priority", "Low Priority"];

    async function getEntries() {
        const entries = await supabase.from('entries').select(`*`);
    }

    /*async function createEntry() {
        const newEntry = await supabase.from('entries').insert({key:value});
    }*/

    /*async function updateEntry() {
        const newEntry = await supabase.from('entries').eq('selector').update({ key: value })
    }*/

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