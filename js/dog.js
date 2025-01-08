$(document).ready(function () {
    $('#add').on('click', function () {

      
        var name = $('#name').val().trim();
        var age = $('#age').val().trim();
        var breed = $('#breed').val().trim();
        var weight = $('#weight').val().trim();
        var vaccine = $('#vaccine').val().trim();
        var imageFile = $('#image')[0].files[0];



console.log(name);

        alert('Dog added successfully!');


    })
})