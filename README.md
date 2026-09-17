# Student Feedback Form

A responsive React application for collecting and displaying student feedback. The app runs entirely in the browser and keeps submitted feedback in React state.

## Features

- Student name text input
- Course and subject dropdowns
- Accessible 1-to-5 rating radio buttons
- Required-field validation
- Exact empty-feedback validation message: `Please enter your feedback.`
- Success message: `Feedback Submitted Successfully`
- Submitted feedback display with student name, course, subject, rating, and feedback
- Submit another feedback entry without a backend
- Responsive black-and-white interface for desktop and mobile

## Technologies

- React.js
- Vite
- JavaScript
- CSS
- GitHub Actions
- GitHub Pages

## Project Structure

```text
Feedback_Form/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── FeedbackForm.jsx
│   │   └── FeedbackDisplay.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/SheikhMahmudulHassanSabir/Feedback_Form.git
cd Feedback_Form
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173/`.

## Build

```bash
npm run build
```

The production files are generated in the `dist` directory.

## GitHub Pages Deployment

The repository includes `.github/workflows/deploy.yml`. Every push to the `main` branch installs dependencies, builds the app, uploads `dist` as a Pages artifact, and deploys it with the official GitHub Pages Actions.

To enable Pages for the repository:

1. Open the repository on GitHub.
2. Go to **Settings**, then **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push changes to `main` or run the workflow manually from the **Actions** tab.

The Vite base path is configured for this repository, so the expected live website URL is:

https://sheikhmahmudulhassansabir.github.io/Feedback_Form/

## Git Commands

```bash
git add .
git commit -m "Deploy student feedback form to GitHub Pages"
git push origin main
```

## Data and Privacy

This application has no backend, database, API server, or external data storage. Feedback is kept in React state only and resets when the page is refreshed.
