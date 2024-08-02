<script lang="ts">
  import restaurantImg from "$lib/assets/restaurant.jpeg";
</script>

<!-- First Heading -->
<div class="relative">
  <img class="w-full h-auto" src={restaurantImg} alt="Restaurant" />
  <div
    class="absolute inset-0 flex flex-col space-y-10 items-center justify-center"
  >
    <div
      class="backdrop-blur-md p-8 rounded-lg drop-shadow-xl border-primary-content border-2"
    >
      <h1 class="top-1/2 text-center text-8xl text-primary font-bold mb-4 mt-4">
        Zap
      </h1>
      <p class="text-center text-2xl text-secondary">
        Welcome to Zap! Please click around to learn more!
      </p>
    </div>
    <a href="./customer/restaurant" class="btn btn-secondary"
      >Go To Restaurant</a
    >
  </div>
</div>
