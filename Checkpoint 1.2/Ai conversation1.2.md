**Me:**
Okay I moved on to checkpoint 1.2 but I’m lowkey confused 😭 like I know I have to use CSS but I don’t know where to even start

**ChatGPT:**
That’s normal. Start by linking an external stylesheet, then build your styles step by step.

**Me:**
Wait do I have to use external CSS? I was thinking of just putting styles in the HTML

**ChatGPT:**
For your assignment, external CSS is preferred. It keeps your code cleaner and easier to maintain.

**Me:**
Okay I made a css folder and a styles.css file but nothing is changing on my page…

**ChatGPT:**
How did you link your CSS file?

**Me:**
I wrote `<link rel="stylesheet" href="styles.css">`

**ChatGPT:**
If your file is inside a css folder, it should be `css/styles.css`.

**Me:**
Oh my god… it works now I thought my whole thing was broken oh my days

**ChatGPT:**
That’s one of the most common issues.

**Me:**
Okay now I don’t know what to style first, like everything looks plain and I don’t know what order to do things

**ChatGPT:**
Start with global styles like body, font, and box-sizing, then move to layout elements like header, nav, and main.

**Me:**
So like I shouldn’t just randomly style sections?

**ChatGPT:**
You can, but it becomes messy. Structure helps a lot.

**Me:**
Yeah I think I was just randomly trying things before and it got confusing

**ChatGPT:**
That’s very common when starting CSS.

**Me:**
Okay I added font, colours, and spacing first. It already looks a bit better

**ChatGPT:**
Good. That’s your base layer.

**Me:**
Now I’m trying to make it look more like a portfolio I saw on YouTube, with like image on one side and text on the other

**ChatGPT:**
That layout is usually done with Flexbox or Grid.

**Me:**
I tried grid but I kind of guessed the values 😭

**ChatGPT:**
That’s okay. As long as you understand it creates columns.

**Me:**
Yeah I did two columns and it looks okay on my laptop, but when I make the screen smaller everything gets squished

**ChatGPT:**
You need a media query to adjust layout for smaller screens.

**Me:**
Is that the `@media` thing? I’ve seen it but never used it properly

**ChatGPT:**
Yes, for example `@media (max-width: 768px)` lets you change styles for smaller screens.

**Me:**
Okay I added that and made it one column… wait this actually looks like a mobile layout now

**ChatGPT:**
That means your design is responsive.

**Me:**
Okay that actually makes sense now, before it just looked broken on small screens

**ChatGPT:**
That’s exactly what responsive design fixes.

**Me:**
Also I kept seeing `box-sizing: border-box` everywhere so I added it but I didn’t really understand it

**ChatGPT:**
It changes how width is calculated so padding and border are included.

**Me:**
Ohhh wait that explains why my layout stopped shifting weirdly when I added padding

**ChatGPT:**
Yes, it makes spacing more predictable.

**Me:**
Okay now I’m styling my nav and sections, I added spacing and some background colours so it looks more like sections instead of everything being flat

**ChatGPT:**
That’s good. You’re creating visual hierarchy.

**Me:**
I also added hover effects on links so it doesn’t feel dead

**ChatGPT:**
That improves user interaction and usability.

**Me:**
At first I was just copying the YouTube layout but now I’m kind of adjusting it to match my own style

**ChatGPT:**
That’s exactly what you should be doing.

**Me:**
Yeah I changed the colours to more neutral and minimal instead of what they used

**ChatGPT:**
That helps make it your own design.

**Me:**
Okay so for checkpoint 1.2 I basically:

* linked external CSS
* structured my styles properly
* styled layout and sections
* and made it responsive with media queries

**ChatGPT:**
Yes, those are the key requirements.

**Me:**
Okay I feel way better now, at first I was just randomly changing things and hoping it works 

**ChatGPT:**
Now you understand what each part is doing, which is the goal.
**Me:**
Okay I went back to my checkpoint 1.2 because something felt off 😭 my site looked really plain and also kind of copy-paste from the tutorial

**ChatGPT:**
What part didn’t feel right?

**Me:**
The colours… everything was just white and it didn’t match how I usually like things. It felt too basic

**ChatGPT:**
So you want to change the design direction?

**Me:**
Yeah I want it more minimal but darker, like monochromatic instead of just white background

**ChatGPT:**
That’s a good approach. You can use different shades of black, grey, and off-white instead of one flat colour.

**Me:**
Okay I tried changing the background to a really dark colour but then my text disappeared 😭

**ChatGPT:**
That means you need to adjust your text colour as well so there’s enough contrast.

**Me:**
Ohhh right… I forgot text was still dark. I changed it to a lighter grey and now it actually looks readable

**ChatGPT:**
Good. Monochromatic design still needs contrast to work properly.

**Me:**
Yeah now I’m using like dark background, grey text, and white headings and it looks way better

**ChatGPT:**
That’s a solid hierarchy.

**Me:**
Also I realised I used the same photo on both my homepage and about page… it looked repetitive

**ChatGPT:**
It’s better to use different images to distinguish the pages.

**Me:**
Yeah I added a second image and now homepage and about page feel more separate

**ChatGPT:**
That improves the overall structure and user experience.

**Me:**
I had to fix my image paths again though because it wasn’t loading at first 😭

**ChatGPT:**
That usually means the file name or folder path doesn’t match exactly.

**Me:**
Yeah I renamed them to like home-photo.jpeg and about-photo.jpeg and put them in the images folder

**ChatGPT:**
That’s cleaner and easier to manage.

**Me:**
Now I’m adjusting spacing and layout again because when I changed colours everything looked kind of cramped

**ChatGPT:**
That’s normal. Colour changes often make spacing issues more noticeable.

**Me:**
Yeah I added more padding to sections and rounded the corners a bit and now it looks more like a proper layout

**ChatGPT:**
That helps create visual separation between sections.

**Me:**
I also kept the grid layout for the hero section but made sure it switches to one column on smaller screens

**ChatGPT:**
That ensures your site remains responsive.

**Me:**
Yeah I tested it by resizing the browser and it actually looks like a mobile layout now instead of breaking

**ChatGPT:**
That’s exactly what the media query is for.

**Me:**
At first I was just following the YouTube design exactly, but now I’ve changed the colours, images, and spacing to match my style more

**ChatGPT:**
That shows you understand what you’re doing rather than just copying.

**Me:**
So for checkpoint 1.2 I ended up:

* using an external CSS file
* restructuring my styles properly
* making the layout responsive
* and redesigning it with a monochromatic colour scheme

**ChatGPT:**
Yes, that meets the requirements and shows your own design decisions.

**Me:**
Okay yeah this feels way more like my own site now instead of just something I followed step by step

