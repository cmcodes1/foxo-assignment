import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';
import {ShowDetailsProps, UserData} from '../helpers/types';
import {styles} from '../styles/styles';

export default function ShowDetails({route, navigation}: ShowDetailsProps) {
  let userFormData: UserData = route?.params?.userData;

  const [userData, setUserData] = useState<UserData>(userFormData);
  const [currentSize, setCurrentSize] = useState(5);

  function createPaginator() {
    let data = JSON.parse(JSON.stringify(userFormData));
    const keys = Object.keys(data);

    return function getNextPage() {
      let paginatedData: UserData = [];
      keys.slice(0, currentSize).forEach(key => {
        paginatedData.push(data[key]);
      });
      setCurrentSize(currentSize + 5);
      return paginatedData;
    };
  }

  const loadMore = () => {
    const paginator = createPaginator();
    let paginatedData = paginator();
    paginatedData && setUserData(paginatedData);
  };

  const handleNavigation = () => {
    navigation.navigate('PreviewDetails', {
      userData: userData,
    });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    loadMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      <Text style={[styles.header, styles.marginBottom]}>List Details</Text>
      <InfiniteScroll
        userData={userData}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.label}>{item.fieldName}: </Text>
            <Text style={styles.label}>{item.value}</Text>
          </View>
        )}
        lisFooterComponent={
          <>
            <Button title="Preview" onPress={handleNavigation} />
            <View style={styles.marginBottom} />
            <Button title="Go Back" onPress={handleBack} />
          </>
        }
        loadMore={loadMore}
      />
    </View>
  );
}
