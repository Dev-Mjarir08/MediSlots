$(document).ready(function () {
    $("#loginForm").hide();


    $('.login').click(function () {
          $('#signUp').fadeOut(0)
        $("#loginForm").fadeIn()
         $("header").hide();
          $(".hero").hide();
    })
    $('#closeLogin').click(function () {
        $('#loginForm').fadeOut()
               $(".hero").show();
            $("header").show(); 
    })

    $("#signUp").hide();


    $('.signUp').click(function () {
         $('#loginForm').fadeOut(0)
        $("#signUp").fadeIn()
          $("header").hide();
          $(".hero").hide();

    })
    $('#closeSignup').click(function () {
        $('#signUp').fadeOut()
        
            $(".hero").show();
            $("header").show();
    })
});



