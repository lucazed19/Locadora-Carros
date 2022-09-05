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

document.getElementById("carImg").setAttribute("src", cars[0].img);
document.getElementById("carName").innerHTML = cars[0].carBrand;

let i = 0;
function aumentar(){
    if (i < cars.length-1){
        i++
    }else{
        i = 0;
    }
    document.getElementById("carImg").setAttribute("src", cars[i].img);
    document.getElementById("carBackground").style.backgroundImage = `url(${cars[i].img})`
    document.getElementById("carName").innerHTML = cars[i].carBrand;
    document.getElementById("carName").href = `/infos/${i}.html`;

}

function diminuir(){
    if (i == 0){
        i = cars.length-1;
    }else{
        i--
    }
    document.getElementById("carImg").setAttribute("src", cars[i].img);
    document.getElementById("carBackground").style.backgroundImage = `url(${cars[i].img})`
    document.getElementById("carName").innerHTML = cars[i].carBrand;
    document.getElementById("carName").href = `/infos/${i}.html`;
}

document.addEventListener("keydown", function(event){
    if(event.key === "ArrowRight"){
        let btn = document.getElementById("right");
        btn.click();
    }
});


document.addEventListener("keydown", function(event){
    if(event.key === "ArrowLeft"){
        let btn = document.getElementById("left");
        btn.click();
    }
});


