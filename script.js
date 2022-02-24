var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

var lis = document.querySelectorAll("li");

var del = document.querySelectorAll(".delete");

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  var delet = document.createElement("button");

  div.appendChild(li);
  div.appendChild(delet);
  ul.appendChild(div);

  li.appendChild(document.createTextNode(input.value));
  delet.appendChild(document.createTextNode("delete"));
  delet.classList.add("delete");
  div.classList.add("wrapper");

  toggleEventListener(li);
  deleteEventListener(delet);

  //   div.appendChild();

  input.value = "";
}

function addListAfterClick() {
  if (input.value) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

function addListAfterkeydown(event) {
  if (input.value && event.code === "Enter") {
    createListElement();
  }
}

input.addEventListener("keydown", addListAfterkeydown);

function toggleEventListener(element) {
  element.addEventListener("click", function () {
    element.classList.toggle("done");
  });
}

lis.forEach(toggleEventListener);

function deleteEventListener(element) {
  element.addEventListener("click", function () {
    ul.removeChild(element.parentElement);
  });
}

del.forEach(deleteEventListener);
