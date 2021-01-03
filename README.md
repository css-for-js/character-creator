# Character Creation Workshop

In this workshop, you'll build a Sims-style character creation screen.

In addition to skills learned in previous modules, this workshop focuses on:

- Absolute and fixed positioning
- Overflow
- Visually-hidden content

## Mockups

Desktop:

<img alt="Desktop-sized screenshot of the character creation screen" src="./docs/mockup.png" style="width: 100%;" />

For this workshop, we're only targeting desktops (although if you're so inclined, creating a mobile variant would make a great stretch goal!).

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

Every class written in a CSS module is exported and can be accessed under that same key. For this reason, it's common to use `camelCase` class names instead of `kebab-case` — it's easier to write `styles.someRandomThing` than `styles['some-random-thing']`.

If you'd prefer, you can install and use a different styling solution (though this project does come with some base styles, so it's probably more hassle than it's worth).

Some baseline global styles are provided in `/src/index.css`. You aren't expected to change anything in this file, but you may wish to check it out!

Here's a quick summary of the existing components, and what their purpose is:

- `CharacterEditor` — Our main view, with the character and its controls.
- `Character` — A thin wrapper around an SVG. You shouldn't have to tweak it at all.
- `ControlPane` — A reusable component that allows the user to change a single parameter (eg. Bodies). One for each tweakable control.
- `ButtonRow` - A component that holds a series of buttons, and manages their layout
- `ToggleButton` — A button that can be toggled on and off
- `Footer` - A generic site-wide footer
- `MaxWidthWrapper` — A generic utility component that constrains width.

## Design tokens

For now, we're still hardcoding CSS values (this is the last workshop! We'll start using CSS variables in the next module).

Feel free to copy/paste the values in this section across your application, as-needed.

### Sizing and Spacing

This app uses an 8px unit. Most spaces will be multiples of 8:

- `8px`
- `16px`
- `24px`
- `32px`
- `48px`
- `64px`
- `96px`
- `128px`

Our maximum content width is `1024px`. Sections use percentage widths, like so:

<img alt="Annotated mockup showing the overall width at 1024px, the header occupying 65%, and the control panels occupying 50%" src="./docs/sizes.png" style="width: 100%;" />

Our character should have a minimum height of 600px, and be cropped on smaller windows:

<img alt="Screenshot of a shorter Chrome window, with the character truncated at the knees" src="./docs/short-window.png" style="width: 100%;" />

### Font

1 font is used in this project: `Poppins`. It is already included in the stylesheet.

For font sizes, the `rem` unit should be used. The scale is:

- `0.875rem`
- `1rem`
- `1.25rem`
- `2.5rem`

### Color palette

There aren't many colors used in this project (much of the color comes from the character! All of that stuff is already managed for us).

Colors you'll need:

- White: hsl(0deg, 0%, 100%)
- Offwhite: hsl(180deg, 25%, 92%)
- Light gray: hsl(195deg, 20%, 86%)
- Dark gray: hsl(0deg, 0%, 30%)
- Offblack: hsl(0deg, 0%, 5%)

## Submissions

**Workshops are submitted through the course platform.** Commit your changes, push them to your fork, and submit the link by clicking the "Complete lesson" button on the workshop page.

If you're not comfortable with Git, you can upload a `.zip` file using Dropbox or Google Drive, and paste a link to the public file instead.
