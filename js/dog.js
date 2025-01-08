document.getElementById("dogadd").addEventListener("click", function () {
   
    var name = document.getElementById("dogname").value;
   
    var age = document.getElementById("dogage").value;
    var breed = document.getElementById("dogbreed").value;
    var weight = document.getElementById("dogweigth").value;
    var vaccine = document.getElementById("dogvaccine").value;
    var image = document.getElementById("dogimage").files[0]; })

    console.log("Dog's Name:", name)
    console.log("Dog's Age:", age)
    console.log("Dog's Breed:", breed)
    console.log("Dog's Weight:", weight)
    console.log("Vaccination :", vaccine)
    console.log("Uploaded image:", image)

function dog(name, age, breed, weigth,vaccine,image) {
    return {
    name: name,
    age: age,
    breed: breed,
    weigth: weigth,
    vaccine:vaccine,
    image :image

    }}

    function displaydog(dog){

        return dog.name+' '+dog.age+' '+dog.breed+' '+dog.weigth+' '+vaccine+' '+dog.image
    }

