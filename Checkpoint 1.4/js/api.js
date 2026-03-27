const API_URL = "https://dummyjson.com/quotes/random";

async function fetchQuote() {
  const container = document.getElementById("quote-container");
  const loading = document.getElementById("loading");
  const error = document.getElementById("error-message");

  if (!container || !loading || !error) {
    return;
  }

  loading.style.display = "block";
  error.style.display = "none";
  container.innerHTML = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    container.innerHTML = `
      <blockquote>"${data.quote}"</blockquote>
      <p>- ${data.author}</p>
    `;
  } catch (err) {
    console.error("Failed to fetch quote:", err);
    error.textContent = "Failed to load quote. Try again!";
    error.style.display = "block";
  } finally {
    loading.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchQuote();

  const button = document.getElementById("new-quote");

  if (button) {
    button.addEventListener("click", fetchQuote);
  }
});