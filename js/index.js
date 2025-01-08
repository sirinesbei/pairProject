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



var button = document.getElementById("search");
var divs = document.getElementsByClassName("prd");

button.onclick = function () {
  var input = document.getElementById("search").value.toLowerCase();
  var divs = document.getElementsByClassName("dog-card");

  for (var i = 0; i < divs.length; i = i + 1) {
    if (divs[i].textContent.toLowerCase().includes(input)) {
      divs[i].style.display = "block";
    } else divs[i].style.display = "none";
  }

};




