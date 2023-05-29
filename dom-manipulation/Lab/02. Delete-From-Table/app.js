function deleteByEmail() {
  let input = document.querySelector('input[name="email"]').value;

  let emailElements = document.querySelectorAll("tr td:nth-of-type(2)");
  let resultElement = document.getElementById("result");
  let isDeleted = false;

  for (const tdEmail of emailElements) {
    if (tdEmail.textContent === input) {
      //delete the parent element
      tdEmail.parentNode.remove();
      isDeleted = true;

      if (isDeleted) {
        resultElement.textContent = "Deleted";
      } else {
        resultElement.textContent = "Not Found";
      }
    }
  }
}
