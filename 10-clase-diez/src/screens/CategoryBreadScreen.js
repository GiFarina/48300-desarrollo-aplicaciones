import { FlatList } from 'react-native'
import React from 'react'

import { BREADS } from '../data/breads'
import BreadItem from '../components/BreadItem'

const CategoryBreadScreen = ({ route, navigation }) => {

  const { categoryId } = route.params

  const breads = BREADS.filter(bread => bread.category === categoryId)

  const handleOnSelected = (item) => {
    navigation.navigate('Detail', {
      bread: item
    })
  }

  const renderBreadItem = ({ item }) => (<BreadItem item={item} onSelected={handleOnSelected} />)

  return (
    <FlatList 
      data={breads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  )
}

export default CategoryBreadScreen
