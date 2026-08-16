const foods = {

    mela: {
        color: "orange",
        status: "ARANCIONE",
        portion: "Massimo: 20 g"
    },

    carota: {
        color: "green",
        status: "VERDE",
        portion: ""
    },

    cipolla: {
        color: "red",
        status: "ROSSO",
        portion: ""
    },

    banana: {
        color: "orange",
        status: "ARANCIONE",
        portion: "Massimo: 100 g"
    },

    fragola: {
        color: "green",
        status: "VERDE",
        portion: ""
    }

};


const search = document.getElementById("search");
const result = document.getElementById("result");
const foodName = document.getElementById("foodName");
const circle = document.getElementById("circle");
const status = document.getElementById("status");
const portion = document.getElementById("portion");
const message = document.getElementById("message");


search.addEventListener("input", function() {

    const query = search.value.trim().toLowerCase();

    if (query === "") {

        result.classList.add("hidden");

        message.textContent =
            "Prova a cercare mela, carota, cipolla, banana o fragola";

        return;
    }


    const food = Object.keys(foods).find(function(name) {

        return name.includes(query);

    });


    if (!food) {

        result.classList.add("hidden");

        message.textContent =
            "Alimento non trovato";

        return;
    }


    const data = foods[food];

    foodName.textContent = food;

    circle.className =
        "circle " + data.color;

    status.textContent =
        data.status;

    portion.textContent =
        data.portion;

    result.classList.remove("hidden");

    message.textContent = "";

});