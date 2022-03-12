import { StatusBar } from 'expo-status-bar';
import { version } from 'react-dom';
import { StyleSheet, Text, View, Style, ScrollView, Platform, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './css';
import { Icon } from 'react-native-elements/dist/icons/Icon';
//import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  return (
    <View style={styles.container}>
      {/*edit app.json for portrait,landscape, auto modes*/}
      <StatusBar style="auto" />

      <SafeAreaView style={styles.header}>
        <Icon name='login' style={{paddingLeft: 5, paddingBottom: 5, fontSize: 2}}/><Text> Login</Text>

        {/*
        <Text numberOfLines={3} style={{padding: 10}}>This is header navbar in row direction {'\n'}This is header navbar</Text>
        <Text>Next in flex-row</Text>
        */}

      </SafeAreaView>

      <ScrollView style={styles.mainBody}>
        <View style={
            {height: "10%"}
          }>
        <Text>This is the main body as a column</Text>
        <Text>This is the main body</Text>
        <Text>This is the main body</Text>
        <Text>This is the main body</Text>
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={{width: 100, height: 100}} />
        <Icon name='logout' />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text>This will be the apps Footer as a Row</Text>
      </View>

    </View>
  );
};






// THIS CAN BE REMOVED AS IT IS IMPORTED FROM CSS.JS FILE
/*const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  header: {
    //flex: 1,
    flexDirection: 'row',
    padding: 40,
    backgroundColor: 'powderblue',
    //borderColor: 'red',
    //borderWidth: 2
  },
  footer: {
    //flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'powderblue',
    //borderColor: 'red',
    //borderWidth: 2
  },
  mainBody: {
    //flex: 2,
    padding: 20,
    backgroundColor: 'skyblue',
    //borderColor: 'red',
    //borderWidth: 2
  }
});*/
