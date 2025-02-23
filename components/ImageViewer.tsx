import { Image, type ImageSource } from "expo-image";
import Common from "@/assets/css/common";

type props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: props) {
  return <Image source={imgSource} style={Common.image} />;
}
