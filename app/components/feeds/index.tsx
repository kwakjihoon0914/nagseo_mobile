import { ScrollView } from 'react-native';
import Feed from '../feed';
import Padding from '../common/Padding';
import { EdgeInsets } from '../common/EdgeInsets';
import Column from '../common/Column';
import Container from '../common/Container';
import Row from '../common/Row';
import PullToRefreshView from '../common/PullToRefreshView';

const Feeds = () => {
  const handleRefresh = () => {
    console.log(1);
  };

  return (
    <PullToRefreshView onRefresh={handleRefresh}>
      <Container padding={EdgeInsets.symmetric({ horizontal: 16 })}>
        <Column>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return <Feed key={num}></Feed>;
          })}
        </Column>
      </Container>
    </PullToRefreshView>
  );
};

export default Feeds;
