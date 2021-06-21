import React from 'react';
import { Text, View, StatusBar, Image } from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon/ButtonIcon';
import IllustrationImg from "../../assets/illustration.png";
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />

      <Image source={IllustrationImg} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas {`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>Crie grupos para jogar seus games {`\n`}
        favoritos com seus amigos</Text>
      </View>

      <ButtonIcon activeOpacity={0.7} title="Entrar com Discord" />

    </View>
  );
}

// 1:05:21
