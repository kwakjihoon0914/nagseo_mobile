import HomeStackScreen from './home/stack';
import SearchStackScreen from './search/stack';
import SettingsStackScreen from './settings/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ReactNode } from 'react';

const Tab = createBottomTabNavigator();

const HeaderLessTabScreen = (props: any) => {
  return <Tab.Screen {...props} />;
};

const Screens = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="SearchStack"
        component={SearchStackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="SettingsStack"
        component={SettingsStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Screens;
