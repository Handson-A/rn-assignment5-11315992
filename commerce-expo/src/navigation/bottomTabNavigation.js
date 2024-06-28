import {React, useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';
import { Image } from 'react-native';
import Home from '../screens/Homescreen';
import Settings from '../screens/settingscreen';
import myCard from '../screens/cards';
import Statistics from '../screens/stats';



const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme.colors.background,
          card: theme.colors.card,
          text: theme.colors.text,
          border: theme.colors.border,
          notification: theme.colors.notification,
        },
      }}
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../image/assets/home.png')
                : require('../image/assets/home.png'); 
            } 
            else if (route.name === 'MyCard') {
              iconName = focused
                ? require('../image/assets/myCards.png')
                : require('../image/assets/myCards.png');
             } 
             else if (route.name === 'Statistics') {
               iconName = focused
                 ? require('../image/assets/statictics.png')
                 : require('../image/assets/statictics.png');
             }
             else if (route.name === 'Settings') {
              iconName = focused
                ? require('../image/assets/settings.png')
                : require('../image/assets/settings.png');
            } 
   
            return <Image source={iconName} style={{ width: 24, height: 24 }} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MyCard" component={myCard} />
        <Tab.Screen name="Statistics" component={Statistics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;