import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image source={{
            uri: 'https://2.bp.blogspot.com/-Mk2cFsdU7w4/ToAfNRsqH1I/AAAAAAAABi8/DxEdS7JuLSA/s1600/most+beautiful+place+in+the+world-1.jpg'
        }}
            style={styles.cardImage} 
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra, Uttar Pradesh, India</Text>
            <Text style={styles.cardDescription}>The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India.</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      card:{
        width: 300,
        height: 430,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
      cardElevated:{
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
      },
      cardImage:{
        height: 250,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
      },
      cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
      },
      cardTitle:{
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
      },
      cardLabel:{
        color: '#000000',
        fontSize: 16,
        marginBottom: 6   
      },
      cardDescription:{
        color: '#242B2E',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
      },
      cardFooter:{
        color: '#000000',
        fontSize: 12,
      },
      bigblue: {
        borderColor: 'black',
        borderWidth: 1
    }
})