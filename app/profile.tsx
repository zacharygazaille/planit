import { View, Text, useColorScheme } from 'react-native'
import React from 'react'

const Profile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text style={{color: isDarkMode ? "white" : "black"}}>Profile</Text>
    </View>
  )
}

export default Profile