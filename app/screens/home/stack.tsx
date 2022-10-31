import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import SearchScreen from '../search';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <HomeStack.Screen name={'Home'} component={HomeScreen} />
        <HomeStack.Screen name={'Search'} component={SearchScreen} />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
