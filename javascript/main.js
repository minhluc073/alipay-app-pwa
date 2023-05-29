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
  $(function () {
    clear_text();
    custom_select();
  });
})(jQuery);
