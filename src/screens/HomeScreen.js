import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const imageSlider = [
  { image: require('../../assets/images/slide1.jpg') },
  { image: require('../../assets/images/slide2.jpg') },
  { image: require('../../assets/images/slide3.jpg') },
]

const newestProducts = [
  { productImage: require('../../assets/images/hat.png'), price: '$13.99', productName: 'ًWomen hat' },
  { productImage: require('../../assets/images/glass.png'), price: '$20', productName: 'Round glasses' },
  { productImage: require('../../assets/images/cow.png'), price: '$14.55', productName: 'Cowboy hat' },
  { productImage: require('../../assets/images/summer.png'), price: '$26.99', productName: 'Bowler hat' },
];

const productCategories = [
  { categoryImage: require('../../assets/images/hats.png'), categoryName: 'Hats' },
  { categoryImage: require('../../assets/images/glasses.png'), categoryName: 'Glasses' },
];

const NewestProduct = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.productImage} style={styles.productImage} />
    <Text style={styles.productName}>{item.productName}</Text>
    <Text style={styles.productPrice}>{item.price}</Text>
  </View>
);

const ProductCategories = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.categoryImage} style={styles.categoryImage} />
    <Text style={styles.categoryName}>{item.categoryName}</Text>
  </View>
);

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="notifications-outline"
          size={30}
          color="black"
        />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <FlatList
            data={imageSlider}
            renderItem={({ item }) => <Image source={item.image} style={styles.imageSlider} />}
            keyExtractor={item => item.image}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
          />
        </View>
        <View>
          <Text style={styles.sectionText}>Newest Product</Text>
          <FlatList
            data={newestProducts}
            renderItem={({ item }) => <NewestProduct item={item} />}
            keyExtractor={item => item.productName}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View>
          <Text style={styles.sectionText}>Product Categories</Text>
          <FlatList
            data={productCategories}
            renderItem={({ item }) => <ProductCategories item={item} />}
            keyExtractor={item => item.categoryName}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -10,
  },
  logoImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageSlider: {
    width: 350,
    height: 170,
    borderRadius: 10,
    marginRight: 5,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    marginRight: 20,
  },
  productImage: {
    width: 175,
    height: 200,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6,
  },
  productPrice: {
    fontSize: 16,
  },
  categoryImage: {
    width: 175,
    height: 200,
    borderRadius: 6,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});