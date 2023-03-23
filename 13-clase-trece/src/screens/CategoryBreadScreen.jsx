import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
//import { BREADS } from '../data/products'
import BreadItem from '../components/BreadItem'
import { useSelector,useDispatch } from 'react-redux'
import { filterBreads,selectBread } from '../store/actions/bread.action'

const CategoryBreadScreen = ({ navigation, route }) => {
    //const breads = BREADS.filter(bread=>bread.categoryId === route.params.categoryId)
    
    const categoryBreads = useSelector(state=>state.breads.filteredBreads)
    const dispatch = useDispatch()
    const category = useSelector(state=>state.categories.selected)
    //console.log(category)

    useEffect(()=>{
        dispatch(filterBreads(category.id))
    },[])

    const onHandleSelectedBread = (item)=>{
        dispatch(selectBread(item.id))
        navigation.navigate('Detail',{
            //productId:item.id,
            name:item.title,
        })
    }

    const renderItemBread = ({item}) =>(
        <BreadItem item={item} onSelected={onHandleSelectedBread} />
    )
    
    return (
        <FlatList 
            data={categoryBreads}
            renderItem={renderItemBread}
        />
    )
}

export default CategoryBreadScreen

