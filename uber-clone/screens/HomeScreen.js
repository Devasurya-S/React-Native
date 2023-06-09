import { StyleSheet, Text, View, SafeAreaView, Image, TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={
            {width: 100, height: 100, resizeMode: "contain"}
          }
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
              container: {
                flex: 0,
              },
              texInput : {
                fontSize: 18,
              }
            }
          }
          onPress={(data, details = null) => {
            console.log(location.lat);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }
            ))

            dispatch(setDestination(null))
          }}
          returnKeyType ={"search"}
          fetchDetails={true}
          enablePowerdByContainer={false}
          minLegth={2}
          querry = {{
            key: GOOGLE_MAPS_APIKEY,
            language: "en"
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder='Where From?'
        />
        <NavOptions/>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})