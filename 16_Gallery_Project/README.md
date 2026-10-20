# Day 16 — Gallery Project

## Overview
Built a responsive image gallery using React, Axios, and Tailwind CSS. The application fetches images from the Picsum Photos API and displays them in reusable cards.

## Features
- Fetch image data using Axios.
- Use `useEffect` to fetch data when the page index changes.
- Display images and author names using reusable `Card` components.
- Implement **Next** and **Prev** pagination.
- Show a loading message while image data is being fetched.
- Open an image's source page in a new tab.

## Concepts Learned
- `useState` for managing image data and pagination.
- `useEffect` with dependencies.
- API integration using Axios and `async/await`.
- Rendering lists with `.map()`.
- Passing data through props.
- Conditional rendering.
- Tailwind CSS for styling.

## API
`https://picsum.photos/v2/list?page=1&limit=21`

## Tech Stack
- React.js
- JavaScript
- Axios
- Tailwind CSS
- Picsum Photos API