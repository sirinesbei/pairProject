function makeDog(name,age,weight,vaccine,breed,image) {
    return{
        name:name,
        age:age,
        weight:weight,
        vaccine:vaccine,
        breed:breed,
        image:image
    }
}
var dog1=("rex",3,20,"true","German shepherd")
var dog2=("charles",1,6,"true","Golden retriver")
var dog3=("doudou",2,3,"true","Havanese")
var dog4=("blue",2,25,"true","husky")
var dog5=("miky",2,10,"false","rod")
var dog6=("diablo",3,20,"true","doberman")





$("#add").on("click",function () {

    window.location.href ='adddog.html';
})

