class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
      
    
      

      <style>
      .searred{
        border-radius: 50px 0 0 50px;
        width: 25rem;
      }
      
      .searredb{
        border-radius: 0 50px 50px 0;
        width: 10rem;
      }
      
      .proimg{
        width: 20%;
        border-radius: 50%;
      }
      .btn-outline-success{
      border-color: #495057;
      color: #b8babe;
      }
      
      
      .abs-center-x {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      }
      
      .abs-end-x{
        position: absolute;
        left: 90%;
        transform: translateX(-50%);
      }
      
      </style>

      <!-- Your second Bootstrap navbar HTML goes here -->
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <nav class="navbar navbar-expand-sm bg-dark bg-primary" data-bs-theme="dark">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar8">
            <span class="navbar-toggler-icon"></span>
        </button>
        <span class="navbar-text">&nbsp;</span>
        <div class="navbar-collapse collapse" id="navbar8">
          <ul class="navbar-nav abs-center-x">
            <li class="nav-item">
              <form class="d-flex" role="search">
                <input class="form-control searred" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success searredb" type="submit">Search</button>
              </form>
            </li>
          </ul>
          <ul class="navbar-nav abs-end-x">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img class="proimg" src="https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png" alt="">
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Name</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">My workspace</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      
    `;
  }
}

customElements.define('app-navbar', Navbar);

class Sidebar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    
    
      
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
    <style>
      @import url('https://fonts.googleapis.com/css?family=Titillium+Web:300');
      .fa-2x {
      font-size: 2em;
      }
      .fa {
      position: relative;
      display: table-cell;
      width: 60px;
      height: 36px;
      text-align: center;
      vertical-align: middle;
      font-size:20px;
      }


      .main-menu:hover,nav.main-menu.expanded {
      width:250px;
      overflow:visible;
      }

      .main-menu {
      background:#212121;
      border-right:1px solid #e5e5e5;
      position:absolute;
      top:0;
      bottom:0;
      height:100%;
      left:0;
      width:60px;
      overflow:hidden;
      -webkit-transition:width .05s linear;
      transition:width .05s linear;
      -webkit-transform:translateZ(0) scale(1,1);
      z-index:1000;
      }

      .main-menu>ul {
      margin:7px 0;
      }

      .main-menu li {
      position:relative;
      display:block;
      width:250px;
      }

      .main-menu li>a {
      position:relative;
      display:table;
      border-collapse:collapse;
      border-spacing:0;
      color:#999;
      font-family: arial;
      font-size: 14px;
      text-decoration:none;
      -webkit-transform:translateZ(0) scale(1,1);
      -webkit-transition:all .1s linear;
      transition:all .1s linear;
<<<<<<< Updated upstream
      
=======

>>>>>>> Stashed changes
      }

      .main-menu .nav-icon {
      position:relative;
      display:table-cell;
      width:60px;
      height:36px;
      text-align:center;
      vertical-align:middle;
      font-size:18px;
      }

      .main-menu .nav-text {
      position:relative;
      display:table-cell;
      vertical-align:middle;
      width:190px;
      font-family: 'Titillium Web', sans-serif;
      }

      .main-menu>ul.logout {
      position:absolute;
      left:0;
      bottom:0;
      }

      .no-touch .scrollable.hover {
      overflow-y:hidden;
      }

      .no-touch .scrollable.hover:hover {
      overflow-y:auto;
      overflow:visible;
      }

      a:hover,a:focus {
      text-decoration:none;
      }

      nav {
      -webkit-user-select:none;
      -moz-user-select:none;
      -ms-user-select:none;
      -o-user-select:none;
      user-select:none;
      }

      nav ul,nav li {
      outline:0;
      margin:0;
      padding:0;
      }
      .main-menu li:hover>a,nav.main-menu li.active>a,.dropdown-menu>li>a:hover,.dropdown-menu>li>a:focus,.dropdown-menu>.active>a,.dropdown-menu>.active>a:hover,.dropdown-menu>.active>a:focus,.no-touch .dashboard-page nav.dashboard-menu ul li:hover a,.dashboard-page nav.dashboard-menu ul li.active a {
      color:#fff;
      background-color:#000000;
      }
      .area {
      float: left;
      background: #e2e2e2;
      width: 100%;
      height: 100%;
      }
      @font-face {
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 300;
      src: local('Titillium WebLight'), local('TitilliumWeb-Light'), url('http://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff') format('woff');
<<<<<<< Updated upstream
      }
      
      .sid_mrg{
      padding-top: 4rem;
      }
=======
      }

      .sid_mrg{
      padding-top: 4rem;
      }
      
      
>>>>>>> Stashed changes
    </style>

      
    <div class="bg-dark" data-bs-theme="dark">
    <div class="area"></div>
    <nav class="main-menu sid_mrg">
      <ul>
        <li>
          <a href="#">
            <i class="fa fa-home fa-2x"></i>
            <span class="nav-text">
              Home
            </span>
          </a>

        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-pen-to-square fa-2x"></i>
            <span class="nav-text">
              My task
            </span>
          </a>
        </li>
        <hr>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-object-ungroup fa-2x"></i>
            <span class="nav-text">
              Reporting
            </span>
          </a>

        </li>
        <li class="has-subnav">
          <a href="#">
            <i class="fa fa-folder fa-2x"></i>
            <span class="nav-text">
              Portfolios
            </span>
          </a>
        </li>
        <hr>
        <li>
          <a href="#">
            <i class="fa fa-user-group fa-2x"></i>
            <span class="nav-text">
              My workspace
            </span>
          </a>
        </li>

      </ul>

      <ul class="logout">
        <li>
          <a href="#">
            <i class="fa fa-power-off fa-2x"></i>
            <span class="nav-text">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

      
    `;
  }
}

customElements.define('sidebar-navbar', Sidebar);

