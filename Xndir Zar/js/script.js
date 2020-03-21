// Xndir - Zar
let qanaky = 0;
let loopCount = 0; // Qani angama fracel cikly
do {
    loopCount++;
    (Math.floor(Math.random() * 6) + 1);
    if ((Math.floor(Math.random() * 6) + 1) == 6 ){
        qanaky++;
    }
} while (qanaky <= 1200);
alert(`Cikly fracela \n ${loopCount} angam`);
alert(`6 ynkela \n ${qanaky} angam`);
alert(`Mijinum 6 ynkela \n ${loopCount/qanaky} angam`);