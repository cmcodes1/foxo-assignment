import {NavigationProp} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Button, ScrollView, Text, View} from 'react-native';
import Input from '../components/Input/Input';
import {updateUserData} from '../helpers/helpers';
import {InputField, UserData, UserDataInputFields} from '../helpers/types';
import {styles} from '../styles/styles';
import mockData from '../mockData/mockData.json';

export default function EnterDetails({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [currentSize, setCurrentSize] = useState(5);

  function createPaginator() {
    let data = JSON.parse(JSON.stringify(mockData));
    const keys = Object.keys(data);

    return function getNextPage() {
      const paginatedData: {[key: string]: any} = {};
      keys.slice(0, currentSize).forEach(key => {
        paginatedData[key] = data[key];
      });

      setCurrentSize(currentSize + 5);
      return paginatedData;
    };
  }

  const loadMore = () => {
    const paginator = createPaginator();
    const paginatedData = paginator();

    if (paginatedData) {
      let updatedUserData = {...userData, ...paginatedData};
      setUserData(updatedUserData);
    }
  };

  useEffect(() => {
    loadMore();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: {
    layoutMeasurement: {height: number};
    contentOffset: {y: number};
    contentSize: {height: number};
  }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const scrollRef = useRef<ScrollView | null>(null);

  return (
    <View style={styles.root}>
      {Object.keys(userData).length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <ScrollView
            ref={scrollRef}
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                loadMore();
                if (scrollRef.current) {
                  scrollRef.current.scrollToEnd();
                }
              }
            }}>
            {Object.entries(userData).map(item => (
              <View key={item[0]} style={styles.row}>
                <Text style={styles.label}>{item[0]}</Text>
                <Input
                  inputFieldName={item[0] as UserDataInputFields}
                  inputField={item[1] as InputField}
                  onPress={text =>
                    updateUserData(
                      item[0] as UserDataInputFields,
                      text,
                      userData,
                      setUserData,
                    )
                  }
                />
              </View>
            ))}
          </ScrollView>
          <Button
            title="Next Page"
            onPress={() =>
              navigation.navigate('ShowDetails', {
                userData: userData,
              })
            }
          />
        </>
      )}
    </View>
  );
}
