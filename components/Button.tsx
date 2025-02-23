import { Pressable, Text, View } from "react-native";
import Btn from "@/assets/css/button";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type props = {
  label: string;
  theme?: "Primary";
};

export default function Button({ label, theme }: props) {
  if (theme === "Primary") {
    return (
      <View
        style={[
          Btn.buttonContainer,
          { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[Btn.button, { backgroundColor: "#fff" }]}
          onPress={() => alert("You pressed a button.")}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={"#25292e"}
            style={Btn.buttonIcon}
          />
          <Text style={[Btn.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={[Btn.buttonContainer]}>
      <Pressable
        style={[Btn.button]}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={[Btn.buttonLabel]}>{label}</Text>
      </Pressable>
    </View>
  );
}
