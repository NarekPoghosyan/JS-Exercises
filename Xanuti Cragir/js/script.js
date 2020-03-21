// Xndir - Xanuti Cragir
let maykaiGin = 110000;
let shalvariGin = 70000;
let koshikiGin = 120000;
let apranq;
do { 
    apranq = prompt('yntrir apranq [mayka(110000AMD),shalvar(70000AMD),koshik(120000AMD)]');
}
while (apranq != "mayka" && apranq != "shalvar" && apranq != "koshik"); 
let check = apranq == "mayka" ? maykaiGin : apranq == "shalvar" ? shalvariGin : koshikiGin;
let vcharmanTesak;
do {
     vcharmanTesak = prompt('Yntrel vcharman tesaky tvov (1 kam 2) 1-kanxik 2-poxancum');
} while (vcharmanTesak != "1" && vcharmanTesak != "2");
let mutqGumar;
let hashvehamar;
let zexchvel;
let zexchiTokos;
if (vcharmanTesak == "1") {
    mutqGumar = +prompt('mutqagreq gumary');
    zexchiTokos = check > 100000 ? 30 : apranq == "koshik" ? 10 : 0;
    zexchvel = check*zexchiTokos/100;
} else {
    hashvehamar = prompt('mutqagreq hashvehamary');
    mutqGumar = +prompt('mutqagreq gumary');
    zexchiTokos = apranq == "koshik" ? 10 : check > 100000 ? 5 : 0;
    zexchvel = check*zexchiTokos/100;
    }
alert(`Apranqi ktron: \n Gumar - ${mutqGumar} \n Check - ${check} \n Zexchvele - ${zexchvel} \n Mnacord - ${mutqGumar - check + zexchvel}`);