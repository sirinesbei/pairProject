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
        name:"charles",
        age:3,
        weight:20,
        vaccine:"true",
        breed:"Golden retriver",
        image:"../images/golden retriver.jbluepg"
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


dogs.map(function (dog) {
    $(".listDogs").append(` <div class="dog-card">
      <img src="${element.image}">
    <h3>${element.name}</h3>
    
    
    </div>
    `
       
    )
})





$("#add").on("click",function () {

    window.location.href ='adddog.html';
})




