class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      
    
      

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
      <nav class="navbar navbar-expand-sm bg-dark bg-primary" data-bs-theme="dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar8">
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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
    crossorigin="anonymous"></script>
    `;
  }
}

customElements.define('app-navbar', Navbar);

