import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Create = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "#e8e8e8" : "black"}}>Create</Text>
    </View>
  )
}

export default Create