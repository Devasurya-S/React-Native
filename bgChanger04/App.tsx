import React, { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState("#ffffff")
  const [random1, setRandom1] = useState("#ffffff")
  const [random2, setRandom2] = useState("#ffffff")
  const [random3, setRandom3] = useState("#ffffff")
  const [random4, setRandom4] = useState("#ffffff")

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let i = 5
    
    while (i!=0) {
      let color = "#"
      for (let j = 0; j < 6; j++) {
        color += hexRange[Math.floor(Math.random()*16)]
      }    
      switch (i) {
        case 1:
          setRandomBackground(color)
          break;
        case 2:
            setRandom1(color)
            break;
        case 3:
          setRandom2(color)
          break;
        case 4:
          setRandom3(color)
          break;
        case 5:
          setRandom4(color)
          break;

        default:
          break;
      }
      i--
    }   
  }

  const colorChange = () => {
    generateColor()
  }
  
  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.triangleContainer,{backgroundColor: randomBackground}]}>
          <View style={[styles.triangleShapeCSS,{borderBottomColor: random1}]} />
          <View style={[styles.triangleShapeCSS,{borderBottomColor: random2}]} />
      </View>
      <View style={[styles.container,{backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={colorChange}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.triangleContainer,{backgroundColor: randomBackground}]}>
          <View style={[styles.triangleShapeCSS,{borderBottomColor: random3}]} />
          <View style={[styles.triangleShapeCSS,{borderBottomColor: random4}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#8E44AD",
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  actionBtnText: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase"
  },
  triangleContainer: {
    flex: 0,
    flexDirection : "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 40
  },
  triangleShapeCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 60,
    borderRightWidth: 60,
    borderBottomWidth: 120,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  }

  
});

export default App;
