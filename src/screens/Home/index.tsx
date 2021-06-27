import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { RectButton } from "react-native-gesture-handler";

import { CategorySelect } from "../../components/CategorySelect";
import { Appointment, AppointmentProps } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../../configs/storage";
import { LogoutModal } from "../../components/LogoutModal";
import { Button } from "../../components/Button";

export function HomeScreen() {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [openLogoffModal, setLogoffModal] = useState(false);

  const navigation = useNavigation();

  function handleCloseLogoff() {
    setLogoffModal(false);
  }
  function handleOpenLogoff() {
    setLogoffModal(true);
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }
    setLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  return (
    <>
      <Background>
        <View style={styles.header}>
          <RectButton onPress={handleOpenLogoff}>
            <Profile />
          </RectButton>
          <ButtonAdd onPress={handleAppointmentCreate} />
        </View>

        {
          <>
            <CategorySelect
              categorySelected={category}
              setCategory={handleCategorySelect}
            />
            <View style={styles.content}>
              <ListHeader
                title="Partidas agendadas"
                subtitle={`Total ${appointments.length}`}
              />

              <FlatList
                data={appointments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Appointment
                    data={item}
                    onPress={() => handleAppointmentDetails(item)}
                  />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                contentContainerStyle={{ paddingBottom: 69 }}
                style={styles.matches}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </>
        }
      </Background>
      <LogoutModal visible={openLogoffModal} closeModal={handleCloseLogoff} />
    </>
  );
}
