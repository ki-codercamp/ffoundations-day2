$(function() {

  // HIGHLIGHTS ACTIVE PAGE
  //
  // var path = window.location.pathname.split('/').pop();
  //
  // if (path =='') {
  //   path = 'index.html';
  // }
  //
  // var target = $('.navbar-default, .navbar-nav,li, a[ href="'+path+'"]');
  // target.addClass('active');

    // NAV LINKS HOVER
    //
    $('header,nav,ul,li,a').hover(function () {
              $(this).addClass('activeHover');
          }, function () {
              $(this).removeClass('activeHover');
    });

    // INTERACTIONS WITH ROBOTS PAGE
    //
    $('#imgrobo1,#imgrobo2,#imgrobo3').hover(function(){
      $(this).css("opacity", "0.5");
    }, function(){
      $(this).css("opacity", "1");
    });

    // INTERACTIONS WITH HARDWARE PAGE
    //
    $('p').hover(function(){
      $(this).css("color", "red");
    }, function(){
      $(this).css("color", "inherit");
    });



      $("#preload").fadeOut(2000, function(){
        $("#preContent").fadeIn(1000);
      });



  /* TODO: Move To js file */
  /*********************************************************
   *
   *   Test Checkboxes/Radio Buttons Script
   *
   *********************************************************/
   // loop through each form and handle submit event
   for (var i=0;i<document.forms.length;i++) {
     var form = document.forms[i];
     form.addEventListener('submit', function(e){
       e.preventDefault();
       var results = '';
      // loop through all checkboxes to see if checked
      var checkboxes = form.querySelectorAll("input[type='checkbox']");
      for(var k = 0; k < checkboxes.length; k++) {
        results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
      }
      // loop through all radio butotns to display value
      var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
      for(var m = 0; m < radiobuttons.length; m++) {
        results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
      }
      // alert results
      console.log(results);
    });
  }
});
