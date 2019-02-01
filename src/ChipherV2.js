var tamAlfabt = 26;
var array = [];

function Maiuscula() {
  for (i = 65; i < 91; i++) {
    array.push(String.fromCharCode(i));

  }
}
Maiuscula()


function Minuscula() {
  for (i = 97; i < 123; i++) {
    array.push(String.fromCharCode(i));
  }
}

Minuscula()
//console.log(array);

function BtnCodificar() {

  let msgASerCodificada = document.getElementById('txtMessageCodificar').value.trim();
  document.getElementById('txtMessageCodificar').innerHTML = msgASerCodificada;
  let offsetCod = parseInt(document.getElementById('desloCodificar').value);

  let resultadoCodificar = Code(msgASerCodificada, offsetCod);

  document.getElementById('lblMessageCodifica').value = resultadoCodificar;
}

function BtnDesCodificar() {
  let msgASerDesCodificada = document.getElementById('txtMessageDesCodificar').value.trim();
  document.getElementById('txtMessageDesCodificar').innerHTML = msgASerDesCodificada;
  let offset = document.getElementById('desloDesCodificar').value;
  let resultadoDesCodificar = key(msgASerDesCodificada, offset);
  document.getElementById('lblMessageDesCodifica').value = resultadoDesCodificar;
}


function keyMod(posicao,offset, tamAlfabt, minAlfabet) {
  ////console.log("posição "+posicao);

  //if (posicao < minAlfabet)
    //posicao = tamAlfabt - (Math.abs(posicao) % tamAlfabt);

  ////console.log("posicao " + posicao);
  ////console.log("tamAlfabt " + tamAlfabt);
  ////console.log("(Math.abs(posicao) % tamAlfabt) " + (Math.abs(posicao) % tamAlfabt));
  ////console.log("minAlfabet " + minAlfabet);
  ////console.log("posicao % tamAlfabt " + (posicao % tamAlfabt));
  ////console.log(minAlfabet);
  ////console.log("posição "+posicao);
  do
  {
    posicao = ( posicao + offset ) % 26;
  } while (Math.abs(posicao) % 26 > 25);

//console.log(posicao);

if ( posicao +offset <  minAlfabet)
  {return (tamAlfabt + posicao) }
  else {return (minAlfabet + posicao); }
  //return (posicao % tamAlfabt) ;

}




function Code(string, offset) {
  var result = " ";

  //console.log(Math.abs(offset));
  do
  {
    offset = offset % 26;
  } while (Math.abs(offset) % 26 > 25);

  //console.log("offset " + offset);

  for (let value of string) {
    let posicaoLetraASCII = array.indexOf(value);
    console.log();
    //console.log(posicaoLetraASCII);
    if (posicaoLetraASCII >= 0 && posicaoLetraASCII <= 25) {
      //posicaoLetraASCII = keyMod(/*posicaoLetraASCII*/ posicaoLetraASCII,offset, 0, 26);
      posicaoLetraASCII = mod(posicaoLetraASCII - 0 + offset, tamAlfabt) + 0;
result += array[posicaoLetraASCII];
      //posicaoLetraASCII = keyMod(posicaoLetraASCII - 0 + offset, tamAlfabt, 0);
      ////console.log(posicaoLetraASCII);
    } else if (posicaoLetraASCII >= 26 && posicaoLetraASCII <= 52) {
      posicaoLetraASCII = mod(posicaoLetraASCII - 26 + offset, tamAlfabt) + 26;
      result += array[posicaoLetraASCII];
      //posicaoLetraASCII = keyMod(/*posicaoLetraASCII*/ posicaoLetraASCII ,offset, 52, 26);
    }else if (posicaoLetraASCII == -1)
{result += string[i];} else {
    }
    ////console.log(array[posicaoLetraASCII]);
    ////console.log(keyMod);

  }
  //return result;
  console.log(result);

}


function mod(n, p){
    if ( n < 0 )
        n = p - (Math.abs(n) % p);
        //console.log( p );
  //console.log( n );
    //console.log( n % p);
    return n % p;
}




