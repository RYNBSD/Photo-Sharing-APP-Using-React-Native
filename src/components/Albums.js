import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native'
import React, { useLayoutEffect, useRef } from 'react'

import theme from '../../assets/themes/index'
import albumPage from '../../assets/data/albumPage'
import Card from './Card'
import Separator from './Separator'


const Albums = ({ navigation, navigation: {setOptions} }) => {

  const sheetRef = useRef();

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity 
          onPress={() => {}} 
        >
          <View style={styles.openSheetButton}>
            <Text style={{
              color: '#fff', 
              fontSize: 24,
              }}
            >
              +
            </Text>
          </View>
        </TouchableOpacity>
      )
    })
  });

  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {
            albumPage.map((album, index) => (
              <View key={album.id}>
                <Card 
                  album={album}
                  navigation={navigation}  
                />
                {
                  index === 1 && <Separator />
                }
              </View>
            ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export default Albums

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});