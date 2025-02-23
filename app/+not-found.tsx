import Common from "@/assets/css/common";
import { Link, Stack } from "expo-router";
import { View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={[Common.container]}>
        <Link href={"/"} style={[Common.button]}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}
