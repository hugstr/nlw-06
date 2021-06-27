import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 550,
    alignItems: "center"
  },
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlay,
  },
  content: {
    paddingHorizontal: 23,
    flexDirection: "row",
    justifyContent:  "space-between",
    marginTop: 24
  },
  title: {
    fontFamily:theme.fonts.title500,
    color: theme.colors.heading,
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 20,
    marginLeft: 80
  },
  play: {
    fontFamily:theme.fonts.title500,
    color: theme.colors.primary,
    fontWeight: "bold",
    marginTop: 24,
    fontSize: 20,
    marginRight: 80
  }
});
