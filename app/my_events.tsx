import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const MyEvents = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "white" : "black"}}>My Events</Text>
    </View>
  )
}

export default MyEvents