const rodape = document.createElement ("footer");
rodape.setAttribute("id","rodape");
rodape.setAttribute("class", "rodape");

body.appendChild(rodape);
const footer = 
"<div class='container_imagens'>"+
"<img class='logomarca' src='./imgs/logomarca.png'/>"+
"<img class='logomarcaobirin' src='./imgs/logoobirin.png'/>"+
"</div>"+
"<p>© 2024 Obirin Àtinúdá.. All rights reserved.</p>";
rodape.innerHTML +=footer;
