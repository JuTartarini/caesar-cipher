var tamAlfabt = 26;
var array = [];

function GetAlphabet(posicaoInicial, posicaoFinal) {
  for (i = posicaoInicial; i < posicaoFinal; i++) {
    array.push(String.fromCharCode(i));

  }

}
GetAlphabet(65, 91);
GetAlphabet(97, 123);



var msgASerCodificada = "";
var offsetCod = 0;

function functionBtn() {
  msgASerCodificada = document.getElementById('txtMessageCodificar').value.trim();
  document.getElementById('txtMessageCodificar').innerHTML = msgASerCodificada;
  offsetCod = parseInt(document.getElementById('desloCodificar').value);
   directionOffset();
  ChoiceCipher();
}


function BtnCodificar() {
  functionBtn()
  let resultadoCodificar = Code(msgASerCodificada, offsetCod);
  document.getElementById('lblMessage').innerHTML = resultadoCodificar;
  document.getElementById('mensage').value = resultadoCodificar;
}




function mod(offset, tamAlfabt) {
  if (offset < 0)
    offset = tamAlfabt - (Math.abs(offset) % tamAlfabt);
  return offset % tamAlfabt;
}




function Code(string, offset) {
  var result = "";

  for (let value of string) {
    let posicaoLetraASCII = array.indexOf(value);

    if (posicaoLetraASCII >= 0 && posicaoLetraASCII <= 25) {

      posicaoLetraASCII = mod(posicaoLetraASCII - 0 + offset, tamAlfabt) + 0;
      result += array[posicaoLetraASCII];

    } else if (posicaoLetraASCII >= 26 && posicaoLetraASCII <= 52) {
      posicaoLetraASCII = mod(posicaoLetraASCII - 26 + offset, tamAlfabt) + 26;
      result += array[posicaoLetraASCII];

    } else if (posicaoLetraASCII == -1) {
      result += value;
    }


  }
  return result;
  console.log(result);
  document.getElementById('mensage').innerHTML = result;
}


function myFunction() {
  var checkBox = document.getElementById("esquerda");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }

}

function directionOffset() {
  let negativo = document.getElementById('esquerda').checked;


  if (negativo === false)
  {
    offsetCod = offsetCod * -1
  }
console.log(negativo);
console.log(offsetCod);

}

function ChoiceCipher() {
  let positivo =document.getElementById('Cripito').checked;
    let negativo = document.getElementById('esquerda').checked;
if (positivo === false)
{
  offsetCod = offsetCod *-1
}

}




 //offsetNegativo();

/* Meme */

var memes = [
	'Dude, you smashed my turtle saying "I\'M MARIO BROS!"',
	'Dude, you grabed seven oranges and yelled "I GOT THE DRAGON BALLS!"',
	'Dude, you threw my hamster across the room and said "PIKACHU I CHOOSE YOU!"',
	'Dude, you congratulated a potato for getting a part in Toy Story',
	'Dude, you were hugging an old man with a beard screaming "DUMBLEDORE YOU\'RE ALIVE!"',
	'Dude, you were cutting all my pinapples yelling "SPONGEBOB! I KNOW YOU\'RE THERE!"',
];

var random = document.querySelector('#random');

random.innerHTML = memes[Math.floor(Math.random() * memes.length)];

/* Time */


/* Message */

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');

form.addEventListener('submit', newMessage);

function newMessage(e) {
	var input = e.target.input;

	if (input.value) {
		var message = buildMessage(input.value);
		conversation.appendChild(message);
		animateMessage(message);
	}

	input.value = '';
	conversation.scrollTop = conversation.scrollHeight;

	e.preventDefault();
}

function buildMessage(text) {
	var element = document.createElement('div');

	element.classList.add('message', 'sent');

	element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + moment().format('h:mm A') + '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}

function animateMessage(message) {
	setTimeout(function() {
		var tick = message.querySelector('.tick');
		tick.classList.remove('tick-animation');
	}, 500);
}
