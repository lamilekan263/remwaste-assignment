#RemWaste Coding Assignment

Project Overview

This project is a frontend application built for the RemWaste coding assignment. The application is developed using modern frontend technologies, focusing on performance, maintainability, and scalability.

Tech Stack

Vite: Used as the build tool for a fast and optimized development experience.

React (with Context API): Utilized for building the UI and managing global state efficiently.

Tailwind CSS: Used for styling to ensure a clean and responsive design.

Axios: Employed for handling HTTP requests and interacting with APIs.

Feature-Based Architecture: Implemented to ensure better code organization and scalability.

Project Structure

The project follows a feature-based architecture where each feature has its own directory containing components, hooks, and related files. This approach improves maintainability and separation of concerns.

/src
  ├── components       # Reusable UI components
  ├── context          # Global state management using Context API
  ├── features         # Feature-based modules
  ├── hooks            # Custom hooks for shared logic
  ├── services         # API calls using Axios
  ├── styles           # Global styles using Tailwind CSS
  ├── utils            # Utility functions
  ├── App.tsx          # Main application entry
  ├── main.tsx         # React entry point

Key Features

Global State Management: Used Context API to manage and share state across different components.

Efficient Styling: Leveraged Tailwind CSS for utility-first styling, improving development speed and consistency.

API Handling: Utilized Axios for making API requests, ensuring structured and maintainable network calls.

Scalability: Adopted a feature-based architecture to facilitate project scalability and ease of maintenance.

How to Run the Project

Prerequisites

Ensure you have the following installed on your system:

Node.js (latest LTS recommended)

npm or yarn

Steps to Run

Clone the repository:

git clone <repo-url>
cd remwaste-project

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser at http://localhost:5173/ (default Vite port).

