import { View, StyleSheet} from "react-native";
import PessoaProfile from "./src/assets/yag.jpg"
import InfoProfile from "./src/components/InfoProfile";
import MyPosts from './src/components/MyPosts';
import Post from './src/assets/post-example.png';

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
      />
      <MyPosts image={Post}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 16,
  },
});
