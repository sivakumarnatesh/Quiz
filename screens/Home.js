import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <View style={styles.ImageContainer}>
        <Image style={styles.banner} source={{ uri:'https://charityonlineraffle.com/wp-content/uploads/2021/07/faq.png'}} />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Quiz")}}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 20,
    paddingHorizontal:16,
    flex: 1,
    justifyContent:'space-between',
  },
  banner:{
    width: 300,
    height: 300
  },
  ImageContainer: {
    width: '100%',
    display: 'flex', 
    alignItems: 'center',
    justifyContent:'center'
  },
  button:{
    backgroundColor:'#292F36',
    width: '100%',
    padding:20,
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
  },
  buttonText:{
    color:'white',
    fontSize:20,
  }
});

export default Home;