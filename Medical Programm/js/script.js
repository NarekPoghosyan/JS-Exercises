let users = [
    {
        name: 'Arsen',
        password: '1111',
    },
    {
        name: 'Karen',
        password: '2222',
    },
    {
        name: 'Mari',
        password: '3333',
    },
]

let hivandutyunner = [
    {   name: 'Coronavirus',
        symptomner: ['Jermutyun','tulutyun','kokordi cav'],
        bujum: 'Text',
    },
    {   name: 'Astma',
        symptomner: ['Odi anbavararutyun','xosqi yndhatvum'],
        bujum: 'Text',
    },
    {   name: 'Narkomania',
        symptomner: ['Kaptukner','mashki gunatutyun','neadkevat pahvacq'],
        bujum: 'Text',
    },
]

let user;

for(;user == undefined;) {
    let login = prompt('Enter Username(Arsen,Karen,Mari)');
    let password = prompt('Enter password(Arsen - 1111)(Karen - 2222)(Mari - 3333)');
    user = users.find(function(elem) {
        return elem.name.toLowerCase() === login.toLowerCase() && elem.password === password;
    });    
}

alert(`Welcome To Medical Center (-(-_(-_-)_-)-) \n ${user.name}`);

let hivandutyun;

for(; hivandutyun == undefined;) {
    let symptoms = prompt('Enter your symptoms(Orinak karas gres jermutyun kam kaptukner kam....');
    hivandutyun = hivandutyunner.find(function(elem){
        return elem.symptomner.find(function(symptom){
            return symptoms.toLowerCase().split(',').includes(symptom.toLowerCase());
        });
    });
}

alert(`Duq hivand eq ${hivandutyun.name} - ov`);
alert('Chka bujum gna dagax ar :D');
// document.write(hivandutyun.bujum)
