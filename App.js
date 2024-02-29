import { View, StyleSheet} from "react-native";
import PessoaProfile from "./src/assets/yag.jpg"
import InfoProfile from "./src/components/InfoProfile";

export default function App() {
  return (
    <View
      style={{
        marginVertical: 32,
        marginHorizontal: 16,
      }}
    >
      <InfoProfile 
      image={PessoaProfile}
      publi={5} 
      followers={367} 
      following={200}
      descricao={"João"}
      />
    </View>
  );
}
