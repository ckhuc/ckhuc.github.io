function pickDate(choice) {
  const result = document.getElementById("result");

  if (choice === "rock climbing") {
    result.textContent = "Great choice. I was hoping you’d pick rock climbing 🧗";
  } else if (choice === "escape room") {
    result.textContent = "Escape room it is. Let’s see if we’re a good team 🔐";
  } else if (choice === "movie") {
    result.textContent = "Movie date sounds perfect 🎬";
  }
}
