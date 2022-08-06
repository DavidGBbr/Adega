import React from 'react';
import { ImageBackground, Text } from 'react-native';
import styles from './styles';

import capa from '../../assets/capa.jpg';

export default function TelaInicio() {
 return (
   <ImageBackground
    source={capa}
    style={styles.container}
    blurRadius={ 10 }>
    <Text style={styles.title}>Adega Preferida</Text>
    <Text style={styles.description}>Aqui você encontra os melhores e mais saborosos vinhos.</Text>
   </ImageBackground>
  );
}