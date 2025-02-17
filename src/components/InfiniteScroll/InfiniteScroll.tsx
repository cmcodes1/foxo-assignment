import React from 'react';
import {FlatList} from 'react-native';
import {UserData} from '../../helpers/types';

type InfiniteScrollProps = {
  userData: UserData;
  renderItem: ({item}: {item: any}) => JSX.Element;
  lisFooterComponent: JSX.Element;
  loadMore: () => void;
};

export default function InfiniteScroll(props: InfiniteScrollProps) {
  const {userData, renderItem, lisFooterComponent, loadMore} = props;

  return (
    <FlatList
      data={userData}
      renderItem={renderItem}
      ListFooterComponent={lisFooterComponent}
      onEndReached={() => loadMore()}
      keyExtractor={item => item.id.toString()}
    />
  );
}
