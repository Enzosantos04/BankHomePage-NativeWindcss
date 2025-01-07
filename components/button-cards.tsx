import { Pressable, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome'


type Props = {
    onPress: () => void;
    text: string;
    subtext: string;
}
export const ButtonBoxes = ({  text, subtext, onPress}: Props)=>{
    return(
        <View className="bg-gray-100 h-24  rounded-3xl mx-2 mt-5">
            <Pressable>
            <View className=" p-6">
            <Text className="font-semibold text-xl break-all  whitespace-normal" numberOfLines={3}>{text}</Text>
            <Text className="font-semibold text-xl break-all  whitespace-normal" numberOfLines={3}>{subtext}</Text>
            </View>
        </Pressable>
        </View>
       
    )
}
