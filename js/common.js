var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
$( ".btn-toggler" ).click(function() {
  $( ".navigation_item" ).toggle( "slow", function() {
    // Animation complete.
  });
});
$(".personal").click(function(){
  $(".popup-personal").show('slow');
});
$(".closed").click(function(){
  $(".popup-personal").hide('slow');
});
$(".btn").click(function(){
  $(".popup-form").show('slow');
});
$(".closed-form").click(function(){
  $(".popup-form").hide('slow');
})