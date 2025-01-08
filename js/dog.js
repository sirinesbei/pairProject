$(document).ready(function () {
    $('#add').on('click', function () {
       
       var name = $('#name').val().trim();
       var age = $('#age').val();
       var breed = $('#breed').val().trim();
       var weight = $('#weight').val();
       var vaccine = $('#vaccine').val().trim();
       var imageFile = $('#image')[0].files[0];

       
       alert('Dog details added successfully!');
    )}
)}