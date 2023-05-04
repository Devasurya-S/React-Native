import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    SafeAreaView
} from 'react-native'

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark'

    return(
        <SafeAreaView style={styles.container}>
                    <View style={styles.container}>
                        <Text style={isDarkMode ? styles.whiteText:styles.darkText}>Hey You</Text>
                    </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },
    darkText:{
        color: '#000000'
    }
})

export default AppPro

