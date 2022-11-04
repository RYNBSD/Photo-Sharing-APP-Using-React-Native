import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

import theme from '../../assets/themes'

const Avatars = ({ avatars }) => {
  return (
    <View>
      {
        avatars.map((avatar, index) => (
          <Image 
            key={index}
            source={avatar.image}
            style={[
              styles.avatarStyle,
              { zIndex: index, marginLeft: (index * 16) },
              index !== (avatars.length - 1) && { position: 'absolute' }
            ]}
          />
        ))
      }
    </View>
  )
}

export default Avatars

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: 'cover',
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: theme.borderRadius.xs,
    borderColor: theme.colors.white,
  }
})