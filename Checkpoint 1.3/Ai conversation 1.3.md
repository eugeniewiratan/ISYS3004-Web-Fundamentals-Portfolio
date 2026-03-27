**Me:**
Okay I’m up to checkpoint 1.3 now and I get what the requirement is saying but I’m still confused on how to actually apply JavaScript to my website without messing everything up 😭

**ChatGPT:**
What part are you most unsure about?

**Me:**
Probably what features to even add. I know it says I need at least two interactive features, but I don’t want to choose something too complicated and then not be able to explain it.

**ChatGPT:**
That’s a good way to think about it. It’s better to choose features that are simple, relevant to your site, and easy to explain.

**Me:**
Yeah exactly. I don’t want it to look overdone and then I freeze when the tutor asks me what the code does.

**ChatGPT:**
Since your site is already a personal portfolio, a theme toggle and a show/hide project details feature would fit well.

**Me:**
Wait that actually makes sense. The theme toggle matches the style of my site and the project details thing matches the projects page.

**ChatGPT:**
Yes, and both involve DOM manipulation and user events, which is what the checkpoint wants.

**Me:**
Okay but I’m still confused how JavaScript connects to HTML. Like do I just write a script tag and start coding random stuff?

**ChatGPT:**
You should create a separate JavaScript file, then link it at the bottom of your HTML using a script tag.

**Me:**
So like `js/main.js` and then `<script src="js/main.js"></script>`?

**ChatGPT:**
Exactly.

**Me:**
Okay I did that, but nothing happened at first and I thought I broke it already 😭

**ChatGPT:**
Did you add any elements in the HTML for JavaScript to target?

**Me:**
Ohhh wait no, I only made the file. I forgot the button part.

**ChatGPT:**
Yes, JavaScript needs something to interact with, like a button with an ID or class.

**Me:**
Okay so for the theme thing I added a button in the nav with `id="theme-toggle"` because I wanted it on every page.

**ChatGPT:**
That’s a good choice because it keeps the feature consistent across your site.

**Me:**
Yeah I wanted it to feel like a real website, not just one random page with JavaScript for no reason.

**ChatGPT:**
That’s good design thinking.

**Me:**
Then I was trying to understand what actually happens when I click it. I saw `addEventListener` in the examples but I didn’t fully get it.

**ChatGPT:**
`addEventListener` listens for an event, like a click, and then runs a function when that event happens.

**Me:**
So basically it’s like saying “when this button is clicked, do this”?

**ChatGPT:**
Exactly.

**Me:**
Okay that makes way more sense. So for the theme toggle, the “do this” part is changing the class on the body?

**ChatGPT:**
Yes. You can use `classList.toggle()` to add or remove a class like `dark-mode`.

**Me:**
I remember that from CSS. So then the JS isn’t really styling it directly, it’s just switching the class, and CSS handles the appearance?

**ChatGPT:**
Exactly. JavaScript controls the behaviour, and CSS controls the visual design.

**Me:**
Okay I actually like that because it feels cleaner.

**ChatGPT:**
It is cleaner and easier to maintain.

**Me:**
Then I tested it and it worked, but when I refreshed the page it went back to normal, which annoyed me because I wanted the theme to stay.

**ChatGPT:**
That’s where localStorage helps. It lets you save the user’s theme choice in the browser.

**Me:**
Yeah I asked about that because I saw it in the example but didn’t get why it mattered. Now I do, because otherwise it just resets every time.

**ChatGPT:**
Yes, and that also makes your feature feel more complete.

**Me:**
Okay so then I added localStorage and it finally stayed after refreshing. That part felt really satisfying actually.

**ChatGPT:**
That’s a good sign you understood the feature, not just copied it.

**Me:**
Then for the second feature, I was thinking of doing a mobile menu, but I felt like that would be more annoying to explain.

**ChatGPT:**
That’s fair. The project details toggle is simpler and still meets the requirements.

**Me:**
Yeah so I made a projects page and added project sections with buttons like “Show Details”.

**ChatGPT:**
Good. Then each button can be linked to a hidden section of content.

**Me:**
That part confused me too at first. I didn’t know how the button knows which details box to open.

**ChatGPT:**
You can use a `data-target` attribute on the button and match it to the ID of the hidden content.

**Me:**
Ohhh right, so each button points to its own details section. That actually helped me understand it better than just hardcoding everything.

**ChatGPT:**
Yes, it’s more scalable and cleaner.

**Me:**
I also liked that because if I add another project later I can just reuse the same structure.

**ChatGPT:**
Exactly.

**Me:**
At first the details were always visible because I forgot to add `hidden` in the HTML.

**ChatGPT:**
That would do it.

**Me:**
Yeah then once I added `hidden`, the button started making more sense because now it actually reveals something.

**ChatGPT:**
And then your JavaScript can add or remove that attribute.

**Me:**
Yeah, I used that instead of doing random inline styles because I remembered the checkpoint said use `addEventListener` and not inline handlers.

**ChatGPT:**
That’s correct.

**Me:**
I’m trying to keep it clean because I know the tutor might literally ask me why I did it this way.

**ChatGPT:**
And you’ll be able to explain that you separated structure, styling, and behaviour.

**Me:**
Okay that sounds way better than just saying “I copied it.”

**ChatGPT:**
Yes, because you’re making decisions based on how your site works.

**Me:**
Then I had another problem where the theme toggle made one of my buttons look weird and the text wasn’t visible anymore.

**ChatGPT:**
That sounds like a CSS contrast issue in dark mode.

**Me:**
Yeah it turned out the button background was too light for how I set up the dark mode styles. So I changed the dark mode button colours to match the monochromatic theme better.

**ChatGPT:**
That’s a good adjustment. It shows you tested the feature rather than just assuming it worked.

**Me:**
I feel like that’s what took the longest honestly, not the JavaScript itself but making sure it still fit the design of my site.

**ChatGPT:**
That’s normal. Interactivity still has to work with your design.

**Me:**
I also made sure the theme toggle button is in the nav on every page, because otherwise it would only work on one page and that felt inconsistent.

**ChatGPT:**
That was the right choice.

**Me:**
Okay so basically for checkpoint 1.3 I added two JavaScript features that actually suit my portfolio instead of just random extras.

**ChatGPT:**
Yes. You added a theme toggle and a project details toggle, both using DOM manipulation and event handling.

**Me:**
And I used `addEventListener`, `classList.toggle()`, localStorage, and the hidden attribute.

**ChatGPT:**
Exactly.

**Me:**
Okay I feel a lot better now because before this I just thought JavaScript meant making things move around and I didn’t really get how it connected to the HTML and CSS.

**ChatGPT:**
Now you can explain that HTML is the structure, CSS is the design, and JavaScript adds behaviour.

**Me:**
Yeah and I think this checkpoint actually made that click for me more than the other ones did.
