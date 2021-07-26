<script>
    import PriorityColumn from '$lib/components/PriorityColumn.svelte';

    const removeFunction = function(id) {
        todos = todos.filter(x => x.id !== id);
    }

    let todos = [
        {
            id: "0",
            todoTitle: "Bugs fixen",
            todoBody: "Lorem Ipsum",
            date: "26.07.21",
            priority: 1,
            isDone: false,
        },
        {
            id: "1",
            todoTitle: "Verzweifeln",
            todoBody: "Lorem Ipsum",
            date: "27.07.21",
            priority: 2,      
            isDone: true,
        },
        {
            id: "2",
            todoTitle: "Domenik nach Hilfe fragen",
            todoBody: "Lorem Ipsum",
            date: "28.07.21",
            priority: 3,
            isDone: false,
        },
        {
            id: "3",
            todoTitle: "Test",
            todoBody: "Lorem Ipsum",
            date: "28.07.21",
            priority: 3,
            isDone: false,
        }
    ];
    
    $:priorityLow = todos.filter(x => x.priority == 1) || [];
    $:priorityMedium = todos.filter(x => x.priority == 2) || [];
    $:priorityHigh = todos.filter(x => x.priority >= 3) || [];
    
    let priorities = [
        {
            priority: "High Priority",
            todos: priorityLow,
        },
        {
            priority: "Medium Priority",
            todos: priorityMedium,
        },
        {
            priority: "Low Priority",
            todos: priorityHigh,
        }
    ];
</script>

<div class="row my-2">
    <select class="custom-select my-3 dropdown visibleSm">
        {#each priorities as {priority}}
            <option value={priority}>
                {priority}
            </option>
        {/each}
    </select>
    {#each priorities as {priority, todos}}
        <PriorityColumn 
            {priority}
            {todos}
            {removeFunction}/>
    {/each}    
</div>

<div class="modal fade" id="entryModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>+
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
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