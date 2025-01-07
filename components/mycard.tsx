import { Pressable, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome'


type Props = {
    onPress: () => void;
    icon: string;
    text: string;
 
}
export const MyCard = ({icon, text,onPress}: Props)=>{
    return(
        <View className="bg-gray-100 h-20  rounded-3xl mx-5 mt-8">
            <Pressable >
            <View className="flex-row items-center p-6">
                <Icon name={icon} size={24} color="black"/>
                <Text className="font-semibold text-xl ml-5">{text}</Text>
            </View>
        </Pressable>
        </View>
       
    )
}
