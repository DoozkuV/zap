<script lang="ts">
    export let isModalOpen: boolean;
    let categoryInput = ""
    let itemNameInput = ""
    let itemPriceInput = ""
    let itemDescriptionInput = ""

    let showAlert = false;
    let alertMessage = "";

    function handleSubmit() {
    if (validateInputs()) {
      console.log("Form is valid. saving...");
      
      // close the modal and reset inputs after saving
      isModalOpen = false;
      setTimeout(() => {
        categoryInput = "";
        itemNameInput = "";
        itemPriceInput = "";
        itemDescriptionInput = "";
      }, 200);
    } else {
      console.log("Please fill in all required fields.");
    }
  }

  // Function to validate input fields
  function validateInputs() {
    return categoryInput.trim() !== "" &&
           itemNameInput.trim() !== "" &&
           itemPriceInput.trim() !== "" &&
           itemDescriptionInput.trim() !== "";
  }
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
    <div class="modal-box max-w-xl">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={() => {
            isModalOpen = false; 
            setTimeout(() => {
                    categoryInput = ""
                    itemNameInput = ""
                    itemPriceInput = ""
                    itemDescriptionInput = ""
            }, 200);
        }}>✕</button>
        <div class="flex-none px-2">
            <h1 class="text-left p-1 text-lg">Menu Category</h1>
            <label class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out">
                <input type="text" class="grow text-base" placeholder="e.g. Chef Specials, Appetizers, Beverages" bind:value={categoryInput} />
            </label>
            <h1 class="text-left p-1 text-md">Item Name</h1>
            <label class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out">
                <input type="text" class="grow text-base" placeholder="e.g. Caesar Salad, Spaghetti Bolognese, Tiramisu" bind:value={itemNameInput} />
            </label>
            <h1 class="text-left p-1 text-md">Item Price</h1>
            <label class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out">
                <input type="number" class="grow text-base" placeholder="12.99" bind:value={itemPriceInput} />
            </label>
            <h1 class="text-left p-1 text-md">Item Description</h1>
            <textarea 
                class="textarea textarea-bordered w-full mb-4 text-base flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out" 
                placeholder="Describe your dish"
                bind:value={itemDescriptionInput}></textarea>
        </div>
        <div class="flex justify-center mt-4">
            <!-- <button class="btn btn-success" on:click={handleSubmit}>Save</button> -->
            <button class="btn btn-outline btn-primary rounded-full hover:text-white w-32 on:click={handleSubmit}">Save</button>
        </div>
    </div>
</dialog>