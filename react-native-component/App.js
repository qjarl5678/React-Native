import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = "Bamki";
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {(() => {
          if(name === 'Bamki') return 'My name is good bamki';
          else if(name === 'king') return 'my name is king';
          else return 'i am react-native';
        })
        ()}
        {/* My name is {name} */}
      </Text>
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
  text:{
    fontSize: 30,
  }
});
