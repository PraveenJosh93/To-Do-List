const inputBox = document.getElementById("input_box");
const list_container = document.getElementById("list_container");

function addTask() {
  if(inputBox.value === "") {
    alert("You must write something");
  }

  else{ 
    let li = document.createElement("li")   // here its creating an li element
    li.innerHTML = inputBox.value;   //whatever text we will be adding in input box that will b added to li 
    list_container.appendChild(li);
    // the above li will be displayed under list_container
  } 
}