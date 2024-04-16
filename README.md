# React Native Firebase Authentication App

This project is a React Native application that demonstrates user authentication using Firebase Authentication.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login)
- Firebase integration for authentication
- Redux state management

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v14 or later)
- npm or Yarn
- React Native development environment set up
- Firebase account and a project set up in the Firebase Console

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up Firebase:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication in the Firebase Authentication section.
   - Copy your Firebase configuration (apiKey, authDomain, etc.) from the Firebase Console.
   - Update the Firebase configuration in `src/firebase/firebaseConfiguration.js`.

## Usage

1. Start the Metro bundler:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Run the app on a device or emulator:

   ```bash
   npm run android
   # or
   npm run ios
   ```

## Folder Structure

```
your-project/
├── android/
├── ios/
├── src/
│   ├── components/
│   ├── screens/
│   ├── redux/
│   │   ├── authSlice.js
│   │   ├── store.js
│   └── firebase/
│       └── firebaseConfiguration.js
├── App.js
└── README.md
```

## Dependencies

- React Native
- Firebase SDK
- Redux Toolkit
- React Navigation

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you find any bugs or have suggestions for improvements.


