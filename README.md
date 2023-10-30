# Real Time Zakat Manager

This project is a full-stack web application designed to calculate and manage Zakat, a form of almsgiving treated in Islam as a religious obligation or tax. The system is divided into two main parts: the backend, which handles the calculations and database interactions, and the frontend, which provides a user interface for interaction.

## Backend

The backend of the system is built using Node.js, Express, and MongoDB. It handles user authentication, Zakat calculations, and storing user data.

### Setup and Installation

1. Clone the repository to your local machine.
2. Navigate to the backend directory.
3. Run `npm install` to install the required dependencies.
4. Set up your environment variables in a `.env` file. You will need to provide your MongoDB connection string and a secret key for JWT.
5. Start the server using `npm start`.

### API Endpoints

The backend provides several API endpoints for user authentication, Zakat calculation, and data retrieval.

- **User Authentication**: Includes routes for user signup, login, and logout.
- **Zakat Calculation**: A POST endpoint to calculate Zakat based on the provided data.
- **Data Retrieval**: Endpoints to retrieve saved Zakat calculations and user data.

## Frontend

The frontend is built using React and communicates with the backend through API calls. It provides a user-friendly interface for calculating and managing Zakat.

### Setup and Installation

1. Navigate to the frontend directory.
2. Run `npm install` to install the required dependencies.
3. Start the application using `npm start`.

### Features

- **User Authentication**: Allows users to sign up, log in, and log out.
- **Dynamic Fields**: Users can add different types of assets and liabilities, and the system will calculate Zakat in real-time.
- **Data Management**: Users can save their Zakat calculations and view them later.

### Integration with Backend

To integrate the frontend with the backend:

1. Set up the API service in the frontend to make HTTP requests to the backend endpoints.
2. Update the frontend components to call the API service and display the results.

## Conclusion

This Zakat Management System provides a comprehensive solution for calculating and managing Zakat, with a focus on user experience and data management. Whether you are an individual looking to calculate your Zakat or an organization managing Zakat for multiple users, this system provides the tools you need.
