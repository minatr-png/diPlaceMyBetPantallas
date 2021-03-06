/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
//import { Navegacio } from './components/navegacio/Navegacio';

class App extends Component {
  render() {
    return (
      <View style={styles.contenidor}>
          <View style={styles.titulo}>
              <Text style={styles.tituloText}>TAKE A LOOK</Text>
              <Text style={styles.tituloText}>TO THIS EVENT</Text>
          </View>
          <View style={styles.seccion}>
            <Text style={styles.sectionMatch}>COPA DEL REY</Text>
            <View style={styles.container}>
              <Image
                style={styles.shield}
                source={{
                  uri:
                    'https://i.ibb.co/TvmNgvz/Valencia.png',
                }}
              />
              <Text style={styles.vs}>vs</Text>
              <Image
                style={styles.shield}
                source={{
                  uri:
                    'https://i.ibb.co/x3Zt0vj/Madrid.png',
                }}
              />
            </View>
          </View>
          <View style={styles.titulo}>
            <Text style={styles.tituloText}>DO YOU FEEL IN</Text>
            <Text style={styles.tituloText}>NEED OF HELP?</Text>
          </View>
          <View style={styles.seccion}>
            <View style={styles.sectionText}>
              <Text style={styles.sectionTextText}>CLICK TO FIND</Text>
              <Text style={styles.sectionTextText}>SOME ASSOCIATIONS</Text>
              <Text style={styles.sectionTextText}>THAT WILL HELP YOU</Text>
            </View>
          </View>  
      </View>
    );
  }
};

const styles = StyleSheet.create({
  contenidor: {
    flex: 1,
    flexDirection: 'column',
  },
  titulo: {
    flex:0.6,
    borderBottomWidth:2,
    backgroundColor: '#F7F0E8',
    borderBottomColor: '#797979',
    fontSize: 12,
    fontWeight: '600',
    height: 90,
  },
  seccion: {
    flex:2,
    borderBottomWidth:2,
    backgroundColor: '#E6D6D3',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    height: 240,
  },  
  barraMenu: {
    flex:0.5,
    backgroundColor: '#F3C1BC',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'left',
    height: 10000,
  },
  tituloText: {
    marginTop: 2,
    color: 'rgb(136, 63, 57)',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  sectionText: {
    marginTop: '20%',
  },
  sectionTextText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Comfortaa',
  },
  sectionMatch: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Comfortaa',
    marginTop: '5%',
  },
  vs: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginTop: '14%',
    fontFamily: 'Comfortaa',
  },
  shield: {
    height: '60%',
    width: '37%',
    marginTop: '5%',
    marginLeft: '4%',
    marginRight: '4%',
  },
  icon: {
    height: '80%',
    width: '7%',
    marginTop: '2%',
    marginLeft: '20%',
  },
  container: {
    flexDirection:'row',
    height: '100%',
    width: '100%',
  },
  halfContainer: {
    flexDirection:'row',
    height: '50%',
    width: '100%',
  },
  bottomBoxText: {
    color: 'black',
    fontFamily: 'Comfortaa',
    marginLeft: '18%',
  }
});

export default App;
