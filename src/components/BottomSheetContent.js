import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import theme from '../../assets/themes'

const BottomSheetContent = () => {
  return (
    <View>
      <Text>BottomSheetContent</Text>
    </View>
  )
}

export default BottomSheetContent

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 250,
  },
  buttonLarge: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSmall: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonTitle: {
    ...theme.textVariants.h2,
  },
})