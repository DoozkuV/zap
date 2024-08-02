<script lang="ts">
  export let isModalOpen: boolean;
  let categoryInput = "";
  let itemNameInput = "";
  let itemPriceInput = "";
  let itemDescriptionInput = "";

  export let data;

  // runes mode requires 
  //let { data: data } = $props();
  // const { supabase, session } = propsData;
  
  // let { supabase, session } = data; // destructure these from data object
  // $: ({ supabase, session } = data);

  let showAlert = false;
  let alertMessage = "";

  function handleSubmit() {
      if (validateInputs()) {
          console.log("Form is valid. Saving...");

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
      return categoryInput.trim() !== "" &&
             itemNameInput.trim() !== "" &&
             itemPriceInput.trim() !== "" &&
             itemDescriptionInput.trim() !== "";
  }

  // Function to reset input fields
  function resetInputs() {
      categoryInput = "";
      itemNameInput = "";
      itemPriceInput = "";
      itemDescriptionInput = "";
      showAlert = false;
      alertMessage = "";
  }

//   async function saveItem() {            
//     if(profileData?.length == 0) { // if profileData has length 0, then insert data (create new row)
//       const { data, error} = await supabase
//         .from("profiles")
//         .insert({ ...profile, user_id: session?.user?.id, email: session?.user?.email }) // spread operator fills in description and ids    
//     } else { // if not length 0 and we know user has profile to save, update the profile row
//       const { data, error} = await supabase
//         .from("profiles")
//         .update(profile) // update description, pokemon_ids. don't have to update id or email since same
//         .eq("user_id", session?.user?.id ); // update the row profiles where user id matches. id more secure than email.
//     }
// }
</script>

<dialog class="modal" class:modal-open={isModalOpen}>
  <div class="modal-box max-w-xl">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick={() => {
          isModalOpen = false; 
          setTimeout(() => {
              resetInputs();
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
      {#if showAlert}
      <div role="alert" class="alert alert-warning mt-4">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{alertMessage}</span>
      </div>
      {/if}
      <div class="flex justify-center mt-4">
          <!-- <button class="btn btn-success" on:click={handleSubmit}>Save</button> -->
          <button class="btn btn-outline btn-primary rounded-full hover:text-white w-32" onclick={handleSubmit}>Save</button>
      </div>
  </div>
</dialog>
