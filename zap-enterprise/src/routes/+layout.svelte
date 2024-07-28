<script lang="ts">
  const { children } = $props();
  let mini = $state(true);

  function toggleSidebar() {
      mini = !mini;
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap'); 

  .sidebar {
      height: 100%;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color: #cbcbcb;
      transition: width 0.5s;
      overflow-x: hidden;
      padding-top: 60px;
      white-space: nowrap;
      font-family: 'League Spartan', sans-serif;
  }
  .sidebar a {
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #636363;
      display: block;
  }
  .sidebar a:hover {
      color: #f1f1f1;
  }

  .logo-box {
    padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #636363;
      display: block;
      margin-bottom: 50px;
      margin-top: -20px;
  }

  .sidebar img {
    width: 55px;
    vertical-align: middle;
    padding-bottom: 3px;
    margin-right: 20px;
    margin-left: -16px;
  }
  .material-icons {
      vertical-align: middle;
      padding-bottom: 3px;
      margin-right: 30px;
  }
  .logo-text {
      vertical-align: middle;
      font-size: 40px;
      font-weight: bold;
      margin-left: -2px;
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
</style>

<!-- Sidebar with reactive width based on the 'mini' state -->
<div class="sidebar"
   style:width={mini ? '85px' : '250px'}
   on:mouseover={toggleSidebar}
   on:mouseout={toggleSidebar}>
  <div class="logo-box"><img src="zap-logo.png" alt="logo" class="logo"/><span class="logo-text">ZAP</span></div>
  <a href="/"><i class="material-icons">grid_view</i><span class="icon-text">Dashboard</span></a><br>
  <a href="/"><i class="material-icons">bolt</i><span class="icon-text">Queue</span></a><br>
  <a href="/"><i class="material-icons">edit_document</i><span class="icon-text">Edit Menu</span></a><br>
  <a href="/"><i class="material-icons">group</i><span class="icon-text">Customers</span></a>
</div>

<!-- Main content with reactive margin-left based on the 'mini' state -->
<div id="main" style:margin-left={mini ? '85px' : '250px'}>
  {@render children()}
</div>