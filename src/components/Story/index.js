import { TouchableOpacity, Image, StyleSheet } from 'react-native';
export default function Story({image}) {
    return(
        <TouchableOpacity>
          <Image style={style.story} source={image} />
        </TouchableOpacity>
    );
}

const styles= StyleSheet.create({
    story: {width: 100, height: 100, borderRadius: 50},
});