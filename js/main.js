$(document).ready(function() {
  $(function() {
    $(".multiple-review").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow:
        '<img src="../img/icon-left.png" class="slick-arrow slick-prev">',
      nextArrow:
        '<img src="../img/icon-right.png" class="slick-arrow slick-next">'
    });
  });

  $(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 40000,
      values: [0, 30000],
      slide: function(event, ui) {
        $("#amount").val(ui.values[0]);
        $("#amount_1").val(ui.values[1]);
      }
    });
    $("#amount").val($("#slider-range").slider("values", 0));
    $("#amount_1").val($("#slider-range").slider("values", 1));
  });
});

// Всплывающее окно "Войти"

let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
let close = popup.querySelector(".login-form-img");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

// // Всплывающее окно карты
// let write = document.querySelector(".mybtn");
// let popupWrite = document.querySelector(".overlay");
// let closeWrite = popupWrite.querySelector(".close-popup");

// write.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupWrite.classList.add("modal-show");
// });

// closeWrite.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popupWrite.classList.remove("modal-show");
// });

// // Всплывающая форма
// let links = document.querySelector(".write-link");
// let popups = document.querySelector(".modal__write");
// let closes = popup.querySelector(".login-form-img");
// // let login = popup.querySelector("[name=login]");

// links.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popups.classList.add("modal-show");
//   // login.focus();
// });

// closes.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popups.classList.remove("modal-show");
// });

// Сортировка по возрастанию/ убыванию

document.querySelector("#price").onclick = function() {
  document.querySelector("#sort-up").onclick = function() {
    sortList("data-price");
  };
  document.querySelector("#sort-down").onclick = function() {
    sortListDesc("data-price");
  };
};

document.querySelector("#type").onclick = function() {
  document.querySelector("#sort-up").onclick = function() {
    sortList("data-type");
  };
  document.querySelector("#sort-down").onclick = function() {
    sortListDesc("data-type");
  };
};

document.querySelector("#characteristic").onclick = function() {
  document.querySelector("#sort-up").onclick = function() {
    sortList("data-char");
  };
  document.querySelector("#sort-down").onclick = function() {
    sortListDesc("data-char");
  };
};

function sortList(sortType) {
  let items = document.querySelector(".content__cards");
  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (
        +items.children[i].getAttribute(sortType) >
        +items.children[j].getAttribute(sortType)
      ) {
        let replacedNode = items.replaceChild(
          items.children[j],
          items.children[i]
        );
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function sortListDesc(sortType) {
  let items = document.querySelector(".content__cards");
  for (let i = 0; i < items.children.length - 1; i++) {
    for (let j = i; j < items.children.length; j++) {
      if (
        +items.children[i].getAttribute(sortType) <
        +items.children[j].getAttribute(sortType)
      ) {
        let replacedNode = items.replaceChild(
          items.children[j],
          items.children[i]
        );
        insertAfter(replacedNode, items.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
