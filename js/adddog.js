
var dogs = JSON.parse(localStorage.getItem('dogs')) || [
    { name: "rex", age: 3, weight: 20, vaccine: "true",
         breed: "German shepherd", image: "../images/berger almand.jpg" },
         
    { name: "charles", age: 1, weight: 20, vaccine: "true", breed: "Golden retriever",
         image: "../images/golden retriver.jpg" },


    { name: "doudou", age: 1, weight: 20, vaccine: "true", breed: "Havanese",
         image: "../images/bichon.jpg" },

    { name: "blue", age: 2, weight: 25, vaccine: "true", breed: "Husky", image: "../images/husky.jpg" },

    { name: "miky", age: 2, weight: 10, vaccine: "false", breed: "Rod",
         image: "../images/rod.jpg" },

    { name: "diablo", age: 3, weight: 20, vaccine: "true",
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
    $(".listDogs").empty() 
    dogs.forEach((dog) => {
        $(".listDogs").append(`
            <div class="dog-card">
                <img src="${dog.image}" alt="${dog.breed}" class="dog-image">
                <h3>${dog.name}</h3>
                <p>${dog.breed}</p>
                <p>Age: ${dog.age}</p>
                <p>Weight: ${dog.weight}kg</p>
                <p>Vaccination: ${dog.vaccine}</p>
                
            </div>
        `)
    })
})


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
