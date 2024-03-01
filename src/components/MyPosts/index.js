import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import Post from "../../assets/post-example.png";
export default function MyPosts() {
    return (
        <View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <MaterialIcons name="grid-on" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="movie-open" size={34} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-outline" size={34} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.isso}>
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
                <Image source={Post} style={styles.foto} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    foto: {
        width: "33.3%",
        height: 150,
        borderWidth: 1,
        borderColor: "#ddd",
        
    },

    isso: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },

    icons:{
        flexDirection: "row",
        justifyContent: "space-around",

    },

});