# Character Creation Workshop

In this workshop, you'll build a Sims-style character creation screen.


## Mockups

Desktop:

<img alt="Desktop-sized screenshot of the character creation screen" src="./docs/mockup.png" style="width: 100%;" />

For this workshop, we're only targeting desktops (although if you're so inclined, creating a mobile variant would make a great stretch goal!).

> Protip: If you're reading this in VS Code, open the Command Palette (Cmd + Shift + P) and select “Markdown: Open Preview to the Side”. That way, you can see all the images in this document!

## Setup Instructions

This project uses create-react-app.

Start by installing dependencies:

```
npm install
```

Boot up a dev server:

```
npm run start
```

You should be able to access the application at `http://localhost:3000`.

## Project structure and context

This project is built with React.

**All of the functionality has already been built.** Your job is to add the CSS. Some light tweaking of the JSX will be required, but only in service of styling and accessibility goals.

This project uses **CSS Modules**. CSS modules are ultimately very similar to vanilla CSS, but the classes are applied in JS. Here's an example:

```css
/* Something.module.css */
.wrapper {
  width: 500px;
}
```

```js
/* Something.js */
import styles from './Something.module.css';

function Something() {
  return (
    <div className={styles.wrapper}>
      I'll be 500px wide!
    </div>
  );
}
```

Additionally, a few global styles can be found in `src/index.css`.

## Exercises

### Exercise 1: Fix footer links

Let's start with a small detail: The footer links are unreadable:

<img alt="Side-by-side comparison of the current footer vs. the ideal one" src="./docs/footer-fix.png" style="max-width: 500px" />

### Exercise 2: Layout adjustments

Next, let's tackle the biggest visual issue: the layout.

We have a `MaxWidthWrapper` constraining the max width, but everything is super wide within it.

Our header should be 65% of the available width, and our control-panel column should be 50%.

<img alt="Annotated mockup showing the overall width at 1024px, the header occupying 65%, and the control panels occupying 50%" src="./docs/sizes.png" style="width: 100%;" />

The character (the big illustration) should use fixed positioning, and it should occupy the space cleared by the above width tweaks.

Give the character a minimum height of 500px. On smaller windows, this means the character won't fit in the viewport:

<img alt="Screenshot of a shorter Chrome window, with the character truncated at the knees" src="./docs/short-window.png" style="width: 100%;" />

### Exercise 3: Overflow

Each control panel features a number of customizations. For control panels with too many options, a horizontal scrollbar should be introduced:

<img alt="Close-up screen recording of the overflow area in the control-panel" src="./docs/overflow.gif" style="width: 100%;" />

### Exercise 4: Perspective decoration

To help add a bit of perspective, a light gray bar should extend across the bottom 40% of the screen:

<img alt="Screenshot of the mockup, showing the light gray bar" src="./docs/mockup.png" style="width: 100%;" />

It should sit behind the avatar (and both the perspective bar and the character should sit below the footer):

<img alt="Screen recording, showing how the character and stripe don't move as the page is scrolled" src="./docs/scroll.gif" style="width: 640px; max-width: 100%" />

For bonus points, solve this challenge without setting any z-indexes.

### Exercise 5 (Stretch): Add a "Create" button

## Color palette

There aren't many colors used in this project (much of the color comes from the character! All of that stuff is already managed for us).

Colors used:

- White: hsl(0deg, 0%, 100%)
- Offwhite: hsl(180deg, 25%, 92%)
- Light gray: hsl(195deg, 20%, 86%)
- Dark gray: hsl(0deg, 0%, 30%)
- Offblack: hsl(0deg, 0%, 5%)

## Submissions

**Workshops are submitted through the course platform.** Commit your changes, push them to your fork, and submit the link by clicking the "Complete lesson" button on the workshop page.

If you're not comfortable with Git, you can upload a `.zip` file using Dropbox or Google Drive, and paste a link to the public file instead.
