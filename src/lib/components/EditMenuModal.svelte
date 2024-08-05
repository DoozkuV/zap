<script lang="ts">
  import { supabase, uploadMenuItemPic } from "$lib/supabaseClient";
  
  let categoryInput = $state("");
  let itemNameInput = $state("");
  let itemPriceInput: number | null = $state(null);
  let itemDescriptionInput = $state("");
  let file: File | null = null;


  // runes mode requires
  let { isModalOpen = $bindable(false) } = $props();

  // let { supabase, session } = data; // destructure these from data object
  // $: ({ supabase, session } = data);

  let showAlert = $state(false);
  let alertMessage = $state("");

  let fileError = '';

  function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      file = files[0];
      if (file.size > 6 * 1024 * 1024) { // 6MB in bytes
        fileError = 'File size should be less than 6MB.';
        file = null;
      } else {
        fileError = '';
        console.log('Selected file:', file);
      }
    }
  }

  async function handleSubmit() {
    if (validateInputs() && file) {
      console.log("Form is valid. Saving...");
      try {
        const timestamp = Date.now();
        const filePath = itemNameInput.replace(/\s+/g, '_');
        const { path } = await uploadMenuItemPic(filePath, file);

        const { error } = await supabase.from("menuitems").insert({
          category: categoryInput,
          name: itemNameInput,
          price: itemPriceInput,
          description: itemDescriptionInput,
          image_path: path // Save the path to your database
        });
      } catch (error) {
        console.error('Error uploading file:', error);
        alertMessage = "Error uploading file. Please try again.";
        showAlert = true;
      }

      // Close the modal and reset inputs after saving
      isModalOpen = false;
      resetInputs();
    } else {
      alertMessage = "Please fill in all required fields.";
      showAlert = true;
    }
  }

  // Function to validate input fields
  function validateInputs() {
    return (
      categoryInput !== "" &&
      itemNameInput !== "" &&
      itemPriceInput !== null &&
      itemDescriptionInput !== "" &&
      file !== null
    );
  }

  // Function to reset input fields
  function resetInputs() {
    categoryInput = "";
    itemNameInput = "";
    itemPriceInput = null;
    itemDescriptionInput = "";
    showAlert = false;
    alertMessage = "";
    file = null;
    fileError = "";
  }

</script>

<dialog class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box max-w-xl h-full">
    <button
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onclick={() => {
        isModalOpen = false;
        setTimeout(() => {
          resetInputs();
        }, 200);
      }}>✕</button
    >
    <div class="flex-none px-2">
      <h1 class="text-left p-1 text-lg">Menu Category</h1>
      <label
        class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out"
      >
        <input
          type="text"
          class="grow text-base"
          placeholder="e.g. Chef Specials, Appetizers, Beverages"
          bind:value={categoryInput}
        />
      </label>
      <h1 class="text-left p-1 text-md">Item Name</h1>
      <label
        class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out"
      >
        <input
          type="text"
          class="grow text-base"
          placeholder="e.g. Caesar Salad, Spaghetti Bolognese, Tiramisu"
          bind:value={itemNameInput}
        />
      </label>
      <h1 class="text-left p-1 text-md">Item Picture</h1>
      <input
            type="file"
            accept="image/jpg, image/jpeg, image/png"
            class="file-input file-input-bordered file-input-neutral w-full mb-4" 
            onchange={handleFileChange} />
      <h1 class="text-left p-1 text-md">Item Price</h1>
      <label
        class="input input-bordered w-full mb-4 flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out"
      >
        <input
          type="number"
          class="grow text-base"
          placeholder="12.99"
          bind:value={itemPriceInput}
        />
      </label>
      <h1 class="text-left p-1 text-md">Item Description</h1>
      <textarea
        class="textarea textarea-bordered w-full mb-4 text-base flex items-center gap-2 hover:bg-gray-300 hover:border-gray-300 hover:text-black transition duration-500 ease-in-out"
        placeholder="Describe your dish"
        bind:value={itemDescriptionInput}
      ></textarea>
    </div>
    {#if showAlert}
      <div role="alert" class="alert alert-warning mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>{alertMessage}</span>
      </div>
    {/if}
    <div class="flex justify-center mt-4">
      <!-- <button class="btn btn-success" on:click={handleSubmit}>Save</button> -->
      <button
        class="btn btn-outline btn-primary rounded-full hover:text-white w-32"
        onclick={handleSubmit}>Save</button
      >
    </div>
  </div>
</dialog>