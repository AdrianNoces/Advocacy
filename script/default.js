import { GuideContent } from "../data/guide.js";
import { homePage } from "../data/home.js";

document.body.innerHTML = `
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="box-shadow: 2px 2px 20px hsl(0deg 0% 0% / 0.48); position: fixed; top: 0; left: 0; right: 0;" >
<div class="container-fluid">
  <a class="navbar-brand" href="#" style="font-weight: bold;"><img style="width: 220px;" src="data/img/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link home active" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Contacts
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="https://www.facebook.com/adriannotforyou?mibextid=ZbWKwL">Facebook: Adrian Noces</a></li>
          <li><a class="dropdown-item" href="#">Email: noceskennethadrianoria@gmail.com</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link guide" href="#">Art guide for Parenting</a>
      </li>
    </ul>
  </div>
</div>
</nav>

<div class="content">
  ${homePage}
</div>
`;

const content = document.querySelector(".content")
const home = document.querySelector(".home")
const guide = document.querySelector(".guide")

guide.addEventListener("click", () => {
  content.innerHTML = GuideContent;
})

home.addEventListener("click", () => {
  content.innerHTML = homePage
})


