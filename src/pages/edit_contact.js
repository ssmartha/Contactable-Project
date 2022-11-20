// import STORE from "./store.js";
// import {listContacts , editContacts} from "./services/contacts_service.js";
// // import Main from "./main.js";
// import ShowContact from "./show_contact.js"

// export default function EditContact(parentElement,id) {
//     const contact = STORE.contacts.find((contact) => contact.id == id);

//     return {
//         parent: document.querySelector(parentElement),
//         // selectedContact: null,
//         render: function () {
//             let html =
//             `<div class="create-contact section">


//                 <div class="create-contact-header">
//                     <h3>Edit contact</h2>
//                     <a href="logout">Logout</a>
//                 </div>
//                 <div class="create-contact-form conteiner">

//                   <form  class="flex flex-column gap-4 mb-4 js-update-contact-form js-edit-form js-contact-form edit-form">

//                       <div class="js-edit-inputs">
//                           ${input({
//                                 id: "name",
//                                 value: `${contact.name}`,
//                                 placeholder: "Name",
//                                 name: "name",
//                                 required: true,
//                                 })}
//                                 ${input({
//                                 id: "number",
//                                 value: `${contact.number}`,
//                                 placeholder: "Number",
//                                 name: "number",
//                                 required: true,
//                                 })}
//                                 ${input({
//                                 id: "email",
//                                 value: `${contact.email}`,
//                                 name: "email",
//                                 placeholder: "Email",
//                                 type: "email",
//                                 required: true,
//                             })}

//                               <select required name="relation" id="relation">
//                                   <option value="Family" ${contact.relation === "Family" ? "selected" : ""} >Family</option>
//                                   <option value="Friends" ${contact.relation === "Friends" ? "selected" : ""}>Friends</option>
//                                   <option value="Work" ${contact.relation === "Work" ? "selected" : ""}>Work</option>
//                                   <option value="Acquaintance" ${contact.relation === "Acquaintance" ? "selected" : ""}>Acquaintance</option>
//                               </select>
//                           </div>

//                       </div>


//                           <div class="flex conteiner edit-form create-contact-footer ">
//                               <button class="js-cancel cancel" data-id = ${contact.id} href="#">Cancel</button>
//                               <button class = "save" type="submit">Save</button>
//                           </div>

//                   </form>

//                </div>

//          </div>`;
//             this.parent.innerHTML = html;
//             this.editContactApi();
//             this.addCancelListener();
//         },

//         editContactApi: () => {
//             const form = document.querySelector(".js-edit-form")
//             form.addEventListener("submit", async (e) => {
//             e.preventDefault();
//             const { name, email, number,relation} = form;
//                   try{
//                   const data = await editContacts(id,name.value,email.value,number.value,relation.value)

//                    STORE.contacts = await listContacts();
//                    const main = Main(".js-content");
//                    main.render();
//                  }catch(error){
//                    alert(error.message);
//                  }

//             });
//         },

//         addCancelListener: function() {
//           const btnCancel = this.parent.querySelector('.js-cancel');
//           btnCancel.addEventListener('click', (e) => {
//             e.preventDefault();
//             const contactEditCancel = ShowContact('.js-content');
//             const contact = STORE.contacts.find((contact)=>contact.id==parseInt(btnCancel.dataset.id));
//             contactEditCancel.render(contact);
//           })
//         }

//     }
// }


// //   export function buttonFormEditContact(){
// //     const content = document.querySelector(".js-content");
// //     content.addEventListener("click", (e) =>{
// //     const target = content.querySelector(".js-btn-edit-contact");
// //       if(target == e.target){
// //         return content.innerHTML = renderFormEditContact();
// //       }
// //     })
// //   }
