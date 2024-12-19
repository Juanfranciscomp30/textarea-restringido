function actualizarContador(){
    let texto=document.getElementById("textarea");
    let maxCaracter = textarea.getAttribute("maxlength");
    let contador=document.getElementById("restantes");
    let longitudActual=texto.value.length;
    contador.innerHTML=maxCaracter-longitudActual;

    if (contador.innerHTML==0) {
        texto.style.color = "#604848"; 
    } else {
        texto.style.color = "black"; 
    }
}
