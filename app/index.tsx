import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "white" : "black"}}>Home</Text>
    </View>
  )
}

export default Home