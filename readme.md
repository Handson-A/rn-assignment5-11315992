# Commerce-Expo

This is a UI mockup assignment of a transaction application built with React Native and Expo. It demonstrates how to toggle between light and dark themes across multiple screens using a settings toggle button.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Screens](#screens)
7. [Theme Toggle Functionality](#theme-toggle-functionality)
8. [Assets](#assets)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

Commerce-Expo is a React Native app designed to showcase a UI mockup for a transaction application. The main feature of this app is the ability to switch between light and dark themes using a toggle button in the settings screen.

## Features

- **Light and Dark Theme Support**: Easily switch between light and dark themes from the settings screen.
- **Navigation**: Seamless navigation across different screens.
- **Responsive Design**: Adapts well to different screen sizes and orientations.

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/commerce-expo.git
   cd commerce-expo
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the app**:

   ```bash
   expo start
   ```

4. **Run on your device**:
   - For iOS: Press `i` in the terminal to open the app in the iOS simulator.
   - For Android: Press `a` in the terminal to open the app in the Android emulator.

## Usage

1. **Open the App**: Launch the app on your preferred device or emulator.
2. **Navigate Between Screens**: Use the bottom tab navigator to switch between different screens.
3. **Toggle Theme**: Go to the settings screen and use the switch to toggle between light and dark themes.

## Project Structure

The project is organized as follows:

```
commerce-expo
|_ expo
|_ node_modules
|_ src
  |_ constants
     |_ themes.js
  |_ image
     |_ assets
  |_ navigation
  |  |_ bottomTabNavigation.js
  |_ screens
     |_ homescreen.js
     |_ settingscreen.js
     |_ stats.js
     |_ cards.js
|_ App.js
|_ .gitignore
|_ app.json
|_ babel.config.js
|_ package.json
|_ package-lock.json
|_ tsconfig.json
|_ README.md
```

### Folders and Files:

- **`src/constants`**: Contains constant values used throughout the app.
- **`src/themes.js`**: Defines the light and dark theme configurations.
- **`src/image/assets`**: Contains all the images used in the app.
- **`src/navigation/bottomTabNavigation.js`**: Handles the bottom tab navigation logic.
- **`src/screens`**: Contains all the screen components (`homescreen.js`, `settingscreen.js`, `stats.js`, `cards.js`).
- **`App.js`**: The main entry point of the application.
- **`app.json`**, **`babel.config.js`**, **`package.json`**, **`package-lock.json`**, **`.gitignore`**, **`tsconfig.json`**: Configuration files for the project.

## Screens

1. **Home Screen** (`homescreen.js`):

   - Displays a list of recent transactions.
   - Provides options for quick actions like sending and receiving money.

2. **Settings Screen** (`settingscreen.js`):

   - Contains the theme toggle switch to switch between light and dark modes.

3. **Stats Screen** (`stats.js`):

   - Displays various financial statistics and insights.

4. **Cards Screen** (`cards.js`):
   - Shows a list of user’s cards and allows for card management.

## Theme Toggle Functionality

The app includes a theme toggle feature that allows users to switch between light and dark themes. This is implemented in the `settingscreen.js` file and affects all screens.

### How It Works

1. **ThemeContext**: A context is created to manage the current theme.
2. **Toggle Button**: A switch component is used in the `settingscreen.js` to change the theme.
3. **Theme Application**: The selected theme is applied globally to all components and screens.

## Assets

## Assets for this project, including images and icons, are available [here](https://drive.google.com/file/d/1VjbkuZA1iLma19j15Kv94lQkHaXGA6hV/view).

### screenshots

![Homescreen in light theme](<Screenshot 2024-06-28 014918.png>) ![settingscreen in light theme](<Screenshot 2024-06-28 014904.png>) ![Settingscreen in dark theme](<Screenshot 2024-06-28 014846.png>) ![homescreen in dark theme](<Screenshot 2024-06-28 014822.png>)
