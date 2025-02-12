import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Text, View} from 'react-native';
import Input from '../components/Input/Input';
import {Navigation, UserData} from '../helpers/types';
import mockData from '../mockData/mockData.json';
import {styles} from '../styles/styles';

export default function EnterDetails({navigation}: {navigation: Navigation}) {
  const [userData, setUserData] = useState<UserData>(mockData);
  const [currentSize, setCurrentSize] = useState(5);

  function createPaginator() {
    let updatedUserData = mockData.map(mockItem => {
      const userItem = userData.find(user => user.id === mockItem.id);
      return userItem ? {...mockItem, value: userItem.value} : mockItem;
    });
    let data = JSON.parse(JSON.stringify(updatedUserData));
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

  useEffect(() => {
    loadMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      {userData.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <FlatList
            data={userData}
            renderItem={({item, index}) => (
              <View style={styles.row}>
                <Text style={styles.label}>{item.fieldName}</Text>
                <Input
                  inputField={item}
                  onPress={text => {
                    let userDataCopy = JSON.parse(JSON.stringify(userData));
                    userDataCopy[index].value = text;
                    setUserData(userDataCopy);
                  }}
                />
              </View>
            )}
            ListFooterComponent={
              <Button
                title="Next Page"
                onPress={() =>
                  navigation.navigate('ShowDetails', {
                    userData: userData,
                  })
                }
              />
            }
            onEndReached={() => loadMore()}
            keyExtractor={item => item.id.toString()}
          />
        </>
      )}
    </View>
  );
}
