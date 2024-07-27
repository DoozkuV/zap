<script>
  // No need for script here since hover effect will be handled by CSS
</script>

<style>
  @import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
  
  aside {
    /* Initial width of the sidebar */
    width: 4rem; /* Corresponds to sm:w-16 */
  }
  
  aside:hover {
    /* Expanded width of the sidebar on hover */
    width: 20rem; /* Corresponds to sm:w-1/5 */
  }
  
  .sidebar-content {
    transition: width 0.5s;
  }
  
  .sidebar-content:hover {
    /* Optional: Adjust this if you want some additional styling or effects */
  }
</style>

<div class="container">
  <div class="flex">
    <aside class="bg-blue-500 min-h-screen sidebar-content">
      <div class="sticky top-0 pt-12 px-2 w-full">
        <div class="absolute right-2 top-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
        <nav>
          <ul class="flex flex-col overflow-hidden space-y-2">
            <li class="hover:text-gray-200 h-8">
              <a href="#" class="flex items-center h-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>
                  Home
                </span>
              </a>
            </li>
            <!-- More list items here -->
          </ul>
        </nav>
      </div>
    </aside>
    <main class="sm:w-4/5 p-4 pt-12 px-8">
      <!-- Main content here -->
    </main>
  </div>
</div>
    
  
<!-- <script>
	let mini = true;
    

	function toggleSidebar() {
		mini = !mini;
	}
</script>

<div
	class="sidebar"
	style:width={mini ? '85px' : '250px'}
	on:mouseover={toggleSidebar}
	on:mouseout={toggleSidebar}
>
	<a href="/"><i class="material-icons">info</i><span class="icon-text">about</span></a><br />
	<a href="/"><i class="material-icons">spa</i><span class="icon-text">services</span></a><br />
	<a href="/"><i class="material-icons">monetization_on</i><span class="icon-text">clients</span></a
	><br />
	<a href="/"><i class="material-icons">email</i><span class="icon-text">contact</span></a>
</div>


<div id="main" style:margin-left={mini ? '85px' : '250px'}>
	<h2>test sidebar</h2>
</div>


<style>
	@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

	body {
	}

	.sidebar {
		height: 100%;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #111;
		transition: width 0.5s;
		overflow-x: hidden;
		padding-top: 60px;
		white-space: nowrap;
	}

	.sidebar a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		font-size: 25px;
		color: #818181;
		display: block;
	}

	.sidebar a:hover {
		color: #f1f1f1;
	}

	.material-icons {
		vertical-align: middle;
		padding-bottom: 3px;
		margin-right: 30px;
	}

	.icon-text {
		vertical-align: middle;
	}

	#main {
		padding: 16px;
		transition: margin-left 0.5s;
	}

	@media screen and (max-height: 450px) {
		.sidebar {
			padding-top: 15px;
		}
		.sidebar a {
			font-size: 18px;
		}
	}
</style> -->
