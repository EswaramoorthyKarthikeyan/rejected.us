# Rejected.us - Share Your Rejection Stories

This project is a simple web application that displays a collection of "rejection stories" from various individuals, aiming to normalize and share these experiences. It was originally bootstrapped with Create React App.

## Project Structure

The main components of this application are:

-   `public/index.html`: The main HTML file.
-   `src/index.js`: The entry point for the React application.
-   `src/App.js`: The main application component that lays out the page and renders the list of stories.
-   `src/Header.js`: The header component for the application.
-   `src/Footer.js`: The footer component, including links for contributing.
-   `src/Story.js`: A component responsible for rendering an individual story card. It takes a `story` object as a prop.
-   `src/data/stories.js`: This file exports an array of JavaScript objects, where each object represents a story. Each story object contains details like `fullName`, `handle`, `avatar`, `story`, etc.

## How to Contribute a Story

We welcome contributions! To add your own rejection story:

1.  Fork the repository.
2.  Open the `src/data/stories.js` file.
3.  Add a new story object to the array, following the existing format. Make sure to include:
    *   `fullName`: Your full name.
    *   `handle`: Your Twitter/X handle (or other relevant social media handle).
    *   `website`: A link to your website or social media profile.
    *   `bio`: A short bio.
    *   `avatar`: The filename of your avatar image (e.g., `yourname.jpg`). Place this image in the `public/images/` directory.
    *   `story`: Your rejection story.
    *   `double`: (Optional) Set to `true` if you think your story might benefit from a wider display format (currently not implemented but planned for future).
4.  Create a new branch for your changes.
5.  Commit your changes and open a pull request against the main repository.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

-   [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
-   [React documentation](https://reactjs.org/)
