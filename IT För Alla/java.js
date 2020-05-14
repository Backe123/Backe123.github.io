

$(".dropknapp").show();


/* När användaren klickar på knappen,
växla mellan att dölja och visa innehållet */
$(".dropknapp").click(function(){
    document.getElementById("minDropdown").classList.toggle("show");


    // Den stänger dropdown när man klickar utanför eller en gång till på knappen
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
});
