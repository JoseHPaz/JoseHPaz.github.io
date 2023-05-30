var textArea = document.querySelector(".textArea");
var mensaje = document.querySelector(".mensaje");

var vocales = ["a", "e", "i", "o", "u", ","];
var claves = ["ai", "enter", "imes", "ober", "ufat", "coma"];

/* se crean los botones correspondientes*/

function btnEnc()
{
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";

}

function btnDesenc()
{
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";   
}

document.querySelectorAll(".copyLink").forEach(copyLinkContainer => 
{ 
  const inputField = copyLinkContainer.querySelector(".mensaje");
  const copyButton = copyLinkContainer.querySelector(".copiar");
  
  inputField.addEventListener("focus", () => inputField.select());
  copyButton.addEventListener("click", () => {
    const textCopy = inputField.value;

    inputField.select();
    navigator.clipboard.writeText(textCopy);
  })
})

/* se crean las funciones correspondientes */

function encriptar(x) 
{
    var text = x;
    text = text.toLowerCase();
    var palabra = Array.from(text);
    var i = x.length;
    var j = vocales.length;
    var newArr = palabra;
  
    for (var contador = 0; contador < i; contador++) 
    {
      for (var cont = 0; cont < j; cont++) 
      {
        if (newArr[contador] == vocales[cont]) 
        {
          newArr[contador] = claves[cont];
        }
      }
    }
    encriptado = newArr.toString();
    encriptado= encriptado.replace(/,/g, "");
    encriptado= encriptado.replace(/coma/g, "," );
    
    return encriptado;
}

function desencriptar(x) 
{
  var i = vocales.length;
  var desencriptado = x;
  for (var contador = 0; contador < i; contador++) 
  {
    desencriptado = desencriptado.replaceAll(claves[contador], vocales[contador]);
  }

  return(desencriptado);
}

