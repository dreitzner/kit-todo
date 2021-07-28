<script>
    import TodoEntry from '$lib/components/TodoEntry.svelte';
    import EntryModal from '$lib/components/EntryModal.svelte';
    export let priorityName = "Priority";
    export let todos;
    export let removeFunction;
    export let saveEntry;
    let isOpen, id, modalTitle, title, description, dueDate, dueTime;
    let priorities = ["High Priority", "Medium Priority", "Low Priority"];
    let priority = priorities.indexOf(priorityName) + 1;
    

    function resetModal() {
        isOpen = false;
    }

    function openModal() {
        isOpen = true;
        setTimeout(() => {
            document.querySelector('.modal').addEventListener('click', (event) => {
                if(!event.target.closest('.modal-content') && isOpen)
                    resetModal();
            })
        }, 500);
    }

    function newEntry() {
        modalTitle = "Add New Entry";
        openModal();
    }

    function updateEntry(entryid, entrytitle, entrydescription, entrydueDate, entrydueTime) {
        console.log(entryid);
        modalTitle = "Update Entry";
        id = entryid;
        title = entrytitle;
        description = entrydescription;
        dueDate = entrydueDate;
        dueTime = entrydueTime;
        openModal();
    }
</script>

<div class="col-lg col-12 card prio darkgrey mr-3">
    <div class="card-body">        
        <h2 class="text-center mb-3 visibleLg">{priorityName}</h2>
        
        <button class="btn btn-white mb-3" on:click={newEntry}>+</button>
        {#each todos as {id, title, description, dueDate, dueTime, completed} (id)}
            <TodoEntry 
                {id}
                {title}
                {description}
                {dueDate}
                {dueTime}
                {removeFunction}
                {updateEntry}
                bind:completed/>
        {/each}
        
    </div>
</div>
<EntryModal
    {modalTitle}
    {isOpen}
    {id}
    {title}
    {description}
    {dueDate}
    {dueTime}
    {priority}
    {resetModal}
    {saveEntry}/>

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