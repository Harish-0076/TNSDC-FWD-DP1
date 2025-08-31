document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Add interactivity to project cards
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You clicked on project: ${card.innerText}`);
  });
});
