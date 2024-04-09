let text = document.querySelector(".text");
let button = document.querySelector(".submit");
let p = document.querySelector(".para");
let main_div = document.querySelector(".main_div");

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

  const wrapper = document.createElement("div");
  wrapper.classList.add('wrapper');

  
  const spanElem = document.createElement("span");

  // new_text.classList.add("mr-20");
  // new_text.style.
  spanElem.innerText = text_value;
  wrapper.appendChild(spanElem);
  
  wrapper.classList.remove("hide");
  
  create_edit_button(text_value, wrapper);
  createRemoveButton(wrapper);
  text.value = "";
  main_div.appendChild(wrapper);
};

const createRemoveButton = (wrapper) => {
  const remove_button = document.createElement("button");
  remove_button.innerText = "Delete";
  remove_button.classList.add("btn", "btn-danger", "mx-2", "remove");
  wrapper.appendChild(remove_button);
  wrapper.classList.remove("hide");
  RemoveButtonEventListener(remove_button, wrapper);

};

const RemoveButtonEventListener = (remove_button, wrapper) => {
  remove_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    wrapper.remove();
  });
};

const create_edit_button = (text_value, wrapper) => {
  const edit_button = document.createElement("button");
  edit_button.innerText = "edit";
  edit_button.classList.add("btn", "btn-info", "edit");
  wrapper.appendChild(edit_button);
  editEventListener(edit_button, text_value, wrapper);
};



const editEventListener = (edit_button, text_value, wrapper) => {
  edit_button.addEventListener("click", (evt) => {
    evt.preventDefault();
    let input_field = document.createElement("input");
    input_field.value = text_value;
    create_update_button(input_field, wrapper.querySelector('span'));
    
    const remove_button = wrapper.querySelector(".remove");
    if (remove_button) {
      wrapper.removeChild(remove_button);
    }
    if (edit_button) {
      wrapper.removeChild(edit_button);
    }
  });
};


const create_update_button = (input_field, textParentElem) => {
  let update_button = document.createElement("button");
  update_button.innerText = "update";
  textParentElem.parentNode.prepend(update_button);
  update_button.classList.add("btn", "btn-success", "mx-2");
  textParentElem.parentNode.prepend(input_field);
  textParentElem.parentNode.removeChild(textParentElem);
  update_button_event_Listener(update_button, input_field);
};

update_button_event_Listener = (update_button, input_field) => {
  update_button.addEventListener("click", (evt) => {
    evt.preventDefault();

    const parentWrapper = update_button.parentNode;
    
    update_button.remove();
    
    const updated_text = input_field.value;
    
    input_field.remove();
    
    const spanElem = document.createElement("span");
    spanElem.innerText = updated_text;

    parentWrapper.appendChild(spanElem);
    create_edit_button(updated_text, spanElem.closest('.wrapper'));
    createRemoveButton(spanElem.closest('.wrapper'));
  });
};