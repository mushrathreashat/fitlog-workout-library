# FitLog — Workout Library

FitLog is a dark, responsive workout library and daily training planner designed from the provided Figma layout.

## Project Overview

FitLog helps users explore workouts, view detailed exercise information, create a daily workout plan, and save exercises for later.

## Technologies Used

- Next.js 14
- React
- Next.js App Router
- Tailwind CSS
- Lucide React
- REST API
- Browser localStorage

## Key Features

1. Responsive Figma-inspired dark gym interface.
2. Workout library powered by the FitLog REST API.
3. Search and sort workouts by duration, calories, or rating.
4. Dedicated workout detail pages with instructions and specifications.
5. Add workouts to Today's Plan with a five-lift limit.
6. Save workouts for later.
7. Persistent plan and saved data using localStorage.
8. Live Exercises, Minutes, and Calories statistics.
9. Mark planned workouts as completed or remove them.
10. Toast notifications for workout actions.
11. Loading states and custom 404 page.
12. Responsive navigation for mobile, tablet, and desktop.

## Pages

- / — Workout Library
- /workouts/[id] — Workout Details
- /my-plan — Today's Plan and Saved Workouts
- Unknown routes — Custom 404 page

## API

All workout data:

https://api.abcz.workers.dev/api/fitlog

Single workout:

https://api.abcz.workers.dev/api/fitlog/:id

## Local Setup

Install dependencies:

```bash
npm install