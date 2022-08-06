import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import styles from './styles';

import vinhoBranco from '../../assets/vinho-branco.jpg';
import vinhoRose from '../../assets/vinho-rose.jpg';
import vinhoTinto from '../../assets/vinho-tinto.jpg';
import vinhoEspecial from '../../assets/vinho-especial.jpg';

export default function TelaCatalogo() {
 return (
   <View style={styles.container}>
    <ScrollView style={styles.containerScroll}>
      
      <Text style={styles.title}>Nossos vinhos</Text>
      <Text style={styles.description}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>

      <View style={styles.cardVinho}>
        <Image resizeMode='contain' source={vinhoBranco} style={styles.vinhoImg}/>
        <View style={styles.cardBoxDescription}>
          <Text style={styles.cardTitle}>Chatigny Chardonnay</Text>
          <Text style={styles.cardDescription}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
        </View>
      </View>

      <View style={styles.cardVinho}>
        <Image resizeMode='contain' source={vinhoRose} style={styles.vinhoImg}/>
        <View style={styles.cardBoxDescription}>
          <Text style={styles.cardTitle}>Concha y Toro Exportacion</Text>
          <Text style={styles.cardDescription}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
        </View>
      </View>

      <View style={styles.cardVinho}>
        <Image resizeMode='contain' source={vinhoTinto} style={styles.vinhoImg}/>
        <View style={styles.cardBoxDescription}>
          <Text style={styles.cardTitle}>Portada Winemaker's</Text>
          <Text style={styles.cardDescription}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
        </View>
      </View>

      <View style={styles.cardVinho}>
        <Image resizeMode='contain' source={vinhoEspecial} style={styles.vinhoImg}/>
        <View style={styles.cardBoxDescription}>
          <Text style={styles.cardTitle}>Elvio Cogno Ravera Barolo</Text>
          <Text style={styles.cardDescription}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
        </View>
      </View>

    </ScrollView>
   </View>
  );
}