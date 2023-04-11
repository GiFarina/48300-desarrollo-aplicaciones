import React from 'react'
import { FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import PlaceItem from '../components/PlaceItem'

const PlaceListScreen = ({navigation}) => {
    const places = useSelector(state=>state.places.places)

    const renderPlaceItem = (data) => (
        <PlaceItem  
            title={data.item.title}
            image={data.item.image}
            address={data.item.address}
            onSelect={()=>navigation.navigate("Detalle", {placeId: data.item.id})}
        />
    )

    return (
        
        <FlatList style={{flex:1}}
            data={places}
            renderItem={renderPlaceItem}
            keyExtractor ={item => item.id}
        />
        
    )
}



export default PlaceListScreen
