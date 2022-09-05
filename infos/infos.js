let cars = [
    {
        // 1
        carBrand: "Ford Ka",
        img: "/images/Ford-Ka.jpg",
        year: 2018,
        km: 25000,
        color: "Cinza",
        isSubscribed: false,
    },
    {
        // 2
        carBrand: "Fiat Uno",
        img: "/images/Fiat-Uno.jpeg",
        year: 2017,
        km: 2500,
        color: "Preto",
        isSubscribed: true,
    },
    {
        // 3
        carBrand: "Fiat Mobi",
        img: "/images/Fiat-Mobi.JPG",
        year: 2016,
        km: 2000,
        color: "Branco",
        isSubscribed: false,
    },
    {
        // 4
        carBrand: "Renault Kwid",
        img: "/images/Renault-Kwid.jpg",
        year: 2015,
        km: 250000,
        color: "Azul",
        isSubscribed: true,
    },
    {
        // 5
        carBrand: "Fiat Cronos",
        img: "/images/Fiat-Cronos.jpg",
        year: 2014,
        km: 27000,
        color: "Branco",
        isSubscribed: false,
    },
    {
        // 6
        carBrand: "Fiat Argo",
        img: "/images/Fiat-Argo.jpg",
        year: 2013,
        km: 2500,
        color: "Cinza",
        isSubscribed: true,
    },
    {
        // 7
        carBrand: "Volkswagen Gol",
        img: "/images/VW-Gol.jpg",
        year: 2012,
        km: 50000,
        color: "Vermelho",
        isSubscribed: false,
    },
    {
        // 8
        carBrand: "Hyundai HB20",
        img: "/images/Hb20.jpg",
        year: 2015,
        km: 257000,
        color: "Preto",
        isSubscribed: true,
    },
    {
        // 9
        carBrand: "Peugeot 208",
        img: "/images/Peugeot-208.jpeg",
        year: 2014,
        km: 32000,
        color: "Cinza",
        isSubscribed: false,
    },
];

let num = document.getElementById("num").innerHTML;

switch (num) {
    case "#1":
        for (let i = 0; i <= 0; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

    case "#2":
        for (let i = 1; i <= 1; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#3":
            for (let i = 2; i <= 2; i++) {
                document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
                document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
                document.getElementById("carYearInfo").innerHTML = cars[i].year
                document.getElementById("carColor").innerHTML = cars[i].color
                document.getElementById("carKm").innerHTML = cars[i].km
                document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
            }
            break;

        case "#4":
        for (let i = 3; i <= 3; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#5":
        for (let i = 4; i <= 4; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#6":
        for (let i = 5; i <= 5; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#7":
        for (let i = 6; i <= 6; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#8":
        for (let i = 7; i <= 7; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

        case "#9":
        for (let i = 8; i <= 8; i++) {
            document.getElementById("carImgInfo").setAttribute("src", cars[i].img)
            document.getElementById("carNameInfo").innerHTML = cars[i].carBrand
            document.getElementById("carYearInfo").innerHTML = cars[i].year
            document.getElementById("carColor").innerHTML = cars[i].color
            document.getElementById("carKm").innerHTML = cars[i].km
            document.getElementById("carDisp").innerHTML = cars[i].isSubscribed
        }
        break;

    default:
        break;
}
