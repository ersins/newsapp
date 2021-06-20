import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

const categories = [
  'Entertainment',
  'Business',
  'Politics',
  'Health',
  'Tecnology',
  'Sports',
];

const Categories = props => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              props.navigation.navigate('GetNews', {category});
            }}>
            <View>
              <Text
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: 'black',
                  fontSize: 19,
                  margin: 10,
                  borderRadius: 12,
                }}>
                {category}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Categories;
