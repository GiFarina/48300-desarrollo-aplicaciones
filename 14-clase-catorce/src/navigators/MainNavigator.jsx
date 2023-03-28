import {NavigationContainer} from '@react-navigation/native'
import TabNavigator from './TabNavigator';

const MainNavigator = () =>{
    return (
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
        );
}

export default MainNavigator;