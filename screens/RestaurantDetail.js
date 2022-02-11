import { View, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/RestaurantDetail/About'
import MenuItem from '../components/RestaurantDetail/MenuItems'

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1} style={{ marginVertical: 20 }}/>
      <ScrollView showsVerticalScrollIndicator={false}>
          <MenuItem />
      </ScrollView>
    </View>
  )
}