import { View , ActivityIndicator} from 'react-native';
import React, { Component } from 'react';
import { Overlay,Text } from '@rneui/base';
import { styles } from './LoadingModalstyles';

const LoadingModal =(props) =>{
  const {show=false,text } = props;
  return (
  <Overlay isVisible={show} overlayStyle={styles.overlay}>
    <View style={styles.view}>
      <ActivityIndicator size= 'large' color= "#17202A"/>
      {text && <Text style={styles.text}>{text}</Text>}
    </View>
  </Overlay>
  )
}
export default LoadingModal;


