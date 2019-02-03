let resultadoCode = CipherCode("ABACATE",7);

if (resultadoCode === "HIHJHAL") {
    console.log( "Teste 1  OK!");
} else {
    console.log(" Teste 1 ERRRO!");
}

resultadoCode = CipherCode("VaMos FAzer uma feStA Na PiSiNa",8);
if (resultadoCode === "DiUwa NIhmz cui nmAbI Vi XqAqVi") {
  console.log( "Teste 2  OK!");
} else {
  console.log(" Teste 2 ERRRO!");
}

resultadoCode = CipherCode("Olá mamãe!!!",1200000);
if (resultadoCode === "Khá iwiãa!!!") {
  console.log( "Teste 3  OK!");
} else {
  console.log(" Teste 3 ERRRO!");
}

resultadoCode = CipherCode("o coração da zebra não é listrado kkk",2755300);
if (resultadoCode === "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm") {
  console.log( "Teste 4  OK!");
} else {
  console.log(" Teste 4 ERRRO!");
}


resultadoCode  = CipherCode("QÉZZPJH UÃV JBYAL HIHJHAL RRR",-7);
if (resultadoCode === "JÉSSICA NÃO CURTE ABACATE KKK") {
  console.log( "Teste 5  OK!");
} else {
  console.log(" Teste 5 ERRRO!");
}


resultadoCode = CipherCode("itwpi oitmzmhhh!!11!!",-135000);
if (resultadoCode === "aloha galerezzz!!11!!") {
  console.log( "Teste 6  OK!");
} else {
  console.log(" Teste 6 ERRRO!");
}

resultadoCode = CipherCode( "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm",-2755300);

if (resultadoCode === "o coração da zebra não é listrado kkk") {
  console.log( "Teste 7  OK!");
  } else {
  console.log(" Teste 7 ERRRO!");
  }
