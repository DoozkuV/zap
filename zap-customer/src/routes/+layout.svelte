<script lang="ts">
  import "tailwindcss/tailwind.css";

  import logoWhite from "$lib/assets/zap-logo-white.png";
</script>

<div class="navbar bg-base-100 border-b border-1">
  <div class="flex-none">
    <button class="btn square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4
          6h16M4 12h16M4 18h16"
        >
        </path>
      </svg>
    </button>
  </div>
  <div class="flex-1">
    <a href="./" class="btn btn-ghost text-xl">
      <img src={logoWhite} alt="Zap logo" width="52" height="46" />ZAP</a
    >
  </div>
</div>
<slot />
