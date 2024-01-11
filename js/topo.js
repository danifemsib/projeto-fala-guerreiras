const head = document.head;
const body = document.body;

const estilo =
  "<link rel='stylesheet' type='text/css href='./styles/styles.css'/>";
head.innerHTML += estilo;

const topo = document.createElement("header");

topo.setAttribute("id", "topo");
topo.setAttribute("class", "topo");

body.prepend(topo);

const logo =
  "<figure id='logo' class='logo'>" +
  "<img src='./imgs/logomarca.png' title='Logomarca fala guerreira'/>" +
  "</figure>";
topo.innerHTML += logo;

const menu =
  "<menu id='menu' class='menu'>" +
  "<nav>" +
  "<ul>" +
  "<li><a href='./index.html'>Home</a></li>" +
  "<li><a href='./about.html'>Sobre</a></li>" +
  "<li><a href='./galeria.html'>Galeria</a></li>" +
  "<li><a href='./revistas.html'>Revistas</a></li>" +
  "<li><a href='./documentario.html'>Documentario</a></li>" +
  "</ul>" +
  "</nav>" +
  "</menu>";

topo.innerHTML += menu;
