# Frontend Mentor – FAQ Accordion Solution

This is my solution to the **FAQ Accordion** challenge on [Frontend Mentor](https://www.frontendmentor.io/).  
The challenge helped me improve my HTML, CSS, and JavaScript skills by building an interactive FAQ component.

## Table of Contents
- [Overview](#overview)  
- [The Challenge](#the-challenge)  
- [Design](#design)  
- [Links](#links)  
- [My Process](#my-process)  
- [Built With](#built-with)  
- [What I Learned](#what-i-learned)

## Overview
This project is an **interactive FAQ accordion**.  
Users can click on a question heading to toggle its answer. Only one answer is visible at a time, and the other answers automatically collapse.  
The design is clean and responsive, with a background pattern, custom fonts, and smooth show/hide transitions.

## The Challenge
Users should be able to:

- View a list of frequently asked questions (FAQ).  
- Toggle each question to show or hide its content.  
- Ensure that opening one question closes any other that was open.  
- Experience the component on different screen sizes (responsive).  
- Use accessible interaction (click) for toggling.

## Design
### Desktop Design  
![Desktop Design](./design/desktop-design.jpg)

### Mobile Design  
<img src="./design/mobile-design.jpg" width="200px" alt="Mobile design layout">

### Toggle Icons  
When a question is closed → shows the **plus** icon.  
When a question is open → shows the **minus** icon.

## Links
- **Solution URL:** [GitHub Repository](https://github.com/mlopezl/my-version-of-faq-accordion-main)  
- **Live Site URL:** [Live Demo](https://mlopezl.github.io/my-version-of-faq-accordion-main/)

## My Process
1. Built the HTML structure using semantic tags (`<article>`, `<section>`, `<header>`).  
2. Defined CSS variables for color theming and used `@font-face` to import a custom font.  
3. Styled the accordion container, titles, icons, and content.  
4. Used `.hide` class to toggle visibility of icons and content.  
5. Implemented JavaScript event listeners for click events on each question header.  
6. Created a helper function to close any currently open accordion item when another is opened.  
7. Added responsiveness with media queries to adjust layout and background for mobile.

## Built With
- **HTML5**  
- **CSS3** (Flexbox, CSS variables, media queries)  
- **JavaScript** (DOM manipulation, event listeners)

## What I Learned
- How to **toggle show/hide** of elements using JavaScript and CSS (`.hide` class).  
- How to ensure **only one accordion item is open** at a time by managing state among multiple elements.  
- How to apply a **custom font** using `@font-face`.  
- How to use **CSS variables** for a consistent design system.  
- How to make a component **responsive** using media queries.  
- How to handle DOM structure assumptions (e.g., children ordering) reliably in event handlers.

