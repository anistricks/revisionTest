// When using Bootstrap to style components, the CSS is imported in index.js
// However, the JS has still to be loaded for each Bootstrap's component that needs it.
// Here, because our JS component 'Navbar' has the same name as Navbar Bootstrap's component
// we change the name of the imported Bootstrap's 'Navbar' component
import { Navbar as BootstrapNavbar} from "bootstrap";

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector("#navbarWrapper");
  let navbar = `  <div class="row mx-0">
  <div class="col-md-2 col-lg-4"></div>
  <div class="col-md-8 col-lg-4 text-center mt-2">
  <button type="button" class="btn btn-dark  mt-2 mb-3" data-uri="/Dactylographier">Dactylographier</button>
  <button type="button" class="btn btn-dark  mt-2 mb-3" data-uri="/creerTexte">Créer un texte</button>
  </div>
  </div>`;
 navbarWrapper.innerHTML=navbar;
};

export default Navbar;
