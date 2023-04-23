//Toggles the info description for the
//about page blocks when clicking the
//arrow button on each.
function aboutButtonHandler(infoBoxEl) {
  const infoBoxesEl =
    document.getElementById(infoBoxEl);
  infoBoxesEl.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "ION-ICON") {
        const infoBarEl =
          event.target.closest(".info-bar");
        const infoDescEl =
          infoBarEl.nextElementSibling;
        if (
          !infoDescEl.classList.contains("hidden")
        ) {
          //Hide description element
          infoBarEl.style.borderRadius = "1rem";
          infoDescEl.style.maxHeight = "0px";
        } else {
          //Show description element
          infoBarEl.style.borderRadius =
            "1rem 1rem 0 0";
          infoDescEl.style.maxHeight =
            infoDescEl.scrollHeight + "px";
        }
        infoDescEl.classList.toggle("hidden");

        //Rotate arrow button
        const infoBtn =
          infoBarEl.firstElementChild;
        if (
          infoBtn.style.transform.includes(
            "rotate"
          )
        ) {
          var rotateArr =
            infoBtn.style.transform.split("(");
          var rotateArr2 =
            rotateArr[1].split("d");
          var rotateAmt = +rotateArr2[0] + 180;
          infoBtn.style.transform =
            "rotate(" + rotateAmt + "deg)";
        } else {
          infoBtn.style.transform =
            "rotate(180deg)";
        }
      }
    }
  );
}

aboutButtonHandler("info-boxes-pers");
aboutButtonHandler("info-boxes-prof");
