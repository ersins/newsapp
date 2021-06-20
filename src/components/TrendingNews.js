import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import config from '../../config/config';
import axios from 'axios';

const TrendingNews = props => {
  const [news, setNews] = useState([]);
  const API_KEY = config.API_KEY;

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`)
      .then(res => setNews(res.data.articles))
      .catch(err => console.log(err));
  }, []);
  return (
    <View>
      {news.length === 0 ? (
        <ActivityIndicator color="black" size="large" />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {news.map((newsItem, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  props.navigation.navigate('WebView', {url: newsItem.url});
                }}>
                <View style={{margin: 10}}>
                  <Image
                    source={{uri: `${newsItem.urlToImage}`}}
                    style={{height: 200, width: 200, borderRadius: 12}}
                  />
                  <Text style={{width: 200, textAlign: 'justify'}}>
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
export default TrendingNews;
