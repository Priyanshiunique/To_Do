


let btn = document.querySelector("#addTaskBtn");
let ul = document.querySelector("#taskList");
let inp = document.querySelector("#taskInput");

btn.addEventListener("click", function() {

  if (inp.value.trim() !== "") {

    // creating list along with its delete button on clicking the Add task button
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value = "";
  }

});

ul.addEventListener("click", function(event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
