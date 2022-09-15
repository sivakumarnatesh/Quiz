import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Text>Result</Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image style={styles.banner} source={{ uri:'https://charityonlineraffle.com/wp-content/uploads/2021/07/faq.png'}} />
      </View>
      <View>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result;

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
  }
})