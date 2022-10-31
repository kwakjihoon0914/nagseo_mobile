import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { ReactNode, useState } from 'react';

interface PullToRefreshViewProps {
  onRefresh?: () => void | Promise<void>;
  children: ReactNode;
}

const PullToRefreshView = ({ onRefresh, children }: PullToRefreshViewProps) => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {children}
    </ScrollView>
  );
};

export default PullToRefreshView;
