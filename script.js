const searchBar = document.getElementById("searchBar");
const cards = document.querySelectorAll(".card");

searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
