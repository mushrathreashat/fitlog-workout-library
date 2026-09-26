# FitLog — Workout Library

A dark, responsive workout library and daily training planner built to match the provided Figma design.

## Technologies
- Next.js App Router
- React
- Tailwind CSS
- Lucide React icons
- FitLog REST API
- localStorage for plan/saved persistence

## Features
1. Responsive Figma-inspired dark UI with lime accent.
2. API-powered workout library with loading skeletons.
3. Workout detail pages with specs and instructions.
4. Today's Plan with a five-lift cap, live metrics and done/remove actions.
5. Saved workouts with persistence across reloads.
6. Search and sort by duration, calories or rating.
7. Toast notifications for workout actions.
8. Custom 404 page and mobile navigation.

## API
- All data: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Build check
```bash
npm run build
```

## Deployment
Import the GitHub repository into Vercel and deploy with the default Next.js settings.
