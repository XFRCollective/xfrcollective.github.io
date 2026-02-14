document.addEventListener("DOMContentLoaded", function() {
  const placeholders = [
    { id: "nav", file: "nav.html" },
    { id: "mission", file: "mission.html" },
    { id: "donate", file: "donate.html" },
    { id: "footer", file: "footer.html" }
  ];

  placeholders.forEach(p => {
    fetch(p.file)
      .then(res => res.ok ? res.text() : Promise.reject(`Failed to load ${p.file}`))
      .then(html => document.getElementById(p.id).innerHTML = html)
      .catch(err => console.error(err));
  });
});
