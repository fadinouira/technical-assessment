# Technical assessment - Fadi NOUIRA

This React app, created entirely from scratch without external packages except for React, aims to streamline the search for a starting point and display stop/location matches for journey planning. The primary feature includes a custom dropdown for search results, allowing users to select a starting point conveniently.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Technical Decisions](#technical-decisions)

## Features

- Users can enter text into a search field to initiate a search.
- The app sends the search text to an EFA server using the specified API.
- Search results are displayed in a dropdown list.
- Users can search for and select a starting point from the list.
- CORS issues have been resolved to enable communication with the EFA server.

## Requirements

- Node.js (v18.17+)
- Yarn (v1.22.19+)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/fadinouira/technical-assessment
```

2. Copy the example env file and make the required configuration changes in the .env file

```bash
cp .env.example .env
```

3. Start the local development server

```bash
yarn start
```

You can now access the server at http://localhost:5173

---

## Technical Decisions

### Choice of Technologies

- **React and Vite:** The application is developed using React for its declarative and component-based structure. Vite, chosen as the build tool, enhances development speed and efficiency through fast bundling and hot module replacement capabilities.

### Implementation Details

- **Custom Dropdown Component:** Implemented a custom dropdown component using `ReactDOM.createPortal`. This technique allows rendering the dropdown outside the parent DOM hierarchy, providing flexibility and avoiding potential styling conflicts.

- **API Integration:** The application uses the `fetch` function to send search text to an EFA server via a specified API. This choice was made for its simplicity and broad browser support. The integration is designed to be modular and extendable for future enhancements.

- **State Management:** Application state is managed using React hooks for simplicity and reactivity, ensuring a predictable and manageable state across the application.

- **Styling:** Styled components are employed for a clean and responsive user interface. The styling approach prioritizes simplicity and maintainability, utilizing standard CSS.

### CORS Issue Resolution

- CORS issues during development have been temporarily resolved by using the "Allow CORS: Access-Control-Allow-Origin" Chrome extension. This extension is recommended for local testing only, and in a production environment, CORS should be appropriately configured on the server side.

### Node.js and Yarn Versions

- The project is developed and tested with Node.js (v18.17+) and Yarn (v1.22.19+). Ensure you have these versions or later for compatibility.
