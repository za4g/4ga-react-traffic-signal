export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler order-lg-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand order-lg-1x fw-bold" href="/#">
          Start Boostrap
        </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link text-white fw-bold"
                aria-current="page"
                href="/#"
                aria-disabled="true"
              >
                Home
              </a>
            </li>
            <li class="nav-item fw-bold">
              <a class="nav-link" aria-current="page" href="/#">
                About
              </a>
            </li>
            <li class="nav-item fw-bold">
              <a class="nav-link" href="/#">
                Services
              </a>
            </li>
            <li class="nav-item fw-bold">
              <a class="nav-link" href="/#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
