const foods = {

    mela: {
        color: "orange",
        portion: "Massimo: 20 g"
    },

    carota: {
        color: "green",
        portion: ""
    },

    cipolla: {
        color: "red",
        portion: ""
    },

    banana: {
        color: "orange",
        portion: "Massimo: 100 g"
    },

    fragola: {
        color: "green",
        portion: ""
    }

};


const search = document.getElementById("search");
const result = document.getElementById("result");
const foodName = document.getElementById("foodName");
const circle = document.getElementById("circle");
const portion = document.getElementById("portion");
const notFound = document.getElementById("notFound");


search.addEventListener("input", function() {

    const query = search.value
        .trim()
        .toLowerCase();


    if (query === "") {

        result.classList.add("hidden");
        notFound.classList.add("hidden");

        return;
    }


    const food = Object.keys(foods).find(function(name) {

        return name.includes(query);

    });


    if (!food) {

        result.classList.add("hidden");
        notFound.classList.remove("hidden");

        return;
    }


    const data = foods[food];


    foodName.textContent = food;


    circle.className =
        "circle " + data.color;


    portion.textContent =
        data.portion;


    result.classList.remove("hidden");
    notFound.classList.add("hidden");

});
