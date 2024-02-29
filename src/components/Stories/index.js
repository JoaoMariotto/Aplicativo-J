import Foto1 from "../../assets/yag.jpg";
import { StyleSheet, Image, ScrollView,TouchableOpacity } from "react-native";
import Story from "../Story";

export default function Stories() {
    return(
        <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Story image={Foto1}/>
        <Story image={Foto1}/>
        <Story image={Foto1}/>
        <Story image={Foto1}/>
        <Story image={Foto1}/>
        <Story image={Foto1}/>
        <Story image={Foto1}/>
      </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        gap: 8,
        height: 100,
    },
});