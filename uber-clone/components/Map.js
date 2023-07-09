import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import tw from 'tailwind-react-native-classnames'
import MapView, { Marker } from 'react-native-maps';
import { selectDestination, selectOrigin, setOrigin, setTravelTimeInformation, } from '../slices/navSlice';
import { useSelector,useDispatch } from 'react-redux';
import { MapViewDirections } from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY} from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  //For getting all the values for distance,time and price calculations
  useEffect(() => {
    if(!origin||!destination) return;
    const getTravelTime = async() => {
      fetch (
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&orgins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
        ).then((res) => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))//upadates the reacts data layer with needed info
        })
    }
    getTravelTime();
  },[origin, destination, GOOGLE_MAPS_APIKEY])

  //useEffect when ever origin or destination changes
  // useEffect(() => {
  //   if(!origin||!destination) return;

  //   //Zoom & Fit to markers
  //   mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
  //     edgePadding: {top:50, right:50, bottom:50, left:50},
  //   });
  // },[origin,destination]);

  return (
      <MapView
       style={tw`flex-1`}
       mapType="mutedStandard"
       region={{
          latitude: origin.latitude,//51.5072origin.locat,
          longitude: origin.longitude,//0.1276,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
     >

      {/* {origin && destination && (
        <MapViewDirections
        origin= "9.570778281448415, 76.57924051822607"
        destination= "9.568871149580474, 6.57898429105018"
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={3}
        strokeColor="black"
      />
      )} */}

      {origin?.latitude && (
      <Marker
        coordinate={{
          latitude: origin.latitude,
          longitude: origin.longitude,
        }}
        title="Origin"
        description={origin.description}
        identifier="origin"
      />) }

        {/* Below code not needed */}
      {destination?.latitude && (
      <Marker
        coordinate={{
          latitude: destination.latitude,
          longitude: destination.longitude,
        }}
        title="Origin"
        description={destination.description}
        identifier="origin"
      />) }


    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})