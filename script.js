document.addEventListener("DOMContentLoaded", function() {
// FOR NAV
fetch("nav.html")
  .then(response => response.text())
  .then(nav => {
    document.getElementById("nav").innerHTML = nav;
  });

// FOR MISSION
fetch("mission.html")
  .then(response => response.text())
  .then(mission => {
    document.getElementById("mission").innerHTML = mission;
  });

// FOR MISSION
fetch("donate.html")
  .then(response => response.text())
  .then(donate => {
    document.getElementById("donate").innerHTML = donate;
  });

  
// FOR FOOTER
fetch("footer.html")
  .then(response => response.text())
  .then(footer => {
    document.getElementById("footer").innerHTML = footer;
  });


});
