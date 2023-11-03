class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="path/to/bootstrap/js/bootstrap.bundle.min.js"></script>

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
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="d-flex justify-content-center">
            <form class="d-flex" role="search">
              <input class="form-control searred" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success searredb" type="submit">Search</button>
            </form>
          </div>
          <div class="dropdown d-flex justify-content-end">
            <a href="#">
              <img class="proimg" src="https://m.media-amazon.com/images/I/01Kv-W2ysOL._SY600_.png" alt="">
            </a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('app-navbar', Navbar);