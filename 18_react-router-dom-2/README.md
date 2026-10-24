# Day 18 — Advanced React Router

## Overview
Practised advanced React Router concepts by creating nested routes, dynamic routes, navigation controls, and a custom 404 page.

## Features
- Nested routes for About, Dashboard, and Products.
- Dynamic contact detail routes using URL parameters.
- Programmatic navigation with `useNavigate()`.
- Current location information using `useLocation()`.
- Custom Page Not Found (404) page.
- Reusable Navbar and Footer components.
- Tailwind CSS styling.

## Concepts Learned
- `Routes` and `Route`
- Nested routes and index routes
- Dynamic URL parameters (`:id`)
- `useNavigate()`
- `useLocation()`
- `useParams()`
- `Outlet`
- Catch-all routes using `*`

## Example Routes
- `/` — Home
- `/about` — About
- `/about/dashboard` — Dashboard
- `/contact` — Contact
- `/contact/101` — Contact Details
- `/product/men` — Men's Products
- `/unknown` — Page Not Found

## Tech Stack
- React.js
- React Router DOM
- JavaScript
- Tailwind CSS
- Vite