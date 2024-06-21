function popupClose() {
    let popupOpen = document.getElementById("popup");
    let popupClose = document.getElementById("popup-close");
    popupOpen.style.display = "none";
  }

  setTimeout(function () {
    let popupOpen = document.getElementById("popup");
    popupOpen.style.display = "block";
  }, 3000);