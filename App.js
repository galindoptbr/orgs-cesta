import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Cesta from "./src/telas/Cesta";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
