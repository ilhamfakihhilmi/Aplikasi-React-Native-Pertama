import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet, ScrollView } from 'react-native';
import legion from '../MyTestApp/img/legion.jpg'

const App = () => {
  return (
    <ScrollView>
      <SampleComponent/>
    <StylingReactNativeComponent />
    </ScrollView>
  )
}

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View style={{
        width: 100,
        height: 100,
        backgroundColor: '#0abde3',
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: 20,
        marginLeft: 20,
      }} 
      />
    <View style={{padding:12, backgroundColor: 'lightgray', width:212, borderRadius: 10, marginHorizontal: 20}}>
      <Image source={legion} style={{ width: 188, height: 107, borderRadius: 8}} />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>Legion 5i i7 10750H</Text>
      <Text style={{fontSize: 12,color: '#f2994a', fontWeight: 'bold', marginTop: 16}}>Rp. 21.350.000,-</Text>
      <Text style={{fontSize: 12,color: '#000000', fontWeight: 'normal', marginTop: 16}}>Bekasi</Text>
      <View style={{backgroundColor: '#6fcf97', borderRadius: 20, paddingVertical: 6, marginTop: 20 }}>
        <Text 
        style={{color: '#ffffff', fontWeight: '600', textAlign: 'center',fontSize: 14}}>BELI</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
  }
})







const SampleComponent = () => {
  return (
    <View>
      <View
        style={{ width: 80, height: 80, backgroundColor: '#0abde3' }}
      />
      <Text>Ilham</Text>
      <Text>Fakih</Text>
      <Homes />
      <Photo />
      <TextInput style={{ borderWidth: 1 }} />
      <BoxGreen />
      <Profile />
    </View>
  )
}

const Homes = () => {
  return <Text>Hilmi.ST</Text>
}

const Photo = () => {
  return (<Image source={{ uri: 'https://placeimg.com/100/100/tech' }}
    style={{ width: 100, height: 100 }}
  />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini componen dari class</Text>
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: 'https://placeimg.com/100/100/animals' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ color: 'blue', fontSize: 24 }}>Ini kucing</Text>
      </View>
    );
  }
}

export default App;