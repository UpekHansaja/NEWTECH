function changeView() {
  // alert("cv");

  var signUp = document.getElementById("signUpBox");
  var signIn = document.getElementById("signInBox");

  signUp.classList.toggle("d-none");
  signIn.classList.toggle("d-none");
}

let mouseCursor = document.querySelector(".cursor");
let mouseCursorIn = document.querySelector(".cursorIn");
let navLinks = document.querySelectorAll(".nav-links");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  // console.log(e);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";

  mouseCursorIn.style.top = e.pageY + "px";
  mouseCursorIn.style.left = e.pageX + "px";
}

navLinks.forEach(link => {
  link.addEventListener("mouseleave", () => {
    mouseCursorIn.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursorIn.classList.add("link-grow");
  });
});


var loader = document.getElementById("preLoader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});


// single product view 

Fancybox.bind('[data-fancybox="gallery"]', {
  Toolbar: {
    display: [
      {
        id: "counter",
        position: "center",
      },
      "zoom",
      "slideshow",
      "fullscreen",
      "thumbs",
      "close",
    ],
  },

  on: {
    initLayout: (fancybox) => {
      // Create elements
      // ===

      // Create left column
      const $leftCol = document.createElement("div");
      $leftCol.classList.add("fancybox__leftCol");

      while (fancybox.$container.firstChild) {
        $leftCol.appendChild(fancybox.$container.firstChild);
      }

      // Create right column
      const $rightCol = document.createElement("div");
      $rightCol.classList.add("fancybox__rightCol");

      $rightCol.innerHTML =
        '<h4 class="mt-2 mb-3 respVerticalTitle">MSI Aegis RS10 SD-014US</h4>';

      // Create info-box
      const $info = document.createElement("div");
      $rightCol.appendChild($info);
      fancybox.$info = $info;

      // Add elements to DOM
      fancybox.$container.appendChild(fancybox.$backdrop);

      fancybox.$container.appendChild($leftCol);
      fancybox.$container.appendChild($rightCol);

      fancybox.$leftCol = $leftCol;
      fancybox.$rightCol = $rightCol;
    },
    "Carousel.ready Carousel.change": (fancybox, carousel, slideIndex) => {
      // Update info-box
      // ===

      // Get index of the current gallery item
      slideIndex =
        slideIndex === undefined ? carousel.options.initialPage : slideIndex;

      // Get link related to current item
      const $trigger = fancybox.items[slideIndex].$trigger;

      // Get data from `data-info` attribute
      const data = $trigger.dataset.info || "";

      // Update info
      fancybox.$info.innerHTML = `<p>${data}</p>`;
    },
  },
});


function changePrevColor() {
  // alert ("changePrevColor");
  var black = document.getElementById("black");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  var white = document.getElementById("white");
  var blue = document.getElementById("blue");
  var green = document.getElementById("green");

  if (black.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "black";

  } else if (red.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "#D83146";

  } else if (yellow.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "#FDBF2D";

  } else if (white.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "#FFFFFF";

  } else if (blue.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "#137FFB";

  } else if (green.checked) {

    var colorPrev = document.getElementById("colorPrev");
    colorPrev.style.backgroundColor = "#35A74C";

  }

}

function qtyAddItem() {

  var add = document.getElementById("qtyInput");
  var newQty = parseInt(add.value) + 1;
  document.getElementById("qtyInput").value = newQty;

}

function qtySubItem() {

  var sub = document.getElementById("qtyInput");
  var newQty = parseInt(sub.value) - 1;
  document.getElementById("qtyInput").value = newQty;

  if (newQty <= 1) {
    document.getElementById("qtyInput").value = 1;
  }
}


function qtyAddItem2() {

  var add = document.getElementById("qtyInput2");
  var newQty = parseInt(add.value) + 1;
  document.getElementById("qtyInput2").value = newQty;

}

function qtySubItem2() {

  var sub = document.getElementById("qtyInput2");
  var newQty = parseInt(sub.value) - 1;
  document.getElementById("qtyInput2").value = newQty;

  if (newQty <= 1) {
    document.getElementById("qtyInput2").value = 1;
  }
}


function qtyAddItem3() {

  var add = document.getElementById("qtyInput3");
  var newQty = parseInt(add.value) + 1;
  document.getElementById("qtyInput3").value = newQty;

}

function qtySubItem3() {

  var sub = document.getElementById("qtyInput3");
  var newQty = parseInt(sub.value) - 1;
  document.getElementById("qtyInput3").value = newQty;

  if (newQty <= 1) {
    document.getElementById("qtyInput3").value = 1;
  }
}


function giftSelect() {

  var count = 1;
  var gift = document.getElementById("giftSelect");

  if (count == 1) {
    gift.style.visibility = "hidden";
    document.getElementById("tickHere").innerHTML = '<i class="fs-3 bi bi-check2-all"></i>';
    count = 1;
  }
}

function giftSelect2() {
  var count = 0;
  var gift = document.getElementById("giftSelect");

  if (count == 0) {
    gift.style.visibility = "visible";
    document.getElementById("tickHere").innerHTML = ' ';
    count = 0;
  }
}

function signIn() {
  // Admin SignIn function verification here..
  // after verification (backend)
  window.location = "adminPanel.html";
}