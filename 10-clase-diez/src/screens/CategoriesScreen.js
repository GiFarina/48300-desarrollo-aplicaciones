import { FlatList } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem'
import { CATEGORIES } from '../data/categories'

const CategoriesScreen = ({ navigation }) => {

    const onSelectGridItem = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            categoryName: item.title
        })
    }

    const renderGridItem = ({ item }) => <GridItem item={item} onSelect={onSelectGridItem} />


    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
}

export default CategoriesScreen
