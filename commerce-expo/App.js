import React from 'react';
import ThemeProvider  from './src/context/ThemeContext';
import BottomTabNavigator from './src/navigation/bottomTabNavigation';

const App = () => {
  return (
    <ThemeProvider>
      <BottomTabNavigator />
    </ThemeProvider>
  );
};

export default App;

