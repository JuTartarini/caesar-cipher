function BtnCodificar()
{

let msgASerCodificada = document.getElementById('txtMessageCodificar').value.trim();
document.getElementById('txtMessageCodificar').innerHTML = msgASerCodificada;
let offset = document.getElementById('desloCodificar').value;
document.getElementById('numMessageCodifica').innerHTML = offset;


//let caracter = msgASerCodificada.substring(3,4);
//let msgConvertidaArray = Array.from(msgASerCodificada);
//console.log(msgConvertidaArray);
//console.log(msgConvertidaArray[0]);




let tamanhoAlfabet = 90 - 65;
let msgCodificada;

let res = "";
for (let i = 0; i < msgASerCodificada.length; i++)
{
let posicaoLetraASCII = msgASerCodificada.charCodeAt(i);
//if (posicaoLetraASCII >= 65 && posicaoLetraASCII <= 90)
//{

 msgCodificada = ((posicaoLetraASCII - 65 + parseInt(offset)) % 26) + 65
 res += String.fromCharCode(msgCodificada);
//}


}

document.getElementById("lblMessageCodifica").innerHTML = res;


}












function BtnDesCodificar()
{

  let msgDescodificada = document.getElementById('txtMessageDesCodificar').value.trim();
  document.getElementById('txtMessageDesCodificar').innerHTML = msgDescodificada;
  let res = msgDescodificada.charCodeAt(msgDescodificada[1]);
  document.getElementById("lblMessageDesCodifica").innerHTML = res;


}
