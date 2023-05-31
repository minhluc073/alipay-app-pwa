(function ($) {
  "use strict";

  const clear_text = function () {
    $(".icon-clear").on("click", function () {
      $(".value_input").val("");
    });
  };
  const custom_select = function () {
    var langArray = [];
    $(".default-select option").each(function () {
      var img = $(this).attr("data-thumbnail");
      var text = this.innerText;
      var value = $(this).val();
      var item =
        '<li><img src="' +
        img +
        '" alt="" value="' +
        value +
        '"/><span>' +
        text +
        "</span> </li>";
      langArray.push(item);
    });

    $("#box-select").html(langArray);

    $(".btn-select").html(langArray[0]);
    $(".btn-select").attr("value", "en");

    $("#box-select li").click(function () {
      var img = $(this).find("img").attr("src");
      var value = $(this).find("img").attr("value");
      var text = this.innerText;
      var item =
        '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
      $(".btn-select").html(item);
      $(".btn-select").attr("value", value);
      $(".banks-select").toggle();
    });

    $(".btn-select").click(function () {
      $(".banks-select").toggle();
    });

    var sessionLang = localStorage.getItem("lang");
    if (sessionLang) {
      var langIndex = langArray.indexOf(sessionLang);
      $(".btn-select").html(langArray[langIndex]);
      $(".btn-select").attr("value", sessionLang);
    } else {
      var langIndex = langArray.indexOf("ch");
      console.log(langIndex);
      $(".btn-select").html(langArray[langIndex]);
    }
  };
  const tfTabs = function () {
    $(".tf-tab").each(function () {
      $(this).find(".content-tab").children().hide();
      $(this).find(".content-tab").children().first().show();
      $(this)
        .find(".menu-tabs")
        .children(".nav-tab")
        .on("click", function (e) {
          e.preventDefault();
          var liActive = $(this).index();
          var contentActive = $(this)
            .siblings()
            .removeClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive);
          contentActive.addClass("active").fadeIn("slow");
          contentActive.siblings().removeClass("active");
          $(this)
            .addClass("active")
            .parents(".tf-tab")
            .find(".content-tab")
            .children()
            .eq(liActive)
            .siblings()
            .hide();
        });
    });
  };
  const suggessInput = function(){
   $('.tag-money').on('click', function()
   {
     var val = $(this).text();
     $('.value_input').val(val)
   });
  };
  const tfPopup = function(){
    var modalUp = $('.modal-up');
    if(modalUp.length){
      const open = function () {
        modalUp.addClass("modal-menu--open");
      };
      const close = function () {
        modalUp.removeClass("modal-menu--open");
      };

      $("#btn-popup-up").on("click", function () {
        open();
      });
      $(".modal-menu__backdrop, .clear-popup").on("click", function () {
        close();
      });
    }
  };

  $(function () {
    clear_text();
    custom_select();
    tfTabs();
    suggessInput();
    tfPopup();
  });
})(jQuery);
