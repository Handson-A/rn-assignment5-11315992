import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useContext(ThemeContext);

  const transactions = [
    { id: '1', image: require('../image/assets/apple.png'), title: 'Apple', subtitle: 'Entertainment', amount: '-$200' },
    { id: '2', image: require('../image/assets/spotify.png'), title: 'Spotify', subtitle: 'Music', amount: '-$20' },
    { id: '3', image: require('../image/assets/moneyTransfer.png'), title: 'Money Transfer', subtitle: 'Transactions', amount: '$88' },
    { id: '4', image: require('../image/assets/grocery.png'), title: 'Grocery', subtitle: 'Shopping', amount: '-$40' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../image/assets/profile.png')} style={styles.profileImage} />
          <View>
            <Text style={{ color: theme.colors.text }}>Welcome back, </Text>
            <Text style={[styles.profileBold, { color: theme.colors.text }]}>Mr. Handson</Text>
          </View>
        </View>
        <Image source={require('../image/assets/search.png')} style={styles.searchImage} />
        </View>
      <View>
        <Image source={require('../image/assets/Card.png')} style={styles.cardImage} />
      </View>
      <View style={styles.scrollContainer}>
        <View style={styles.footerItems}>
          <Image source={require('../image/assets/send.png')} />
          <Text style={{ color: theme.colors.text }}>Sent</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../image/assets/recieve.png')} />
          <Text style={{ color: theme.colors.text }}>Receive</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../image/assets/loan.png')} />
          <Text style={{ color: theme.colors.text }}>Loan</Text>
        </View>
        <View style={styles.footerItems}>
          <Image source={require('../image/assets/topUp.png')} />
          <Text style={{ color: theme.colors.text }}>Top Up</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={{ color: theme.colors.text }}>Transactions</Text>
        <Text style={[styles.blueText, ]}>See All</Text>
      </View>
      
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.flatContainer}>
            <View style={styles.imageAndText}>
              <Image source={item.image} style={styles.transactionImage} />
              <View>
                <Text style={[styles.text, {color: theme.colors.text}]}>{item.title}</Text>
                <Text >{item.subtitle}</Text>
              </View>
            </View>
            <View>
              <Text style={item.amount.startsWith('-') ? styles.redText : styles.plusText}>
                {item.amount}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileImage:{
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
  },
  searchImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
  },

  profileBold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardImage: {
    width: 330,
    height: 220,
    marginLeft: 0,
    aspectRatio: 1.6,
    resizeMode: 'cover',
    marginTop: 30,
    borderRadius: 15,
  },
  footerItems: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  plusText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  blueText: {
    color: 'blue',
  },
  flatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 4,
    marginRight:4,
  },
  imageAndText: {
    flexDirection: 'row',
  },
  transactionImage: {
   
    width: 35,
    height: 35,
    marginRight: 15,
    borderRadius: 10,
  },

});
