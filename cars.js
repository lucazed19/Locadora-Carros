let cars = [
    {
        // 1
        carBrand: "Ford Ka",
        year: 2018,
        km: 25000,
        color: "Cinza",
        isSubscribed: false,
    },
    {
        // 2
        carBrand: "Fiat Uno",
        year: 2017,
        km: 2500,
        color: "Preto",
        isSubscribed: true,
    },
    {
        // 3
        carBrand: "Fiat Mob",
        year: 2016,
        km: 2000,
        color: "Branco",
        isSubscribed: false,
    },
    {
        // 4
        carBrand: "Renault Kwid",
        year: 2015,
        km: 250000,
        color: "Azul",
        isSubscribed: true,
    },
    {
        // 5
        carBrand: "Fiat Cronos",
        year: 2014,
        km: 27000,
        color: "Branco",
        isSubscribed: false,
    },
    {
        // 6
        carBrand: "Fiat Argo",
        year: 2013,
        km: 2500,
        color: "Cinza",
        isSubscribed: true,
    },
    {
        // 7
        carBrand: "Volkswagen Gol",
        year: 2012,
        km: 50000,
        color: "Vermelho",
        isSubscribed: false,
    },
    {
        // 8
        carBrand: "Hyundai HB20",
        year: 2015,
        km: 257000,
        color: "Preto",
        isSubscribed: true,
    },
    {
        // 9
        carBrand: "Peugeot 208",
        year: 2014,
        km: 32000,
        color: "Cinza",
        isSubscribed: false,
    },
    {
        // 10
        carBrand: "Ford Ka",
        year: 2018,
        km: 25000,
        color: "Cinza",
        isSubscribed: false,
    }
];

for (let c1 = 0; c1 < cars.length; c1++) {
    
    for (let c2 = 0; c2 < cars.length; c2++) {
        
        if (cars[c1].carBrand == cars[c2].carBrand && cars[c1].year == cars[c2].year && cars[c1].km == cars[c2].km && cars[c1].color == cars[c2].color && cars[c1].isSubscribed == cars[c2].isSubscribed && c1 != c2){
            console.log(`Um ${cars[c2].carBrand} repetido foi removido da lista\n`);
            cars.pop(c2);
        }   
    }
}

for (let i = 0; i < cars.length; i++) {
    if (cars[i].isSubscribed == true) {
        console.log(`O carro ${cars[i].carBrand} pode ser alugado`);
    } else {
        console.log(`O carro ${cars[i].carBrand} não pode ser alugado`);
    }
}