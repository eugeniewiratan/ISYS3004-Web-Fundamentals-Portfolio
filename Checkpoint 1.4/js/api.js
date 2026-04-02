const REPOS_API_URL = "https://api.github.com/users/eugeniewiratan/repos";
const QUOTES_API_URL = "https://dummyjson.com/quotes/random";

document.addEventListener("DOMContentLoaded", () => {
  initRepositories();
  initQuoteGenerator();
});

async function initRepositories() {
  const container = document.getElementById("repos-container");
  const loading = document.getElementById("loading");
  const error = document.getElementById("error-message");

  if (!container || !loading || !error) {
    return;
  }

  loading.hidden = false;
  error.hidden = true;
  container.innerHTML = "";

  try {
    const response = await fetch(REPOS_API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const repos = await response.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      container.innerHTML = `
        <article class="repo-card">
          <h3>No repositories found</h3>
          <p>There are currently no public repositories to display.</p>
        </article>
      `;
      return;
    }

    const featuredRepo = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))[0];

    if (!featuredRepo) {
      container.innerHTML = `
        <article class="repo-card">
          <h3>No repositories found</h3>
          <p>There are currently no suitable repositories to display.</p>
        </article>
      `;
      return;
    }

    container.innerHTML = `
      <article class="repo-card">
        <h3>
          <a href="${featuredRepo.html_url}" target="_blank" rel="noopener noreferrer">
            ${featuredRepo.name}
          </a>
        </h3>
        <p>${featuredRepo.description || "No description provided."}</p>
        <p><strong>Language:</strong> ${featuredRepo.language || "Unknown"}</p>
        <p><strong>Last updated:</strong> ${formatDate(featuredRepo.updated_at)}</p>
      </article>
    `;
  } catch (err) {
    console.error("Failed to fetch repositories:", err);
    error.textContent = "Unable to load repositories right now.";
    error.hidden = false;
  } finally {
    loading.hidden = true;
  }
}

function initQuoteGenerator() {
  const quoteButton = document.getElementById("load-quote");
  const quoteText = document.getElementById("quote-text");
  const quoteAuthor = document.getElementById("quote-author");
  const quoteLoading = document.getElementById("quote-loading");
  const quoteError = document.getElementById("quote-error");

  if (!quoteButton || !quoteText || !quoteAuthor) {
    return;
  }

  async function fetchQuote() {
    if (quoteLoading) {
      quoteLoading.hidden = false;
    }

    if (quoteError) {
      quoteError.hidden = true;
      quoteError.textContent = "";
    }

    quoteButton.disabled = true;

    try {
      const response = await fetch(QUOTES_API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      quoteText.textContent = `"${data.quote}"`;
      quoteAuthor.textContent = `— ${data.author}`;
    } catch (err) {
      console.error("Failed to fetch quote:", err);
      quoteText.textContent = "Unable to load quote right now.";
      quoteAuthor.textContent = "";

      if (quoteError) {
        quoteError.textContent = "Please try again later.";
        quoteError.hidden = false;
      }
    } finally {
      if (quoteLoading) {
        quoteLoading.hidden = true;
      }

      quoteButton.disabled = false;
    }
  }

  quoteButton.addEventListener("click", fetchQuote);
  fetchQuote();
}

function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}