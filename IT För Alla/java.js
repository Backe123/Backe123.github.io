

$(".dropknapp").show(); // Den här syns endast när javascriptet är på.
$(".dropdown-innehåll").css("overflow, hidden");


/* När användaren klickar på knappen,
växla mellan att dölja och visa innehållet */
$(".dropknapp").click(function(){
  console.log("test");
    document.getElementById("minDropdown").classList.toggle("show");

});
    // Den stänger dropdown när man klickar utanför eller en gång till på knappen
    window.onclick = function(event) {
      console.log("test");
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
