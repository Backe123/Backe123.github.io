/*jslint browser: true*/ /*global  $*/

// Den här syns endast när javascriptet är på.
$(".dropknapp").show();
$("#minDropdown").addClass("dropdown-innehall");
/* När användaren klickar på knappen,
växla mellan att dölja och visa innehållet */
$(".dropknapp").click(function () {


    document.getElementById("minDropdown").classList.toggle("show");


});
    // Den stänger dropdown när man klickar utanför knappen

   window.onclick = function(event) {
     if (!event.target.matches(".dropknapp")) {
         var dropdowns = document.getElementsByClassName("dropdown-innehall");
        var i;
        var openDropdown;
      for (i = 0; i < dropdowns.length; i+=1) {
        openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }

};

$("#change").click(function () {
  //en funktion som lyssnar efter ett tryck på #change

    $("html, body").animate({
        scrollTop: $("#Bytaeniphone").offset().top
    }, 1000);
});

$("#zero").click(function () {
  //en funktion som lyssnar efter ett tryck på #zero

    $("html, body").animate({
        scrollTop: $("#Nollstall").offset().top
    }, 1000);
});

$("#list").click(function () {
  //en funktion som lyssnar efter ett tryck på #list

    $("html, body").animate({
        scrollTop: $("#Innehall").offset().top
    }, 1000);
});

$("#list2").click(function () {
  //en funktion som lyssnar efter ett tryck på #list2

    $("html, body").animate({
        scrollTop: $("#Innehall").offset().top
    }, 1000);
});

 
