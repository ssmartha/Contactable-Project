import STORE from "./store.js";
import {listContacts,editContacts} from "./services/contacts_services.js";
import Main from "./main.js";
import ShowContact from "./show_contact.js"

export default function EditContact(parentElement,id) {
    const contact = STORE.contacts.find((contact)=>contact.id==id);
    return {
        parent: document.querySelector(parentElement),
        // selectedContact: null,
        render: function () {
            let html = 
            `<div class="create-contact">
              
            
                <div class="create-contact-header">
                    <h3>Edit contact</h2>
                    <a href="logout">Logout</a>
                </div>
                <div class="create-contact-form">

                  <form  class="js-edit-form js-contact-form edit-form">
                  
                      <div class="js-edit-inputs">
                            <div>
                                <input type="text" name="name" placeholder="Name" value="${contact.name}" required>
                            </div>
                          <div>
                                <input type="number" name="number" placeholder="Number" value=${contact.number} required>
                          </div>
                          <div>
                                <input type="email" name="email" placeholder="Email" value=${contact.email} required>
                          </div>
                          <div>
                              <select required name="relation">
                                  <option value="Family">Family</option>
                                  <option value="Friends">Friends</option>
                                  <option value="Work">Work</option>
                                  <option value="Acquaintance">Acquaintance</option>
                              </select>
                          </div>
                          
                      </div>
                        
                          
                          <div class=" edit-form create-contact-footer ">
                              <button class="js-cancel cancel" data-id = ${contact.id} href="#">Cancel</button>
                              <button class = "save" href="#" type="submit">Save</button>
                          </div>
                       
                  </form>

               </div>
           
         </div>`;
            this.parent.innerHTML = html;
            this.editContactApi();
            this.addCancelListener();
        },

        editContactApi: () => {
            const form = document.querySelector(".js-edit-form")
            form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const { name, email, number,relation} = form;
                  try{
                  const data = await editContacts(id,name.value,email.value,number.value,relation.value)

                   STORE.contacts = await listContacts();
                   const main = Main(".js-content");
                   main.render();
                 }catch(error){
                   alert(error.message);
                 }
            
            });
        },

        addCancelListener: function() {
          const btnCancel = this.parent.querySelector('.js-cancel');
          btnCancel.addEventListener('click', (e) => {
            e.preventDefault();
            const contactEditCancel = ShowContact('.js-content');
            const contact = STORE.contacts.find((contact)=>contact.id==parseInt(btnCancel.dataset.id));
            contactEditCancel.render(contact);
          })
        }
        
    }
}


//   export function buttonFormEditContact(){
//     const content = document.querySelector(".js-content");
//     content.addEventListener("click", (e) =>{
//     const target = content.querySelector(".js-btn-edit-contact");
//       if(target == e.target){
//         return content.innerHTML = renderFormEditContact();
//       }
//     })
//   }
