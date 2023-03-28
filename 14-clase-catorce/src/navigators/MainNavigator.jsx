import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

  const isAuth = useSelector(state => state.auth.userId);

  return (
    <NavigationContainer>
      {isAuth ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default MainNavigator;