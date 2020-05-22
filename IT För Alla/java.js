 // Den här syns endast när javascriptet är på.

$(".dropknapp").show();
  $("#minDropdown").addClass("dropdown-innehåll");
/* När användaren klickar på knappen,
växla mellan att dölja och visa innehållet */
$(".dropknapp").click(function(){


    document.getElementById("minDropdown").classList.toggle("show");


});
    // Den stänger dropdown när man klickar utanför knappen

    window.onclick = function(event) {

    if (!event.target.matches('.dropknapp')) {

      var dropdowns = document.getElementsByClassName("dropdown-innehåll");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

}

$("#change").click(function(){  //en funktion som lyssnar efter ett tryck på #section2

  $('html, body').animate({
        scrollTop: $("#Bytaeniphone").offset().top
    }, 1000);
});

$("#zero").click(function(){  //en funktion som lyssnar efter ett tryck på #section2

  $('html, body').animate({
        scrollTop: $("#Nollställ").offset().top
    }, 1000);
});

$("#list").click(function(){  //en funktion som lyssnar efter ett tryck på #section2

  $('html, body').animate({
        scrollTop: $("#Innehåll").offset().top
    }, 1000);
});

$("#list2").click(function(){  //en funktion som lyssnar efter ett tryck på #section2

  $('html, body').animate({
        scrollTop: $("#Innehåll").offset().top
    }, 1000);
});
