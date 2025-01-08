var dogs = localStorage.getItem("dogs") || [
    {
        name:"rex",
        age:3,
        weight:20,
        vaccine:"true",
        breed:"German shepherd",
        image:"../images/berger almand.jpg"
        
    },
    {
        name:"rex",
        age:3,
        weight:20,
        vaccine:"true",
        breed:"Golden retriver",
        image:"../images/golden retriver.jpg"
    },
    {
        name:"doudou",
        age:1,
        weight:20,
        vaccine:"true",
        breed:"Havanese",
        image:"../images/bichon.jpg"
    },
    {

        name:"blue",
        age:2,
        weight:25,
        vaccine:"true",
        breed:"husky",
        image:"../images/berger almand.jpg"
    },
    {
        name:"miky",
        age:2,
        weight:10,
        vaccine:"false",
        breed:"rod",
        image:"../images/rod.jpg"
    },
    {
        name:"diablo",
        age:3,
        weight:20,
        vaccine:"true",
        breed:"doberman",
        image:"../images/doberman.webp"
    }

]

var newArray={ name:"diablo",
    age:3,
    weight:20,
    vaccine:"true",
    breed:"doberman",
    image:"../images/doberman.webp"
}
<<<<<<< HEAD
var dog1=("rex",3,20,"true","German shepherd")
var dog2=("charles",1,6,"true","Golden retriver")
var dog3=("doudou",2,3,"true","Havanese")
var dog4=("blue",2,25,"true","husky")
var dog5=("miky",2,10,"false","rod")
var dog6=("diablo",3,20,"true","doberman")
=======
>>>>>>> c533414a17f22e85722798ffff2c59b1e5a15651




<<<<<<< HEAD

$("#add").on("click",function () {

    window.location.href ='adddog.html';
})

=======
/**dogs.map(function (element) {
    $(".listDogs").append(` <div class="dog-card">
      <img src="${element.image}">
    <h3>${element.name}</h3>
    
    
    </div>
    `
       
    )
})


>>>>>>> c533414a17f22e85722798ffff2c59b1e5a15651
