import React from 'react';
import {View} from 'react-native';
import Categories from '../components/Cetegories';
import TrendingNews from '../components/TrendingNews';
import TrendingListNews from '../components/TrendingListNews';

const HomeScreen = props => {
  return (
    <View>
      <Categories navigation={props.navigation} />
      <TrendingNews navigation={props.navigation} />
      <TrendingListNews navigation={props.navigation} />
    </View>
  );
};
export default HomeScreen;
