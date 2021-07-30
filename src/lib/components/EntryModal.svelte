<script>
	import { afterUpdate } from 'svelte';
	import supabase from '$lib/db';
    import { fly, fade } from 'svelte/transition';
	export let isOpen, modalTitle;
	export let resetModal, saveEntry;
	export let id, title, dueDate, dueTime, description, priority;
	let isValid = true;

	let priorities = [
		{
			priority: 1,
			priorityName: 'High Priority'
		},
		{
			priority: 2,
			priorityName: 'Medium Priority'
		},
		{
			priority: 3,
			priorityName: 'Low Priority'
		}
	];

	afterUpdate(() => {
		if(isOpen) {
			
			var forms = document.getElementsByClassName('needs-validation');

			var validation = Array.prototype.filter.call(forms, function (form) {
				form.addEventListener(
					'submit',
					function (event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						} else {
							if(isValid) {
								isValid = false;
								createOrUpdateEntry();
							}
							event.preventDefault();
						}
						form.classList.add('was-validated');
					},
					false
				);
			});
		}
	});

	function clearModal() {
		try {
			title = '';
			dueDate = '';
			dueTime = '';
			description = '';
		} catch (error) {
			console.log(
				error,
				'Nicht alle Felder wurden gefunden, Modal konnte nicht vollständig gecleart werden!'
			);
		}
	}

	//add UserId
	async function createOrUpdateEntry() {
		let uid = sessionStorage.getItem('uid');

		const { data, error } = await supabase
			.from('entries')
			.upsert({ id, title, description, priority, dueDate, dueTime, uid });

		if(!error){
			saveEntry();
			clearModal();
			resetModal();
			isValid = true;
		}
	}

	function closeModal() {
		clearModal();
		resetModal();
	}

	function resetModalHandler(event) {
		if (!event.target.closest('.modal-content') && isOpen) resetModal();
	}
</script>

{#if isOpen}
    <div class="modal show" tabindex="-1" role="dialog" aria-labelledby="" aria-describedby="" aria-modal="true" style="" on:click={resetModalHandler} transition:fade="{{ duration: 499 }}">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document" style="">
            <div class="modal-content" transition:fly="{{ x: 200, duration: 999 }}">
                <div class="darkgrey entrymodal m-3">
                    <div class="modal-header">
                        <h5 class="modal-title ml-3 mt-3">{modalTitle}</h5>
                        <button class="btn" on:click={closeModal}>
                            <img src="/close.svg" alt="Close Modal" />
                        </button>
                    </div>
					<form class="needs-validation" novalidate>
                    	<div class="modal-body">
                            <div class="row">
                                <div class="form-group col-12 col-sm-6">
                                    <input bind:value={title} type="text" minlength="1" class="form-control" placeholder="Title" required/>
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div class="form-group col-12 col-sm-6">
                                    <select bind:value={priority} class="custom-select dropdown">
                                        {#each priorities as { priority, priorityName }}
                                            <option value={priority}>
                                                {priorityName}
                                            </option>
                                        {/each}
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-12 col-sm-6">
                                    <textarea
                                        bind:value={description}
                                        minlength="1"
                                        class="form-control"
                                        placeholder="Description"
										required
                                    />
                                    <div class="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <input
                                            bind:value={dueDate}
                                            min={new Date().toISOString().split('T')[0]}
                                            type="date"
                                            class="form-control"
											required
                                        />
                                        <div class="invalid-feedback">Please pick a valid date!</div>
                                    </div>
                                    <div class="form-group">
                                        <input bind:value={dueTime} type="time" class="form-control" required/>
                                        <div class="invalid-feedback">Please pick a valid time!</div>
                                    </div>
                            </div>
							<div class="modal-footer">
								<button type="submit" class="btn">
									<img src="/check_light.svg" alt="Save Changes" />
								</button>
								<button type="button" class="btn" on:click={clearModal}>
									<img src="/trashcan.svg" alt="Remove Changes" />
								</button>
							</div>
                    	</div>
					</form>
                </div>
            </div>
        </div>
    </div>
{/if}	

<style>
    .modal {
        display: block;
        background-color: rgba(0, 0, 0, 0.5);
        overflow-y: auto;
    }

	.btn {
		border-radius: 50px;
		width: 50px;
		height: 50px;
		padding: 0;
	}

	button img {
		width: 100%;
	}

	.modal-header,
	.modal-body,
	.modal-footer {
		border: none;
		padding: 10px;
	}

	textarea {
		min-height: 316px;
	}
</style>
