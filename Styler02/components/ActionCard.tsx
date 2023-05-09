import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){ 
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                What's new in Javascript 21 - ES12
            </Text>
        </View>
        <Image source={{uri:('https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg')}} style={styles.cardImage}/>
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://reactnative.dev/')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{},
    card:{},
    elevatedCard:{},
    headingContainer:{},
    headerText:{},
    cardImage:{
        height: 100
    },
    bodyContainer:{},
    footerContainer:{},
    socialLinks:{}
})