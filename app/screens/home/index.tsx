import MainLayout from '../../layouts/main';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Feed from '../../components/feed';
import Feeds from '../../components/feeds';

const HomeScreen = ({}) => {
  return (
    <MainLayout>
      <Feeds />
    </MainLayout>
  );
};

export default HomeScreen;
