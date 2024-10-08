import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons';

const TabBar = ({ state, descriptors, navigation }) => {

    const icons = {
      index: (props)=> <Feather name="home" size={26} color={greyColor} {...props} />,
      explore: (props)=> <Feather name="map-pin" size={26} color={greyColor} {...props} />,
      create: (props)=> <Feather name="plus-square" size={26} color={greyColor} {...props} />,
      profile: (props)=> <Feather name="user" size={26} color={greyColor} {...props} />,
      my_events: (props)=> <Feather name="calendar" size={26} color={greyColor} {...props} />,
    }

    const isDarkMode = useColorScheme() === 'dark';

    const primaryColor = '#0ea2e6';
    const greyColor = isDarkMode ? '#c7c7c7' : '#737373';

  return (
    <View style={[styles.tabbar, isDarkMode ? styles.tabbarDark : styles.tabbarLight]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        if(['_sitemap', '+not-found'].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: route.key,
        //   });
        // };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            // onLongPress={onLongPress}
          >
            {
              icons[route.name]({
                color: isFocused? primaryColor : greyColor
              })
            }
            <Text style={{ 
              color: isFocused ? primaryColor : greyColor,
              fontSize: 11,
              fontWeight: '500',
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    position:'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    shadowOpacity: 0.1,
  },
  tabbarLight: {
    backgroundColor: 'white',
  },
  tabbarDark: {
    backgroundColor: '#1c1c1c',
  },
  tabbarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
})

export default TabBar