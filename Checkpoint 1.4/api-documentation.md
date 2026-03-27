# API Documentation — Quote Feature

## API Used
For this checkpoint, I used the DummyJSON Quotes API:

https://dummyjson.com/quotes/random

I changed to this API because I needed a public quote API that was simple to test and reliable for a portfolio checkpoint. It returns random quotes without requiring an API key, which made it practical for this task.

---

## Purpose of Using This API
I wanted this checkpoint to feel connected to the rest of my website instead of adding something random just for the sake of using an API. Since my portfolio theme is based around growth, discipline, and development, I felt a quote feature suited the site well.

It also helped make the website feel more dynamic because the content changes without me hardcoding each quote manually.

---

## Data Retrieved
From the API response, I am using:

- `quote` → the quote text
- `author` → the name of the person associated with the quote

Example structure of the data:

```json
{
  "id": 1,
  "quote": "Life isn’t about getting and having, it’s about giving and being.",
  "author": "Kevin Kruse"
}

How the Implementation Works
I used the Fetch API with async/await to request data from the API.
When the page loads:
* A loading message is shown
* A request is sent to the API
* The response is converted to JSON
* The quote and author are inserted into the HTML dynamically
I also added a button that allows the user to fetch a new quote without refreshing the page. This makes the feature more interactive and user-friendly.

Loading State
While the data is being fetched, I display a loading message ("Loading...") so the user knows something is happening.
This prevents confusion and makes the interface feel more responsive.

Error Handling
I implemented error handling using a try/catch block.
If something goes wrong (for example, network issues or the API not responding):
* The error is caught
* A message is displayed to the user instead of breaking the page
This ensures that the site remains usable even if the API fails.

Design Integration
I styled the API content to match the monochromatic theme of my portfolio.
* The quote is displayed in a larger, italic style to make it stand out
* The layout follows the same structure as the rest of the site
* Buttons and spacing are consistent with previous checkpoints
This keeps the design cohesive instead of making the API page feel separate from the rest of the site.

Limitations
* The API returns a completely random quote, so there is no control over the topic
* It depends on an external service, so it may fail if there is no internet connection

Reflection
At first, I found API integration confusing because I didn’t fully understand how data is fetched and displayed dynamically. However, after working through this implementation, I now understand how JavaScript connects external data to the DOM.
This checkpoint helped me move from just building static pages to creating a more interactive and dynamic website.
