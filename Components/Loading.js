import React, { useEffect , useRef} from 'react'
import {StyleSheet, View, Animated} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'

export default function Loading() {


  return (
    <View style={styles.container}>
        <AnimatedLoader
          visible={true}
          animationStyle={styles.lottie}
          speed={1}
          source={require("../assets/loader.json")} // Add here
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#010100'
    },
    lottie: {
      width: 200,
      height: 200,
    }
})
