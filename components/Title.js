import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.titlecontainer}>
      <Text style={styles.text}>Quizzler</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  titlecontainer:{
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: 16,
  },
  text:{
    fontSize: 36,
    fontWeight:'600',
    color: 'black',
  },
})