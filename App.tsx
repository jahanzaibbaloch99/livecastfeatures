import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FFmpegKit ,FFprobeKit} from 'ffmpeg-kit-react-native';
import { useEffect } from 'react';

export default function App() {
  const myFile = require("./assets/sample.mp4")
  useEffect(() => {
    FFprobeKit.getMediaInformation(myFile).then(info => {
      console.log('Result: ' + JSON.stringify(info));
    }).catch((e) => {
      console.log(e , "e")
    })
  }, [])
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
