import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './index';

const SearchStack = createNativeStackNavigator();

const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name={'Search'} component={SearchScreen} />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
