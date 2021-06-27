import React, { ReactNode } from "react";
import {
  Text,
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { useAuth } from "../../hooks/auth";
import { Background } from "../Background";
import { LogoutButton } from "../LogoutButton";

type Props = ModalProps & {
  closeModal: () => void;
};

import { styles } from "./styles";
export function LogoutModal({ closeModal, ...rest }: Props) {
  const {user, signOut} = useAuth();
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
                <Text style={styles.title}>Deseja mesmo sair do Game<Text style={styles.play}>Play</Text>?</Text>
                <View style={styles.content}>
                  <LogoutButton title="Não" />
                  <LogoutButton title="Sim" onPress={() => signOut()} />
              </View>
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
