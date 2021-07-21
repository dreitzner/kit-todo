<script>
    let priotity = "High Priority";
    let priorities = ["High Priority", "Medium Priority", "Low Priority"];
</script>

<div class="row">
    <div class="col-lg col-12 card prio darkgrey mr-3">
        <div class="card-body">        
            <h2 class="text-center mb-3 visibleLg">High Priority</h2>
            <select class="custom-select mb-3 dropdown visibleSm">
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
        height: 85vh;
    }

    .visibleLg {
            visibility: visible;
    }

    .visibleSm {
            visibility: hidden
    }


    @media (max-width: 991.98px) { 
		.visibleLg {
            visibility: hidden;
        }

        .visibleSm {
            visibility: visible;
    }
	}  

</style>