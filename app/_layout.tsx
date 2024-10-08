import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/TabBar'
import LogoTitle from '@/components/LogoTitle'

const _layout = () => {
  return (
    <Tabs
      tabBar={props=> <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Explore"
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Create"
        }}
      />
      <Tabs.Screen
        name="my_events"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "My Events"
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: (props) => <LogoTitle />,
          title: "Profile"
        }}
      />
    </Tabs>
  )
}

export default _layout