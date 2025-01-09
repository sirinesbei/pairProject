
var dogs = JSON.parse(localStorage.getItem('dogs')) || [
    { name: "Rex", age: 3, weight: 20, vaccine: "true",
         breed: "German shepherd", image: "../images/berger almand.jpg" },
         
    { name: "Charles", age: 1, weight: 20, vaccine: "true", breed: "Golden retriever",
         image: "../images/golden retriver.jpg" },


    { name: "Doudou", age: 1, weight: 20, vaccine: "true", breed: "Havanese",
         image: "../images/bichon.jpg" },

    { name: "Blue", age: 2, weight: 25, vaccine: "true", breed: "Husky", image: "../images/husky.jpg" },

    { name: "Miky", age: 2, weight: 10, vaccine: "false", breed: "Rod",
         image: "../images/rod.jpg" },

    { name: "Diablo", age: 3, weight: 20, vaccine: "true",
         breed: "Doberman", image: "../images/doberman.webp" },
]


$("#dogadd").on("click", function () {

var name = $("#dogname").val()

 var age = $("#dogage").val()

 var breed = $("#dogbreed").val()

    var weight = $("#dogweight").val()

    var vaccine = $("#dogvaccine").val()

    var image = $("#dogimage")

   

    var newDog = { name, age, breed, weight, vaccine, image}

    dogs.push(newDog)

    localStorage.setItem("dogs", JSON.stringify(dogs))

    window.location.href = "home.html"
})


$(document).ready(function () {
    $(".listDogs").empty();

    for (let i = 0; i < dogs.length; i++) {
        $(".listDogs").append(`
            <div class="dog-card">
                <img src="${dogs[i].image}" alt="cute dog for adoption" class="dog-image" ><br>
                <h3>${dogs[i].name}</h3><br>
                <strong>${dogs[i].breed}</strong><br>
                <strong>Age: ${dogs[i].age}</strong><br>
                <strong>Weight: ${dogs[i].weight}kg</strong><br>
            </div>`);
    }
});





$("#search").on("click", function () {
    var input = $("#breed").val().toLowerCase()
    $(".dog-card").each(function () {
        if ($(this).text().toLowerCase().includes(input)) {
            $(this).show()
        } else {
            $(this).hide()
        }
    })
})




