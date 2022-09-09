import "./styles.css";

var nappi = document.getElementById("my-button");

nappi.addEventListener(
  "click",
  function () {
    console.log("Hello World!");
    document.getElementById("otsikko").innerHTML = "My notebook!";
  },
  false
);

var lisaysNappi = document.getElementById("add-data");

lisaysNappi.addEventListener(
  "click",
  function () {
    var ul = document.getElementById("lista");
    var li = document.createElement("alkio");

    var teksti = document.getElementById("kentta").nodeValue;
    var tekstiNode = document.createTextNode(teksti);
    var vaihto = document.createElement("br");

    li.appendChild(tekstiNode);
    li.appendChild(vaihto);
    ul.appendChild(li);
  },
  false
);
