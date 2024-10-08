import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const MyEvents = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "#e8e8e8" : "black"}}>My Events</Text>
    </View>
  )
}

export default MyEvents