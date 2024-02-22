/*
    cas: je doba v sekundách, po kterou trouba
    odebírala uvedený příkon
    spotreba: je kolik energie by bylo spotřebováno,
    pokud by takto trouba pekla celou hodinu
    (jsou to watthodiny [Wh])

    pro cas: 600s a spotreba: 3500 Wh je skutečné
    odebrané množství "energie":
    3500 * (600 / 3600) === 3500 * (1/6) === 583,333W
*/

type Odber = {
    cas: number, //v s
    prikon: number //ve W
}
const cena: number = 6.70; //6.70Kč za 1 kWh
let data: Array<Odber> = [
    { cas: 600, prikon: 3500 },
    { cas: 120, prikon: 0 },
    { cas: 300, prikon: 1700 },
    { cas: 60, prikon: 0 },
    { cas: 120, prikon: 1500 }
]

for (const peceme of data) {

    let kWh: number = (peceme.cas / 3600) * (peceme.prikon / 1000);

    let konecnaCena: number = kWh * cena;
    console.log(konecnaCena);

    let prumernyOdber: number = kWh / 5
    console.log(prumernyOdber)
}