 //retrieve current state
 $('body').toggleClass(localStorage.toggled);
    var toggle =$('#toggle-theme')

    toggle.on('click',function(){

       if (localStorage.toggled != "dark-theme" ) {
          $('body').toggleClass("dark-theme", true );
          localStorage.toggled = "dark-theme";
       } else {
          $('body').toggleClass("dark-theme", false );
          localStorage.toggled = "";

       }

    });

   //  change input tf-switch check
    if ($('body').hasClass('dark-theme')) {
        toggle.prop('checked', true);

     } else {
        toggle.prop('checked',false);

     }