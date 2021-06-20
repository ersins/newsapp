import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import config from '../../config/config';
import axios from 'axios';

const GetNews = props => {
  const API_KEY = config.API_KEY;
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidht = Dimensions.get('window').width;
  const [news, setNews] = useState([]);
  useEffect(() => {
    props.navigation.setOptions({
      title: props.route.params.category,
    });
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=${props.route.params.category}&country=tr&apiKey=${API_KEY}`,
      )
      .then(response => setNews(response.data.articles))
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={{alignItems: 'center'}}>
      {news.length === 0 ? (
        <ActivityIndicator
          style={{
            height: deviceHeight,
            width: deviceWidht,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          color="black"
          size="large"
        />
      ) : (
        <ScrollView>
          {news.map((newsItem, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.navigate('WebView', {url: newsItem.url});
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    elevation: 4,
                    width: deviceWidht - 30,
                    marginVertical: 7,
                  }}>
                  <Image
                    source={{uri: `${newsItem.urlToImage}`}}
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 12,
                      margin: 7,
                    }}
                  />
                  <Text
                    style={{
                      width: deviceWidht - 130,
                      paddingLeft: 10,
                      paddingTop: 5,
                    }}>
                    {newsItem.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};
export default GetNews;
