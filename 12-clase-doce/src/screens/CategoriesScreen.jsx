import { FlatList } from 'react-native'
import React from 'react'
//import { CATEGORIES } from '../data/categories'
import GridItem from '../components/GridItem'
import { useSelector,useDispatch } from 'react-redux'
import { selectCategory } from '../store/actions/category.action'

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector(state=>state.categories.categories)
    const dispatch = useDispatch()

    const onHandleSelectedCategory = (item) => {
        dispatch(selectCategory(item.id))
        /* navigation.navigate('Breads',{
            categoryId: item.id,
            name: item.title,
        }) */
        navigation.push("Breads",{name:item.title})
        
    }

    const renderGridItem = ({item}) =>{
        return(
            <GridItem item={item} onSelected={onHandleSelectedCategory} />
        )
    }

    return (
        <FlatList 
            data={categories}
            renderItem={renderGridItem}
            keyExtractor={item=>item.id}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

