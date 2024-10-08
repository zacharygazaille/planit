import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'
import LogoTitle from '@/components/LogoTitle'

const _layout = () => {

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Tabs
      tabBar={props=> <TabBar {...props} />}
      sceneContainerStyle={{ backgroundColor: isDarkMode ? "#030303" : "#f0f0f0" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Home",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "white",
            shadowColor: "transparent",
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Explore",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "white",
            shadowColor: "transparent",
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Create",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "white",
            shadowColor: "transparent",
          },
        }}
      />
      <Tabs.Screen
        name="my_events"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "My Events",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "white",
            shadowColor: "transparent",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Profile",
          headerStyle: {
            backgroundColor: isDarkMode ? "#1c1c1c" : "white",
            shadowColor: "transparent",
          },
        }}
      />
    </Tabs>
  )
}

export default _layout