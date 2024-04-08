let text = document.querySelector(".text");
let list = document.querySelector(".list")
let button = document.querySelector(".submit");
let p = document.querySelector(".para");

button.addEventListener("click", (evt) => {
  evt.preventDefault();
  let text_value = text.value;
  let length = text_value.length;
  if (length === 0) {
    // console.error("empty");
    p.innerText = "the text field is empty";
    p.classList.remove("hide");
  } else {
    p.classList.add("hide");
    showList(text_value);
  }
});

const showList = (text_value) => {
  const new_text = document.createElement("li");
  new_text.innerText = text_value;
  list.appendChild(new_text);
  list.classList.remove("hide");
  const remove_button = document.createElement("button");
  remove_button.innerText = "delete";
  list.appendChild(remove_button);
  list.classList.remove("hide");
  const edit_button = document.createElement("button");
  edit_button.innerText = "edit";
  edit_button.classList.add("edit");
  list.appendChild(edit_button);
  text.value = "";
  remove_button.classList.add("remove");
  remove_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    list.removeChild(new_text);
    list.removeChild(remove_button);
    list.removeChild(edit_button);
  });
  edit_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    list.removeChild(remove_button);
    list.removeChild(edit_button);
    let input_field = document.createElement("input");
    input_field.value = text_value;
    let update_button = document.createElement("button");
    update_button.innerText = "update";
    list.appendChild(update_button);
    update_button.classList.add("update");
    list.appendChild(input_field);
    list.removeChild(new_text);
    update_button.addEventListener("click", (evt) => {
      evt.preventDefault();
      list.removeChild(update_button);
      let updated_text = input_field.value;
      list.removeChild(input_field);
      let updated_text_element = document.createElement("li");
      updated_text_element.innerText = updated_text;
      list.appendChild(updated_text_element);
      // addButtons();
    });
  });
};
// const addButtons = () =>{
//   const remove_button = document.createElement("button");
//   remove_button.innerText = "delete";
//   list.appendChild(remove_button);
//   list.classList.remove("hide");
//   remove_button.classList.add("remove");
//   const edit_button = document.createElement("button");
//   edit_button.innerText = "edit";
//   edit_button.classList.add("edit");
//   list.appendChild(edit_button);
// };


