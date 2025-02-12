# User List with Search Filter

## Description
A simple React application that fetches and displays a list of users from a public API. It includes a search functionality to filter users by name in real-time. The application handles loading and error states effectively.

## Features
- Fetches a list of users from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) on component mount.
- Displays the list of users in a structured format.
- Provides a search input to filter users by name in real-time.
- Shows a loading indicator while fetching data.
- Displays an error message if the API call fails.
- Built using functional components and React hooks (`useState`, `useEffect`).

## Technologies Used
- React
- Hooks (`useState`, `useEffect`)
- Fetch API
- CSS (for basic styling)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-list-search.git
   ```
2. Navigate to the project directory:
   ```bash
   cd user-list-search
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Usage
1. Open the application in a browser (`http://localhost:3000`).
2. Wait for the user data to load.
3. Use the search input to filter users by name.

## File Structure
```
user-list-search/
│-- src/
│   │-- components/
│   │   ├── UserList.js   # Component for displaying user list
│   │   ├── SearchBar.js  # Search input component
│   │-- App.js            # Main component
│   │-- index.js          # Entry point
│   │-- styles.css        # Styling file
│-- public/
│-- package.json
│-- README.md
```

## API Endpoint Used
- **GET** `https://jsonplaceholder.typicode.com/users` - Retrieves the list of users.

## Contributing
Feel free to fork the repository and submit pull requests with improvements or bug fixes.

## License
This project is open-source and available under the MIT License.

