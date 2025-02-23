import Common from "@/assets/css/common";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { PropsWithChildren } from "react";
import { Modal, Pressable, Text, View } from "react-native";

type props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

function EmojiPicker({ isVisible, children, onClose }: props) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={[Common.modalContent]}>
        <View style={[Common.titleContainer]}>
          <Text style={[Common.title]}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name={"close"} color={"#FFF"} size={22} />
          </Pressable>
        </View>
        {children}
      </View>
    </Modal>
  );
}

export default EmojiPicker;
