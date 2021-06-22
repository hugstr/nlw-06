import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, FlatList } from "react-native";
import { GuildIcon } from "../GuildIcon";

import { styles } from "./styles";

export type GuildProps = {
  data:
}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

export type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
      </View>
    </RectButton>
  )
}