var tamAlfabt = 26;
var array = [];

function Maiuscula() {
  for (i = 65; i < 91; i++) {
    array.push(String.fromCharCode(i));

  }
}
Maiuscula()


function Minuscula() {
  for (i = 97; i < 123; i++) {
    array.push(String.fromCharCode(i));
  }
}

Minuscula()
//console.log(array);

function BtnCodificar() {

  let msgASerCodificada = document.getElementById('txtMessageCodificar').value.trim();
  document.getElementById('txtMessageCodificar').innerHTML = msgASerCodificada;
  let offsetCod = parseInt(document.getElementById('desloCodificar').value);

  let resultadoCodificar = Code(msgASerCodificada, offsetCod);

  document.getElementById('lblMessageCodifica').value = resultadoCodificar;
}

function BtnDesCodificar() {
  let msgASerDesCodificada = document.getElementById('txtMessageDesCodificar').value.trim();
  document.getElementById('txtMessageDesCodificar').innerHTML = msgASerDesCodificada;
  let offset = document.getElementById('desloDesCodificar').value;
  let resultadoDesCodificar = key(msgASerDesCodificada, offset);
  document.getElementById('lblMessageDesCodifica').value = resultadoDesCodificar;
}


function keyMod(posicao,offset, tamAlfabt, minAlfabet) {
  ////console.log("posição "+posicao);

  //if (posicao < minAlfabet)
    //posicao = tamAlfabt - (Math.abs(posicao) % tamAlfabt);

  ////console.log("posicao " + posicao);
  ////console.log("tamAlfabt " + tamAlfabt);
  ////console.log("(Math.abs(posicao) % tamAlfabt) " + (Math.abs(posicao) % tamAlfabt));
  ////console.log("minAlfabet " + minAlfabet);
  ////console.log("posicao % tamAlfabt " + (posicao % tamAlfabt));
  ////console.log(minAlfabet);
  ////console.log("posição "+posicao);
  do
  {
    posicao = ( posicao + offset ) % 26;
  } while (Math.abs(posicao) % 26 > 25);

//console.log(posicao);

if ( posicao +offset <  minAlfabet)
  {return (tamAlfabt + posicao) }
  else {return (minAlfabet + posicao); }
  //return (posicao % tamAlfabt) ;

}




function Code(string, offset) {
  var result = " ";

  //console.log(Math.abs(offset));
  do
  {
    offset = offset % 26;
  } while (Math.abs(offset) % 26 > 25);

  //console.log("offset " + offset);

  for (let i = 0; i < string.length; i++) {
    let posicaoLetraASCII = array.indexOf(string[i]);
    console.log();
    //console.log(posicaoLetraASCII);
    if (posicaoLetraASCII >= 0 && posicaoLetraASCII <= 25) {
      //posicaoLetraASCII = keyMod(/*posicaoLetraASCII*/ posicaoLetraASCII,offset, 0, 26);
      posicaoLetraASCII = mod(posicaoLetraASCII - 0 + offset, tamAlfabt) + 0;
result += array[posicaoLetraASCII];
      //posicaoLetraASCII = keyMod(posicaoLetraASCII - 0 + offset, tamAlfabt, 0);
      ////console.log(posicaoLetraASCII);
    } else if (posicaoLetraASCII >= 26 && posicaoLetraASCII <= 52) {
      posicaoLetraASCII = mod(posicaoLetraASCII - 26 + offset, tamAlfabt) + 26;
      result += array[posicaoLetraASCII];
      //posicaoLetraASCII = keyMod(/*posicaoLetraASCII*/ posicaoLetraASCII ,offset, 52, 26);
    }else if (posicaoLetraASCII == -1)
{result += string[i];} else {
    }
    ////console.log(array[posicaoLetraASCII]);
    ////console.log(keyMod);

  }
  //return result;
  console.log(result);

}


function mod(n, p){
    if ( n < 0 )
        n = p - (Math.abs(n) % p);
        //console.log( p );
  //console.log( n );
    //console.log( n % p);
    return n % p;
}
