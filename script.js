document.addEventListener("DOMContentLoaded", function() {
  const placeholders = [
    { id: "nav-placeholder", file: "nav.html" },
    { id: "mission-placeholder", file: "mission.html" },
    { id: "donate-placeholder", file: "donate.html" },
    { id: "footer-placeholder", file: "footer.html" }
  ];

  placeholders.forEach(p => {
    fetch(p.file)
      .then(res => res.ok ? res.text() : Promise.reject(`Failed to load ${p.file}`))
      .then(html => {
        const el = document.getElementById(p.id);
        if(el) el.innerHTML = html;
      })
      .catch(err => console.error(err));
  });
});
