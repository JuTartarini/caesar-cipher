let resultadoCode = Code("ABACATE",7);

if (resultadoCode === "HIHJHAL") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoCode + " não é o esperado ('HIHJHAL').");
}
resultadoCode = Code("JÉSSICA NÃO CURTE ABACATE KKK",7);

if (resultadoCode === "QÉZZPJH UÃV JBYAL HIHJHAL RRR") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoCode + " não é o esperado ('QÉZZPJH UÃV JBYAL HIHJHAL RRR').");
}

resultadoCode = Code("aloha galerezzz!!11!!",135000);

if (resultadoCode === "itwpi oitmzmhhh!!11!!") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoCode + " não é o esperado ('itwpi oitmzmhhh!!11!!').");
}

resultadoCode = Code("o coração da zebra não é listrado kkk",2755300);

if (resultadoCode === "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm") {
    console.log("A função de criptografar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de criptografar flopou. O resultado " + resultadoCode + " não é o esperado ('q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm').");
}


resultadoCode  = Code("QÉZZPJH UÃV JBYAL HIHJHAL RRR",-7);

if (resultadoCode === "JÉSSICA NÃO CURTE ABACATE KKK") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoCode + " não é o esperado ('JÉSSICA NÃO CURTE ABACATE KKK').");
}


resultadoCode = Code("itwpi oitmzmhhh!!11!!",-135000);

if (resultadoCode === "aloha galerezzz!!11!!") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoCode + " não é o esperado ('aloha galerezzz!!11!!').");
}

resultadoCode = Code( "q eqtcçãq fc bgdtc pãq é nkuvtcfq mmm",-2755300);

if (resultadoCode === "o coração da zebra não é listrado kkk") {
    console.log("A função de decifrar funcionou! O resultado " + resultadoCode + " é o esperado.");
} else {
    console.log("Tente novamente, a função de decifrar flopou. O resultado " + resultadoCode + " não é o esperado ('o coração da zebra não é listrado kkk').");
}
