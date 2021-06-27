import React, { useContext } from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";
import * as AuthSession from "expo-auth-session";

import { illustrations } from "../../utils/illustrations";
import { AuthContext, useAuth } from "../../hooks/auth";

import { styles } from "./styles";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { theme } from "../../global/theme";

const illustrationIndex = Math.floor(Math.random() * 5);
import IllustrationImg from "../../assets/illustrations/illustration.png";

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error as string);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustrations[illustrationIndex]}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Conecte-se e organize suas jogatinas</Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
