<script lang="ts">
    export let isModalOpen: boolean;
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
    <div class="modal-box max-w-xl">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={() => {
            isModalOpen = false; 
            setTimeout(() => {
                selectedLang = "";
                searchInput = "";
            }, 200);
        }}>✕</button>
        <div class="flex-none pl-10">
            <h1>Menu Category</h1>
        </div>
    </div>
</dialog>