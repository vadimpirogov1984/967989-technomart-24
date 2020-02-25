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
        // console.log(1);
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
        // console.log(1);
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

let link = document.querySelector(".login-link");
let popup = document.querySelector(".modal-login");
var close = popup.querySelector(".login-form-img");
// var login = popup.querySelector("[name=login]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
