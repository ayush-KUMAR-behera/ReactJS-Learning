# Day 15 - useEffect Hook

## Learned

- What is `useEffect`?
- Side Effects in React
- `useEffect` Syntax
- Dependency Array
- State Changes and Effects
- Synchronizing React with Browser APIs
- Updating `document.title`
- Controlled Inputs with `useState`

## Practice

### Demo 1 — Dependency Array
- Created two state variables: `a` and `b`
- Observed how changing `a` differs from changing `b`
- Used `[b]` to control when the effect runs

### Demo 2 — Document Title Sync
- Created a controlled text input
- Counted characters using `text.length`
- Updated the browser tab title whenever the text changed

## Key Concept

`useEffect` lets a component synchronize with external systems after rendering.

```jsx
useEffect(() => {
  // Side effect
}, [dependencies]);
```

- No dependency array: runs after every committed render.
- Empty array `[]`: runs after the initial mount, with an extra development run possible in Strict Mode.
- `[value]`: runs after the initial mount and when `value` changes.

## Tech Stack

- React.js
- JavaScript
- Vite