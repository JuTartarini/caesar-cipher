function BtnCodificar() {

  let msgASerCodificada = document.getElementById('txtMessageCodificar').value.trim();
  document.getElementById('txtMessageCodificar').innerHTML = msgASerCodificada;
  let offset = document.getElementById('desloCodificar').value;

  let msgCodificada;
  let res = "";

  for (let i = 0; i < msgASerCodificada.length; i++)
  {
    let posicaoLetraASCII = msgASerCodificada.charCodeAt(i);
    //if (posicaoLetraASCII >= 65 && posicaoLetraASCII <= 90)
    //{
      msgCodificada = ((posicaoLetraASCII - 65 + parseInt(offset)) % 26) + 65
      res += String.fromCharCode(msgCodificada);
        console.log(posicaoLetraASCII);
    //}
  }

  document.getElementById("lblMessageCodifica").innerHTML = res;
}

function BtnDesCodificar()
{
  let msgASerDesCodificada = document.getElementById('txtMessageDesCodificar').value.trim();
  document.getElementById('txtMessageDesCodificar').innerHTML = msgASerDesCodificada;
  let offset = document.getElementById('desloDesCodificar').value;

  let msgDesCodificada;
  let res2 = " ";

  for (let i = 0; i < msgASerDesCodificada.length; i++)
  {
    let posicaoLetraASCII = msgASerDesCodificada.charCodeAt(i);

      msgDesCodificada = ((posicaoLetraASCII - 65 - parseInt(offset)) % 26) + 65
      res2 += String.fromCharCode(msgDesCodificada);
      console.log(posicaoLetraASCII);
      console.log(msgDesCodificada);

      console.log(res2);

  }



  document.getElementById("lblMessageDesCodifica").innerHTML = res2;

}
