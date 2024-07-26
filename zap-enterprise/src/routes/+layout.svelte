<script>
    let mini = true;

    function toggleSidebar() {
        mini = !mini;
    }
</script>

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
</style>

<!-- Sidebar with reactive width based on the 'mini' state -->
<div class="sidebar"
     style:width={mini ? '85px' : '250px'}
     on:mouseover={toggleSidebar}
     on:mouseout={toggleSidebar}>
    <a href="/"><i class="material-icons">info</i><span class="icon-text">about</span></a><br>
    <a href="/"><i class="material-icons">spa</i><span class="icon-text">services</span></a><br>
    <a href="/"><i class="material-icons">monetization_on</i><span class="icon-text">clients</span></a><br>
    <a href="/"><i class="material-icons">email</i><span class="icon-text">contact</span></a>
</div>

<!-- Main content with reactive margin-left based on the 'mini' state -->
<div id="main" style:margin-left={mini ? '85px' : '250px'}>
    <h2>test sidebar</h2>
</div>

