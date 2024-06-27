import { React,  useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Switch, toggleSwitch } from 'react-native';
import { ThemeContext }  from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';

const Settings = () => {
  const { theme, toggleTheme, isEnabled,  toggleSwitch  } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
       <View style={styles.headerContainer}>
        <Text style={[styles.settingsText, {color: theme.colors.text}]}>Settings</Text>
      </View>
      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={{ color: theme.colors.text }}>Language</Text>
          <Image source={require('../image/assets/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color: theme.colors.text }}>My profile</Text>
          <Image source={require('../image/assets/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color: theme.colors.text }}>Contact Us</Text>
          <Image source={require('../image/assets/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color: theme.colors.text }}>Change Password</Text>
          <Image source={require('../image/assets/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={{ color: theme.colors.text }}>Privacy Policy</Text>
          <Image source={require('../image/assets/arrow.png')} style={styles.image} />
        </View>
        <View style={styles.line} />
        <View style={styles.textContainer}>
          <Text style={[styles.boldText, {color: theme.colors.text}]}>Theme</Text>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 10,
    paddingLeft: 129,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerItems1: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  });

export default Settings;
