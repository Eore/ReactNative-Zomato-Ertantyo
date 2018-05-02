import React, { Component } from 'react';
import Axios from 'axios';
import {
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

import Post from './components/post'

export default class App extends Component {
  state = {
    listData: []
  }

  keyword = ''
  imageNotFound = 'http://www.wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg'
  
  search(keyword = '') {
    Axios.get(
      `https://developers.zomato.com/api/v2.1/search?q=${keyword.replace(' ', '%20')}`,
      { 
        headers: { 'user-key': 'f3df5a169d5d7e6b500306dd3d582d8f' }
      }
    )
    .then(res => {
      this.setState({ listData: res.data.restaurants.map(el => el.restaurant) })
    })
    console.log(this.state.listData)
  }

  render() {
    return (
      <View style={{ backgroundColor: 'pink', height: '100%' }}>
        <View style={{ backgroundColor: '#E24E41'}}>
          <View style={{ margin: 10, borderRadius: 3, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ marginHorizontal: 10, opacity: 0.5, height: 15, width: 15 }} source={{ uri: 'https://cdn3.iconfinder.com/data/icons/dev-toolpack/512/find-512.png' }}/>
            <TextInput 
              style={{ marginRight: 10, height: 40, flex: 1, backgroundColor: 'white' }} 
              underlineColorAndroid='transparent' 
              placeholder='Cari menu makanan...'
              onChangeText={(input) => this.keyword = input}
            />
          </View>
        </View>
        <Button color='#D35047' onPress={() => this.search(this.keyword)} title='LIHAT DAFTAR RESTO'/>
        <ScrollView>
          <View style={{ marginBottom: 20 }}></View>
          { 
            this.state.listData.map((el, i) => 
              <Post
                key={ i }
                title={ el.name } 
                price={ el.price_range * 10000 } 
                image={ el.thumb == '' ? this.imageNotFound : el.thumb }
                address={ el.location.address }
                city={ el.location.city }
              />
            )
          }
        </ScrollView>        
      </View>
    );
  }
}
