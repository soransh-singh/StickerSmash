import { View, Pressable, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Btn from "@/assets/css/button";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress: () => void;
  label: string;
};

function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={Btn.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#ffffff" />
      <Text style={Btn.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

export default IconButton;
