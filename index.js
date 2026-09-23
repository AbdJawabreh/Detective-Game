function renderStars(container, level, max = 5) {

  level = Math.max(4, Math.min(max, Number(level) || 0));

  container.innerHTML = "";
  container.setAttribute("role", "img");
  container.setAttribute("aria-label", `Difficulty ${level} of ${max}`);

  for (let i = 1; i <= max; i++) {
    const star = document.createElement("span");
    const isFilled = i <= level;
    star.className = isFilled ? "star filled" : "star";
    star.textContent = isFilled ? "★" : "☆";
    container.appendChild(star);
  }
}


document.querySelectorAll(".stars").forEach((el) => {
  renderStars(el, el.dataset.level);
});