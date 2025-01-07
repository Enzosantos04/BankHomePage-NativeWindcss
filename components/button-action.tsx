import { Pressable, Text, View } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome'


type Props = {
    onPress: () => void;
    icon: string;
    label: string;
    badge?: string;
}

export const ButtonAction = ({icon,label, onPress, badge}:Props) =>{
    return(
        <Pressable className="w-24 mx-1">
            <View className="bg-gray-100 size-20 rounded-full justify-center items-center">
                <Icon name={icon} size={24} color="black"/>
            </View>
            {badge &&
            <View className="bg-nubank rounded h-6 -mt-6 items-center justify-center mr-4">
                <Text className="text-center font-semibold">{badge}</Text>
            </View>
            }
            <Text className="mt-3 text-center text-xl font-semibold">{label}</Text>
        </Pressable>
    )
}