<script lang="ts">
  import '$/app.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

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
      background-color: #ffffff;
      transition: width 0.5s;
      overflow-x: hidden;
      padding-top: 60px;
      white-space: nowrap;
      font-family: 'League Spartan', sans-serif;
      border-right: 1px solid #cccccc;
  }
  .sidebar a {
      padding: 8px 4px 4px 20px;
      text-decoration: none;
      font-size: 18px;
      color: #636363;
      display: block;
  }

  .link-container {
    padding: 8px 0px 8px;
    border-radius: 25px;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    width: 100%;
    transition: color 0.3s;
  }

  .link-container:hover {
    background-color: #909090;
  }

  .link-container:hover a {
    color: #f1f1f1;
  }

  .logo-box {
    padding: 0px 0px 0px 5px;
      text-decoration: none;
      font-size: 25px;
      color: #636363;
      display: flex;
      margin-bottom: 50px;
      margin-top: -20px;
  }

  .sidebar img {
    max-height: 50px;
    width: auto;
    vertical-align: middle;
    padding-bottom: 3px;
    margin-right: 12px;
    margin-left: 0px;
  }
  .material-icons {
      vertical-align: middle;
      padding-bottom: 3px;
      margin-right: 22px;
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
   style:width={mini ? '65px' : '200px'}
   onmouseover={toggleSidebar}
   onmouseout={toggleSidebar}>
  <div class="logo-box"><img src="../zap-logo.png" alt="zap-logo" class="logo"/><span class="logo-text">ZAP</span></div>
  <div class="link-container">
    <a href="/admin/dash"><i class="material-icons">grid_view</i><span class="icon-text">Dashboard</span></a><br>
  </div>
  <div class="link-container">
    <a href="/admin/queue"><i class="material-icons">bolt</i><span class="icon-text">Queue</span></a><br>
  </div>
  <div class="link-container">
    <a href="/admin/edit-menu"><i class="material-icons">edit_document</i><span class="icon-text">Edit Menu</span></a><br>
  </div>
  <div class="link-container">
    <a href="/admin/customers"><i class="material-icons">group</i><span class="icon-text">Customers</span></a>
  </div>
  <div class="border-b border-gray-300 my-4"></div>
  <div class="link-container mt-40">
    <a href="/admin/settings"><i class="material-icons">settings</i><span class="icon-text">Settings</span></a>
  </div>
  <div class="link-container">
    <a href="/"><i class="material-icons">logout</i><span class="icon-text">Logout</span></a>
  </div>
</div>

<!-- Main content with reactive margin-left based on the 'mini' state -->
<div id="main" style:margin-left={mini ? '65px' : '200px'}>
    {@render children()}
</div>