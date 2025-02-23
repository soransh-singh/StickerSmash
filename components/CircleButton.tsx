import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Btn from "@/assets/css/button";

type Props = {
  onPress: () => void;
};

function CircleButton({ onPress }: Props) {
  return (
    <View style={Btn.circleButtonContainer}>
      <Pressable style={Btn.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

export default CircleButton;
