<script>
    import MediaQuery from "svelte-media-query";
    import PriorityColumn from '$lib/components/PriorityColumn.svelte';
    import supabase from "$lib/db"

    getEntries();
 
    let todos = [];
    async function getEntries() {
        let uid;
        try {
            uid = sessionStorage.getItem('uid');
        } catch (error) {
            console.log("Problem with sessionStorage");
        }
        
        // const entries = await supabase.from('entries').select("*").eq('uid', uid);
        let { data: entries, error } = await supabase.from('entries').select("*").eq('uid', uid);
        todos = entries;
    }
    
    $: priorities = [
        {
            priorityName: "High Priority",
            todos: todos.filter(x => x.priority == 1) || [],
        },
        {
            priorityName: "Medium Priority",
            todos: todos.filter(x => x.priority == 2) || [],
        },
        {
            priorityName: "Low Priority",
            todos: todos.filter(x => x.priority == 3) || [],
        }
    ];

    $: smallPriority = 3;
    $: smallPriorityName = "High Priority";
    $: smallTodos = todos.filter(x => x.priority == smallPriority) || [];
    
    const removeFunction = async function(id) {
        //delete
        const { data, error } = await supabase
            .from('entries')
            .delete()
            .match({ id: id })
        getEntries();
    }

    function switchPriority() {
        smallPriority = this.selectedIndex+1;
        smallPriorityName = this.value;
    }

    function saveEntry() {
        getEntries();
    }
</script>

<div class="row my-2">
    <select class="custom-select my-3 dropdown visibleSm" on:change={switchPriority}>
        {#each priorities as {priorityName}}
            <option value={priorityName}>
                {priorityName}
            </option>
        {/each}
    </select>
    {#await todos then val}

        <MediaQuery query="(max-width: 991.98px)" let:matches>
            {#if matches}
                <PriorityColumn 
                    todos={smallTodos}
                    priorityName={smallPriorityName}    
                    {removeFunction}
                    {saveEntry}
                />
            {:else}
                {#each priorities as {priorityName, todos}}
                    <PriorityColumn 
                        {todos}
                        {priorityName}
                        {removeFunction}
                        {saveEntry}
                    />
                {/each}
            {/if}
        </MediaQuery>
    {/await}    
</div>

<style>

    .dropdown {
        text-align-last:center;
        font-size: 16pt;
    }
    
    .visibleSm {
        display: none;
    }

    @media (max-width: 991.98px) {
        .visibleSm {
            display: unset;
        }
    }
</style>