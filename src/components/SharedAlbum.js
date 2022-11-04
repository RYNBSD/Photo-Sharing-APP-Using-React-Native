import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import ImageGallery from './ImageGallery';
import Avatars from './Avatars'
import theme from '../../assets/themes';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({ navigation, route }) => {

  const { album } = route.params;
  console.log(album);

  return (
    <ScrollView>
      <SharedAlbumTitleCard album={album}/>
      <View style={styles.avatarContainer}>
        <Avatars avatars={album.avatars} />
        <Text style={styles.avatarContainerText}>
          {`${album.avatars.length} people`}
        </Text>
      </View>
      <ImageGallery images={backgroundImages} />
    </ScrollView>
  )
}

export default SharedAlbum

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.l,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.m,
  },
  avatarContainerText: {
    ...theme.textVariants.body3,
    color: theme.colors.gray,
  },
})