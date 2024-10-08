import React from 'react'
import { Image } from 'react-native'

const LogoTitle = () => {
    return (
        <Image
        style={{ width: 120, height: 40, marginBottom: 10 }}
        source={require('../assets/images/planit-full-logo.png')}
        />
    )
}

export default LogoTitle