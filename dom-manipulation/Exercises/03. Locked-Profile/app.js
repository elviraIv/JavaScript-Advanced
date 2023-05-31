function lockedProfile() {
  let btnElements = document.querySelectorAll("button");

  btnElements.forEach((btn) => {
    btn.addEventListener("click", onClick);
  });

  function onClick(e) {
    let profile = e.target.parentElement;
    let isUnlock = profile.querySelector('input[value="unlock"]').checked;
    

    if (isUnlock) {
      let hiddenDiv = Array.from(profile.querySelectorAll("div")).find(
        (element) => element.id.includes("HiddenFields")
      );
      if(e.target.textContent === 'Show more'){
        e.target.textContent ='Hide it';
        hiddenDiv.style.display = 'block'

      }else{
        e.target.textContent ='Show more';
        hiddenDiv.style.display = 'none'
      }
    }
  }
}
