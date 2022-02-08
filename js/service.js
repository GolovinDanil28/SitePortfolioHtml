$( ".btn-toggler" ).click(function() {
  $( ".navigation_item" ).toggle( "slow", function() {
    // Animation complete.
  });
});
  $('#warning').click(function(){
    $('#content').load('./warning.html');
  });