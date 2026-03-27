**Me:**
Okay I’ve started checkpoint 1.4 and I can already tell this one feels different compared to the others. Before this, everything I built was fully controlled by me, but now I’m working with data coming from outside my website

**ChatGPT:**
Yes, this is where your site starts interacting with external data through an API.

**Me:**
Yeah and I think that’s what made it slightly confusing at first, because in the earlier checkpoints I was just structuring content and styling it, but now I need to actually think about how data flows into my page

**ChatGPT:**
That’s an important shift in understanding.

**Me:**
At the start I didn’t really understand what `fetch()` was doing. I could recognise the syntax, but I didn’t fully understand the steps behind it

**ChatGPT:**
What helped you understand it better?

**Me:**
Breaking it down into stages. Instead of seeing it as one line of code, I started thinking of it as a process — my website sends a request, the API responds, then I convert the response into JSON, and then I decide how to display it

**ChatGPT:**
That’s a correct way to understand it.

**Me:**
Yeah that made it feel less abstract. Before that, it felt like data was just appearing randomly on the page

**ChatGPT:**
That’s common when first learning APIs.

**Me:**
Then I had to choose an API, and I didn’t want to pick something too complicated because I wanted to focus on understanding the logic instead of struggling with setup like API keys or authentication

**ChatGPT:**
That’s a good approach.

**Me:**
So I chose a quotes API because it fits my site and it’s simple. It also matches the theme of my portfolio since I’m focusing on personal development and growth

**ChatGPT:**
That keeps your feature consistent with your design.

**Me:**
At first I actually used a different API, but it kept failing. I thought I made a mistake in my code, so I spent time checking everything before realising the API itself might not be reliable

**ChatGPT:**
That’s something developers often encounter.

**Me:**
Yeah and that situation actually helped me understand why error handling is important. My page didn’t crash, it showed an error message instead, which meant my try/catch was working

**ChatGPT:**
That’s a good sign.

**Me:**
After that, I switched to another API that returned data properly, and that made it easier to focus on how I structure and display the data instead of constantly debugging the request

**ChatGPT:**
That was a good decision.

**Me:**
Then I structured my JavaScript similarly to checkpoint 1.3 by using `DOMContentLoaded`, because I already understood that my script should only run after the page elements exist

**ChatGPT:**
That shows you’re applying previous knowledge.

**Me:**
Yeah I feel like this checkpoint builds on everything before it instead of being completely separate

**ChatGPT:**
Exactly.

**Me:**
Then I used `async` and `await`, and this time I actually tried to understand why I was using them instead of just copying it

**ChatGPT:**
What did you conclude?

**Me:**
It makes asynchronous code easier to read and lets me use try/catch for errors, which made my code feel more structured and easier to debug

**ChatGPT:**
That’s correct.

**Me:**
I also added a loading state because without it, the page looked empty for a moment and it felt like something wasn’t working

**ChatGPT:**
That’s why loading indicators are important for user experience.

**Me:**
Yeah so now when the page loads, it shows “Loading…” and then replaces it with the quote once the data arrives. It makes the interaction feel more intentional

**ChatGPT:**
That’s a good implementation.

**Me:**
For error handling, I made sure to display a message instead of letting the page break. I tested this by turning off my internet and refreshing the page to see what would happen

**ChatGPT:**
And what was the result?

**Me:**
It showed the error message instead of crashing, so I knew the catch block was working properly

**ChatGPT:**
That’s a good test.

**Me:**
Then for displaying the data, I used `innerHTML` to insert the quote and author into the page. I made sure it followed the structure of my design instead of just outputting raw text

**ChatGPT:**
That keeps the design consistent.

**Me:**
Yeah I didn’t want the API page to look disconnected from the rest of my site, so I kept the same layout, navigation, and styling

**ChatGPT:**
That shows good design integration.

**Me:**
I also added a button so users can fetch a new quote without refreshing the page. That part felt similar to checkpoint 1.3 because I reused event listeners

**ChatGPT:**
That shows you’re building on your previous understanding.

**Me:**
I think what changed the most for me in this checkpoint is that I’m no longer just thinking about how the page looks, but also how it behaves and where the data is coming from

**ChatGPT:**
That’s a key part of modern web development.

**Me:**
Yeah now I see it as a full process instead of separate pieces. HTML is the structure, CSS is the design, JavaScript controls behaviour, and APIs bring in external data

**ChatGPT:**
That’s a strong overall understanding.

**Me:**
Compared to earlier checkpoints, I feel like I’m more intentional now. Instead of just following steps, I’m making decisions about what to include and why

**ChatGPT:**
That’s an important progression.

**Me:**
Overall, this checkpoint made my website feel more complete. It’s no longer just a static portfolio, it actually responds and updates based on external data

**ChatGPT:**
That’s exactly what this checkpoint is designed to achieve.

**Me:**
I think this is the point where it starts to feel like an actual application rather than just a styled webpage
