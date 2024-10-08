import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Explore = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "white" : "black"}}>Explore</Text>
    </View>
  )
}

export default Explore