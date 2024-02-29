import { StyleSheet, Image, View, TouchableOpacity, Text} from "react-native";

export default function InfoProfile({
    image, 
    publi, 
    followers, 
    following, 
    descricao }) {
    return(
    <View style={styles.headerProfile}>
        <View>
        <TouchableOpacity>
            <Image style={styles.image} source={image}/>
        </TouchableOpacity>
        </View>
        <View  style={styles.headerText}>
            <View style={styles.headerTextDescri}>
                
                <Text>{publi}</Text>
                <Text>Publicações</Text>
            </View>
            <View style={styles.headerTextDescri}>
                
                <Text>{followers}</Text>
                <Text>Seguidores</Text>
            </View>
            <View style={styles.headerTextDescri}>
                
                <Text>{following}</Text>
                <Text>Seguindo</Text>
            </View>
        </View>
    </View>
    
    
    )
}

const styles = StyleSheet.create({
    headerProfile:{
        flexDirection:"row",
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    headerText: {
        flexDirection:"row",
        alignItems: "center",
        marginLeft: 20,
        gap: 30,
    },

    headerTextDescri:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

})

