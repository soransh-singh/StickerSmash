import { View } from "react-native";
import Common from "@/assets/css/common";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.jpg");

export default function Index() {
  return (
    <View style={[Common.container]}>
      <View style={Common.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={[Common.footerContainer]}>
        <Button label={"Choose a photo"} theme="Primary" />
        <Button label={"Use this photo"} />
      </View>
    </View>
  );
}
