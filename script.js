// FOR NAV
fetch("nav.html")
  .then(response => response.text())
  .then(nav => {
    document.getElementById("nav-placeholder").innerHTML = nav;
  });

// FOR MISSION
fetch("mission.html")
  .then(response => response.text())
  .then(mission => {
    document.getElementById("mission-placeholder").innerHTML = mission;
  });

// FOR MISSION
fetch("donate.html")
  .then(response => response.text())
  .then(donate => {
    document.getElementById("donate-placeholder").innerHTML = donate;
  });

  
// FOR FOOTER
fetch("footer.html")
  .then(response => response.text())
  .then(footer => {
    document.getElementById("footer-placeholder").innerHTML = footer;
  });


