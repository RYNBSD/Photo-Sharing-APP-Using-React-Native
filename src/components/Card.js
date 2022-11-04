import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'

import theme from '../../assets/themes'
import Avatars from './Avatars'

const Card = ({ album, navigation }) => {
  return (
    <ImageBackground 
    source={album.background}
    style={styles.imageBackground}
    >
      <Pressable 
        onPress={() => navigation.navigate('SharedAlbum', {
          album,
        })}
      >
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{album.title}</Text>
            <Text style={styles.imageSubtitle}>{`Created by ${album.user}`}</Text>
          </View>
          <View>
            <Avatars
              avatars={album.avatars}
            />
          </View> 
        </View>
      </Pressable>
    </ImageBackground>
  )
}

export default Card

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
  },
  imageContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  },
})