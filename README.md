# IPN Cuauhtémoc Website

Welcome to the repository for the IPN Cuauhtémoc website. Our team is focused on CanSat and other aerospace-related competitions. This site is built using React, Bootstrap, and Vite.

## Table of Contents

- [IPN Cuauhtémoc Website](#ipn-cuauhtémoc-website)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [Folder Structure](#folder-structure)
  - [Available Scripts](#available-scripts)

## Project Overview

This website serves as the online presence of the IPN Cuauhtémoc team, showcasing our projects, team members, and achievements in aerospace competitions.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive design.
- **Vite**: A fast build tool and development server.
- **Alias**: An alias `@` has been defined for the `src` folder to simplify imports.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local development machine:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher) or **yarn** (version 1.22 or higher)

### Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/ipn-cuauhtemoc-website.git
    cd ipn-cuauhtemoc-website
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Running the Development Server

Start the development server:
    ```sh
    npm run dev
    ```

The site will be available at http://localhost:5173.

## Folder Structure

Here is an overview of the folder structure:

ipn-cuauhtemoc-website/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── routes/          # File to rerouting Single Page Application
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point for React
├── .gitignore
├── index.html           # HTML template
├── package.json
└── README.md

## Available Scripts
In the project directory, you can run:

- npm run dev or yarn dev: Starts the development server.
- npm run build or yarn build: Builds the app for production.
- npm run serve or yarn serve: Serves the built app (after build).

