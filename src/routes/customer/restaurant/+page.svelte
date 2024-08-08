<script lang="ts">
  import banner from "$lib/assets/starbucks-banner.png";
  import logo from "$lib/assets/starbucks-logo.png";
  import stockImg from "$lib/assets/stock-image-not-found.jpg";
  import { supabase } from "$lib/supabaseClient.js";
  const heart =
    "M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181";

  const { data: menuItems } = $props();

  const getImageUrl = (name: string) => {
    const filePath = name.replace(/\s+/g, "_");
    const { data } = supabase.storage
      .from("menu-item-pictures")
      .getPublicUrl(filePath);
    return data.publicUrl;
  };
</script>

<div class="flex justify-center">
  <div class="relative w-11/12 h-[25vh]">
    <img
      class="h-full w-full object-cover rounded-b-lg"
      src={banner}
      alt="Restaurant Banner"
    />
    <div class="absolute bottom-3 left-3 items-center justify-center">
      <img
        class="relative max-h-14 max-w-14 z-10 object-cover rounded-full border-white border-4 drop-shadow-xl"
        src={logo}
        alt="Restaurant Logo"
      />
    </div>
  </div>
</div>

<div class="my-3 mx-3 flex items-center space-x-4">
  <h1 class="text-content-primary text-4xl">Starbucks</h1>
  <button class="btn btn-secondaryl"
    ><svg width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
      <path d={heart} />
    </svg>Save</button
  >
</div>

{#if menuItems.data !== null}
  <div class="carousel mx-10 space-x-4">
    {#each menuItems.data as item}
      <div class="carousel-item">
        <div>
          <img
            src={getImageUrl(item.name)}
            onerror={(event) => ((event.target as HTMLImageElement).src = stockImg)}
            alt={item.name}
            class="rounded-t-xl"
            width="212"
            height="220"
          />
          <h1>{item.name}</h1>
          <h1>${item.price}</h1>
        </div>
      </div>
    {/each}
  </div>
{:else}
  <h1>No Menu Items Found</h1>
{/if}
