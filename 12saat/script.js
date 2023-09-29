function delList() {
  var lists = document.getElementsByTagName("li");
  for (var i = 0; i <= lists.length - 1; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    lists[i].appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  for (var i = 0; i <= close.length - 1; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
      div.remove();
    };
  }
}

function addLists() {
  var list = document.querySelector("ul");
  list.addEventListener("click", function(ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    });
}

function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("text").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("added").appendChild(li);
  }
  document.getElementById("text").value = "";

  delList();
  addLists();
}
