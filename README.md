# Reddit Viewer

Reddit Viewer is a React application that displays popular posts from the Reddit website. It fetches data from the Reddit API and presents the post titles along with any associated images or videos.

## Features

- Fetches popular posts from Reddit using the Reddit API
- Displays post titles and associated images or videos
- Allows users to click on post titles to open the corresponding Reddit post in a new tab

## Installation

1. Clone the repository:

   ```shell
   git clone <repository-url>

2. Install the dependencies:

cd reddit-viewer
npm install

3. Start the development server:

npm start
The app will be running at http://localhost:3000.

#Usage
Upon launching the app, it will fetch popular posts from Reddit and display them on the screen.
You can click on a post title to open the corresponding Reddit post in a new tab.
If a post contains an image or video, it will be displayed alongside the title.
Scroll down to load more posts automatically using infinite scrolling.

#Technologies Used
React
Redux (for state management)
Axios (for making API requests)
Enzyme (for testing)
CSS (for styling)

#Folder Structure
The project structure is organized as follows:

public/: Contains the HTML template and static assets.
src/: Contains the React components, Redux setup, actions, reducers, and styles.
components/: Contains reusable React components.
redux/: Contains the Redux setup, actions, and reducers.
styles/: Contains CSS styles for the app.
App.js: The main component that renders the app.
index.js: The entry point of the app.

#Testing
To run the tests, use the following command:

npm test
The tests are written using the Enzyme testing utility and cover the basic functionality of the components.

#Contributing
Contributions to this project are welcome. Feel free to open issues and submit pull requests.

#License
This project is licensed under the MIT License.