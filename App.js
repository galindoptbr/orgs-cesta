import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView } from "react-native";
import Cesta from "./src/telas/Cesta";
import Itens from "./src/telas/Components/Itens";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Cesta />
        <Itens />
      </ScrollView>
    </SafeAreaView>
  );
}
