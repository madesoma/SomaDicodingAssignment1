/* The button clicked, it shows and hide the toggle */
function myFunction() {
    document.getElementById("menuDropdown").classList.toggle("show");
  }
  
//If outside click, it closes the toggle
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-list");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }