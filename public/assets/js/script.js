document.addEventListener("DOMContentLoaded", () => {
  const jokeBtn = document.getElementById("jokeBtn");
  const jokeDiv = document.getElementById("joke");

  jokeBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/jokes/random");
      if (!response.ok) throw new Error("Network response was not ok");
      const joke = await response.json();
      jokeDiv.textContent = joke.content;
    } catch (error) {
      jokeDiv.textContent = "Erreur lors de la récupération de la blague";
    }
  });
});
