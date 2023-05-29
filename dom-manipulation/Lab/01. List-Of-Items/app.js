function addItem() {
  let inputFieldElement = document.getElementById("newItemText");

  let li = document.createElement("li");

  li.textContent = inputFieldElement.value;

  if (inputFieldElement.value !== "") {
    document.getElementById("items").appendChild(li);
  }
  inputFieldElement.value = "";
}
