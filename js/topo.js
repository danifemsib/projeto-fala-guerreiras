const head = document.head;
const body = document.body;

const estilo = "<link rel='stylesheet' type='text/css' />";
head.innerHTML += estilo;

const topo = document.createElement ("header");

topo.setAttribute("id", "topo");
topo.setAttribute("class", "topo");

body.prepend(topo);

const logo =
  "<figure id='logo' class='logo'>" +
  "<img src='./imgs/logomarca.png' title='Logomarca fala guerreira'/>" +
  "</figure>";
topo.innerHTML += logo;

const menu =
"<meni id='menu' class='menu'>"+
"<nav>"+
"<ul>"+
"<li><a href='./about.html'>SOBRE</a></li>"+
"<li><a href='./galeria.html'>GALERIA</a></li>"+
"<li><a href='./revistas.html'>REVISTAS</a></li>"+
"<li><a href='./documentario.html'>DOCUMENTÁRIO</a></li>"+
"</ul>"+
"</nav>"+
"</menu>";

topo.innerHTML += menu;


