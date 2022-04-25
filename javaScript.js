var users = {
  "mallak@gmail.com": 112233,
  "monther@gmail.com": 102030
}
var userEmail;
var userPass;

$('.carousel').carousel({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5,
})


var navbar = $(".navbar");

$(document).ready(function() { 
  $(window).scroll(function() {
    
    navbar.last().addClass("nav-scroll");
  });
});


$("#carouselExampleIndicators").on('slid.bs.carousel', function () {
  $(".fade-first").hide().fadeIn(1000);
  $(".fade-second").hide().fadeIn(2000);

})



window.onload = (function () {

  $(".fade-first").hide().fadeIn(1000);
  $(".fade-second").hide().fadeIn(3000);

})

$(".e-mail").mouseleave(function () {
  userEmail = $(".e-mail").val();
  $(".e-mail").val(userEmail.toUpperCase());
  $(".e-mail").css("color", "blue");


})

$(".msg").mouseleave(function () {
  var text = $(".msg").val();
  $(".msg").val(text.toUpperCase());
  $(".msg").css("color", "blue");

})

 $(document).ready(function () {

 $("form").submit( check);
});

function validate(){
  alert("Succes")
}
function check(){
  var arr=[1234,12345,12346,123457]
  var temp = document.getElementById("Password").value;
  alert(temp);
var flag = false;
for(var i in arr){
  alert(arr[i]);

  if(arr[i] == temp){
alert("true");
  flag = true;
  break;}
}
if(flag==false){
  alert("invalid password");
}
}
