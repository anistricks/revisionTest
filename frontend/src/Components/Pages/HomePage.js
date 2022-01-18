import image from "../../Domain/16.jpg";
import Dactylographier from "../Pages/Dactylographier.js";

const toRender = () => {
  let page = `  <div class="pb-3">
  <a href="Dactylographier" id="bottle" > <img class="img-thumbnail w-50" src="${image}" alt="Dactylographier" /></a>
</div>
  `;


  
 return page;
}



const HomePage = async () => {
  const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = toRender();

 
   
}




export default HomePage;
