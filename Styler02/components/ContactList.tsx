import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name: 'Devasurya',
            status: 'Coding Now',
            imageUrl: 'https://cdn3.iconfinder.com/data/icons/generic-avatars/128/avatar_portrait_man_male-1024.png',
        },
        {
            uid:2,
            name: 'Cyril',
            status: 'Making your UI look good',
            imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
        },
        {
            uid:3,
            name: 'Goku',
            status: 'Meh, just gaming',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/95-512.png',
        },
        {
            uid:4,
            name: 'Tony',
            status: 'Stuck @ degree',
            imageUrl: 'https://cdn4.iconfinder.com/data/icons/avatar-circle-1-1/72/39-512.png',
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
            source={{uri: imageUrl}}
            style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
    container: {
        paddingHorizontal: 16,
        marginBottom: 3
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 60/2,
      marginRight: 14
    },
    userCard: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 3,
      padding: 8,
      borderRadius: 10,
      backgroundColor: '#8D3DAF'
    },
    userName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#FFF'
    },
    userStatus: {
      fontSize: 12
    }
})