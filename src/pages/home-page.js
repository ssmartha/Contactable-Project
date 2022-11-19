import DOMHandler from "../../dom-handler.js";
import AddContactPage from "./add-contact-page.js";

function renderIconAdd(){
    return `
    <div class= "add">
        <i class="ri-add-fill"></i>
    </div>
    `
}

function listenContact(){
    const add = document.querySelector(".add")
    
    add.addEventListener("click", (event) => {
        event.preventDefault();
        DOMHandler.load(AddContactPage)
    })
    
}

const HomePage = {
    toString() {
        return renderIconAdd()
    },
    addListeners() {
        listenContact()
    }
}



export default HomePage